import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "El-shaddai Mpaso — Medicine, Technology, Storytelling";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: 80,
          fontFamily: "sans-serif",
          color: "#f8fafc",
        }}
      >
        {/* Top: eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#f8fafc",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#94a3b8",
            }}
          >
            Storyyteller
          </div>
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            El-shaddai Mpaso
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.3,
              color: "#cbd5e1",
              maxWidth: 900,
            }}
          >
            Medicine, technology, and storytelling.
          </div>
        </div>

        {/* Bottom: meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#64748b",
          }}
        >
          <div>elshaddai.vercel.app</div>
          <div>MBBS · Health Tech · Research</div>
        </div>
      </div>
    ),
    { ...size }
  );
}