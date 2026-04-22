import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Scan() {
  const [error, setError] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: 250,
      },
      false,
    );

    scanner.render(
      async (decodedText) => {
        try {
          const data = JSON.parse(decodedText);

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

          const result = await res.json();
          alert(result.message);

          scanner.clear(); // stop after scan
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Server error");
          }
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }, []);

  return (
    <div>
      <h1>📱 Scan QR</h1>
      <div id="reader"></div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
