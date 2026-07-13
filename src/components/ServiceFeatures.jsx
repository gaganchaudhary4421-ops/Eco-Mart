import React from "react";

const features = [
  {
    icon: "bi-truck",
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: "bi-headset",
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: "bi-shield-check",
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

export default function ServiceFeatures() {
  return (
    <section style={{ padding: "60px 0" }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {features.map((f, i) => (
            <div key={i} className="col-12 col-md-4 text-center">
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                  border: "8px solid #c0c0c0",
                }}
              >
                <i
                  className={`bi ${f.icon}`}
                  style={{ color: "#fff", fontSize: "24px" }}
                ></i>
              </div>
              <h6
                style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  marginBottom: "6px",
                }}
              >
                {f.title}
              </h6>
              <p style={{ fontSize: "13px", color: "#555", margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
