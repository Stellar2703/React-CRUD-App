// NoVncTerminal.js
import React, { useEffect, useRef } from 'react';
import { RFB } from 'novnc-core';

// Fetch VNC connection details
const getVncConnectionDetails = async (vmId, node, token, secret) => {
  const response = await fetch(`https://10.10.237.155/api2/json/nodes/${node}/qemu/${vmId}/vncproxy`, {
    method: 'POST',
    headers: {  
      Authorization: `PVEAPIToken=${token}=${secret}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch VNC details: ${response.statusText}`);
  }

  return response.json();
};

const NoVncTerminal = ({ vmId, token, secret }) => {
  const vncContainerRef = useRef(null);
  const rfbRef = useRef(null);

  useEffect(() => {
    const connectVNC = async () => {
      try {
        const node = 'your-node'; // Update with actual node name if required
        // Fetch connection details from Proxmox API
        const connectionDetails = await getVncConnectionDetails(vmId, node, token, secret);

        // Construct WebSocket URL
        const socketUrl = `wss://10.10.237.155:8006/api2/json/nodes/${connectionDetails.node}/qemu/${vmId}/vncwebsocket?port=${connectionDetails.port}&vncticket=${connectionDetails.ticket}`;

        // Initialize noVNC connection
        rfbRef.current = new RFB(vncContainerRef.current, socketUrl, {
          shared: true,
          credentials: {
            password: connectionDetails.ticket,
          },
        });

        // Optional event handlers
        rfbRef.current.addEventListener("connect", () => {
          console.log("Connected to VM VNC");
        });
        rfbRef.current.addEventListener("disconnect", () => {
          console.log("Disconnected from VM VNC");
        });
      } catch (error) {
        console.error("Failed to connect to VNC:", error);
      }
    };

    connectVNC();

    return () => {
      if (rfbRef.current) rfbRef.current.disconnect();
    };
  }, [vmId, token, secret]);

  return (
    <div>
      <h2>VM Console</h2>
      <div ref={vncContainerRef} style={{ width: "800px", height: "600px", border: "1px solid black" }} />
    </div>
  );
};

export default NoVncTerminal;