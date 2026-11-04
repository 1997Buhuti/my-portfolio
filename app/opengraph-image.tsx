import { ImageResponse } from "next/og";

import { portfolioData } from "@/data/portfolio";

export const alt = `${portfolioData.personal.name} · ${portfolioData.personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0f14",
          color: "#e5e7eb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: "#2dd4bf",
            marginBottom: 24,
          }}
        >
          {portfolioData.personal.monogram}
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {portfolioData.personal.name}
        </div>
        <div style={{ fontSize: 36, color: "#9ca3af" }}>
          {portfolioData.personal.title}
        </div>
      </div>
    ),
    { ...size },
  );
}
