import React from "react";

export default function AnnouncementBar() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        fontSize: "13px",
        padding: "8px 0",
        textAlign: "center",
      }}
    >
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%{" "}
      <a
        href="#"
        style={{
          color: "#fff",
          fontWeight: "600",
          textDecoration: "underline",
        }}
      >
        ShopNow
      </a>
      <span style={{ position: "absolute", right: "80px", fontSize: "13px" }}>
        English ▾
      </span>
    </div>
  );
}
