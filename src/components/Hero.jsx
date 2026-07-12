import React from "react";
import iphone from "../assets/images/Iphone_14_Pro.jpg";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function Hero() {
  return (
    <section style={{ borderBottom: "1px solid #eee" }}>
      <div className="container">
        <div className="d-flex" style={{ gap: "24px", padding: "24px 0" }}>
          {/* Sidebar - desktop only */}
          <div
            className="d-none d-lg-block"
            style={{
              width: "200px",
              minWidth: "200px",
              borderRight: "1px solid #eee",
              paddingRight: "16px",
            }}
          >
            {categories.map((cat, i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center"
                style={{
                  padding: "10px 0",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                <span>{cat}</span>
                {(cat === "Woman's Fashion" || cat === "Men's Fashion") && (
                  <i
                    className="bi bi-chevron-right"
                    style={{ fontSize: "12px" }}
                  ></i>
                )}
              </div>
            ))}
          </div>

          {/* Banner */}
          <div
            style={{
              flex: 1,
              background: "#000",
              borderRadius: "4px",
              minHeight: "340px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Text */}
            <div
              style={{
                color: "#fff",
                padding: "40px",
                zIndex: 1,
                maxWidth: "55%",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  marginBottom: "16px",
                  opacity: 0.8,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="apple"
                  style={{ width: "16px", filter: "invert(1)" }}
                />
                iPhone 14 Series
              </p>
              <h2
                style={{
                  fontSize: "clamp(24px, 4vw, 48px)",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  marginBottom: "24px",
                  color: "#fff",
                }}
              >
                Up to 10%
                <br />
                off Voucher
              </h2>
              <a
                href="#"
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  borderBottom: "1px solid #fff",
                  paddingBottom: "2px",
                  textDecoration: "none",
                }}
              >
                Shop Now →
              </a>
            </div>

            {/* iPhone image always visible */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "45%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={iphone}
                alt="iPhone 14 Pro"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "20px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Mobile category scroll */}
        <div
          className="d-lg-none"
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "12px",
            paddingBottom: "12px",
            scrollbarWidth: "none",
          }}
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              style={{
                whiteSpace: "nowrap",
                padding: "6px 14px",
                border: "1px solid #eee",
                borderRadius: "20px",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ textAlign: "center", paddingBottom: "16px" }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                width: i === 2 ? "20px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === 2 ? "#DB4444" : "#ccc",
                margin: "0 4px",
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
