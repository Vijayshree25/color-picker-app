import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ff0000");

  return (
    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Color Picker App</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: "200px", height: "100px", border: "none" }}
      />
      <p style={{ fontSize: "20px", marginTop: "20px" }}>Selected Color: {color}</p>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          margin: "20px auto",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)"
        }}
      />
    </div>
    </div>
  );
}
