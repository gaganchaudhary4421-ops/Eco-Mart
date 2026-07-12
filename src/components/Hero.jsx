import React from "react";
import iphone from "../assets/images/Iphone_14_Pro.jpg";

export default function Hero() {
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

  return (
    <section style={{ borderBottom: "1px solid #eee" }}>
      <div className="container-fluid px-0">
        <div className="d-flex" style={{ minHeight: "340px" }}>
          {/* Sidebar */}
          <div
            style={{
              width: "350px",
              minWidth: "350px",
              borderRight: "1px solid #eee",
              padding: "8px 0",
            }}
          >
            {categories.map((cat, i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center"
                style={{
                  padding: "10px 20px",
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
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "40px 80px",
            }}
          >
            <div style={{ color: "#fff" }}>
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
                  fontSize: "48px",
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
            <img
              src={iphone}
              alt="iPhone 14 Pro"
              style={{ height: "300px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
