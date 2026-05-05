import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#1C1917",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
        }}
      >
        <span
          style={{
            color: "#C2922C",
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            fontFamily: "sans-serif",
          }}
        >
          JF
        </span>
      </div>
    ),
    { ...size }
  );
}
