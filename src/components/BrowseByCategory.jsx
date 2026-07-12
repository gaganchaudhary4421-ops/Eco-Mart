import React, { useState } from "react";

const categories = [
  { name: "Phones", icon: "bi-phone" },
  { name: "Computers", icon: "bi-laptop" },
  { name: "SmartWatch", icon: "bi-smartwatch" },
  { name: "Camera", icon: "bi-camera" },
  { name: "HeadPhones", icon: "bi-headphones" },
  { name: "Gaming", icon: "bi-controller" },
];

export default function BrowseByCategory() {
  const [active, setActive] = useState("Camera");

  return (
    <section style={{ padding: "40px 0" }}>
      <div className="container">
        <div className="section-label">
          <span></span>
          <p>Categories</p>
        </div>

        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="section-title mb-0">Browse By Category</h2>
          <div className="d-flex gap-2">
            <button
              className="btn btn-light rounded-circle"
              style={{ width: "36px", height: "36px", padding: 0 }}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <button
              className="btn btn-light rounded-circle"
              style={{ width: "36px", height: "36px", padding: 0 }}
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="d-flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setActive(cat.name)}
              style={{
                width: "140px",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                cursor: "pointer",
                background: active === cat.name ? "#DB4444" : "#fff",
                color: active === cat.name ? "#fff" : "#1a1a1a",
                transition: "all 0.2s",
              }}
            >
              <i className={`bi ${cat.icon}`} style={{ fontSize: "28px" }}></i>
              <span style={{ fontSize: "13px", fontWeight: "500" }}>
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
