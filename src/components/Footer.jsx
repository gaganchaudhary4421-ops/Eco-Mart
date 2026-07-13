import React from "react";

export default function Footer() {
  return (
    <footer
      style={{ background: "#000", color: "#fff", padding: "60px 0 20px" }}
    >
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-3">
            <h5 style={{ fontWeight: "700", marginBottom: "16px" }}>
              Eco-Mart
            </h5>
            <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "16px" }}>
              Subscribe
            </p>
            <p style={{ fontSize: "13px", opacity: 0.7, marginBottom: "12px" }}>
              Get 10% off your first order
            </p>
            <div
              style={{
                display: "flex",
                border: "1px solid #fff",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  padding: "8px 12px",
                  color: "#fff",
                  fontSize: "12px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                <i className="bi bi-send" style={{ color: "#fff" }}></i>
              </button>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h6 style={{ fontWeight: "700", marginBottom: "16px" }}>Support</h6>
            {[
              "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
              "exclusive@gmail.com",
              "+88015-88888-9999",
            ].map((item, i) => (
              <p
                key={i}
                style={{ fontSize: "13px", opacity: 0.7, marginBottom: "10px" }}
              >
                {item}
              </p>
            ))}
          </div>

          <div className="col-6 col-md-2">
            <h6 style={{ fontWeight: "700", marginBottom: "16px" }}>Account</h6>
            {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map(
              (item) => (
                <p
                  key={item}
                  style={{
                    fontSize: "13px",
                    opacity: 0.7,
                    marginBottom: "10px",
                  }}
                >
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    {item}
                  </a>
                </p>
              ),
            )}
          </div>

          <div className="col-6 col-md-2">
            <h6 style={{ fontWeight: "700", marginBottom: "16px" }}>
              Quick Link
            </h6>
            {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
              (item) => (
                <p
                  key={item}
                  style={{
                    fontSize: "13px",
                    opacity: 0.7,
                    marginBottom: "10px",
                  }}
                >
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    {item}
                  </a>
                </p>
              ),
            )}
          </div>

          <div className="col-6 col-md-3">
            <h6 style={{ fontWeight: "700", marginBottom: "16px" }}>
              Download App
            </h6>
            <p style={{ fontSize: "11px", opacity: 0.7, marginBottom: "12px" }}>
              Save $3 with App New User Only
            </p>
            <div className="d-flex gap-2 mb-3">
              <div
                style={{
                  background: "#333",
                  borderRadius: "4px",
                  padding: "6px 10px",
                  fontSize: "11px",
                  cursor: "pointer",
                }}
              >
                <i className="bi bi-google-play me-1"></i>Google Play
              </div>
              <div
                style={{
                  background: "#333",
                  borderRadius: "4px",
                  padding: "6px 10px",
                  fontSize: "11px",
                  cursor: "pointer",
                }}
              >
                <i className="bi bi-apple me-1"></i>App Store
              </div>
            </div>
            <div className="d-flex gap-3">
              {["bi-facebook", "bi-twitter", "bi-instagram", "bi-linkedin"].map(
                (icon) => (
                  <i
                    key={icon}
                    className={`bi ${icon}`}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  ></i>
                ),
              )}
            </div>
          </div>
        </div>
        <hr style={{ borderColor: "#444" }} />
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            opacity: 0.5,
            margin: 0,
          }}
        >
          © Copyright Eco-Mart 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
