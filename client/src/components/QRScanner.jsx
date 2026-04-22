import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function QRScanner() {
  const [message, setMessage] = useState("");
  const [scanned, setScanned] = useState(false);

  const handleScan = async (result) => {
    if (result && !scanned) {
      setScanned(true); // 🔥 prevent spam

      try {
        const data = JSON.parse(result.text);

        const res = await fetch("http://localhost:5000/api/tickets/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_ADMIN_TOKEN",
          },
          body: JSON.stringify({
            ticketId: data.ticketId,
          }),
        });

        const response = await res.json();
        setMessage(response.message);
      } catch (err) {
        setMessage("Invalid QR");
      }
    }
  };

  return (
    <div>
      <h2>Scan Ticket</h2>

      <QrReader
        constraints={{ facingMode: "environment" }}
        onResult={(result, error) => {
          if (!!result) handleScan(result);
        }}
        style={{ width: "300px" }}
      />

      <p>{message}</p>

      <button onClick={() => setScanned(false)}>Scan Again</button>
    </div>
  );
}
