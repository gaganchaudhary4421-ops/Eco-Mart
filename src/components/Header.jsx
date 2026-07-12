import React, { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header style={{ borderBottom: "1px solid #eee", padding: "16px 0" }}>
      <div className="container d-flex align-items-center justify-content-between">
        <h1 style={{ fontSize: "22px", fontWeight: "700", margin: 0 }}>
          Eco-Mart
        </h1>

        <nav className="d-none d-md-flex gap-4">
          {["Home", "Contact", "About", "Sign Up"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                textDecoration: "none",
                color: "#1a1a1a",
                fontSize: "14px",
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="d-flex align-items-center gap-3">
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                border: "none",
                borderBottom: "1px solid #ccc",
                padding: "6px 30px 6px 8px",
                fontSize: "13px",
                outline: "none",
                width: "200px",
              }}
            />
            <i
              className="bi bi-search"
              style={{
                position: "absolute",
                right: "6px",
                top: "7px",
                fontSize: "14px",
                color: "#666",
              }}
            ></i>
          </div>
          <i
            className="bi bi-heart"
            style={{ fontSize: "20px", cursor: "pointer" }}
          ></i>
          <i
            className="bi bi-cart3"
            style={{ fontSize: "20px", cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </header>
  );
}
