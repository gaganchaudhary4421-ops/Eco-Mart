import React, { useState, useEffect, useRef } from "react";
import gamepad from "../assets/images/Gamepad.jpg";
import keyboard from "../assets/images/Keyboard.jpg";
import monitor from "../assets/images/IPS_Monitor.jpg";
import chair from "../assets/images/Comfort_Chair.jpg";
import laptop from "../assets/images/ASUS_laptop.jpg";
import camera from "../assets/images/canon_camera.jpg";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 4,
    reviews: 88,
    img: gamepad,
    badge: "NEW",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
    img: keyboard,
    badge: "NEW",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 4,
    reviews: 99,
    img: monitor,
    badge: null,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4,
    reviews: 99,
    img: chair,
    badge: null,
  },
  {
    id: 5,
    name: "ASUS Gaming Laptop",
    price: 700,
    oldPrice: 900,
    rating: 5,
    reviews: 325,
    img: laptop,
    badge: null,
  },
  {
    id: 6,
    name: "Canon DSLR Camera",
    price: 360,
    oldPrice: 420,
    rating: 4,
    reviews: 95,
    img: camera,
    badge: "NEW",
  },
];

function Stars({ rating }) {
  return (
    <div className="d-flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <i
          key={i}
          className={`bi bi-star${i <= rating ? "-fill" : ""}`}
          style={{ color: "#FFAD33", fontSize: "13px" }}
        ></i>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          background: "#f5f5f5",
          borderRadius: "4px",
          padding: "16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {product.badge && (
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "#00FF66",
              color: "#000",
              fontSize: "11px",
              padding: "2px 8px",
              borderRadius: "4px",
            }}
          >
            {product.badge}
          </span>
        )}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <i
            className="bi bi-heart"
            style={{ fontSize: "18px", cursor: "pointer" }}
          ></i>
          <i
            className="bi bi-eye"
            style={{ fontSize: "18px", cursor: "pointer" }}
          ></i>
        </div>
        <img
          src={product.img}
          alt={product.name}
          style={{ width: "100%", height: "160px", objectFit: "contain" }}
        />
        {hovered && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "#000",
              color: "#fff",
              textAlign: "center",
              padding: "10px",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Add To Cart
          </div>
        )}
      </div>
      <div style={{ marginTop: "12px" }}>
        <p style={{ fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}>
          {product.name}
        </p>
        <div className="d-flex gap-2 align-items-center mb-1">
          <span
            style={{ color: "#DB4444", fontWeight: "600", fontSize: "14px" }}
          >
            ${product.price}
          </span>
          {product.oldPrice && (
            <span
              style={{
                color: "#999",
                textDecoration: "line-through",
                fontSize: "13px",
              }}
            >
              ${product.oldPrice}
            </span>
          )}
        </div>
        <div className="d-flex align-items-center gap-1">
          <Stars rating={product.rating} />
          <span style={{ fontSize: "12px", color: "#999" }}>
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FlashSales() {
  const [time, setTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };

  return (
    <section style={{ padding: "60px 0 40px" }}>
      <div className="container">
        <div className="section-label">
          <span></span>
          <p>Today's</p>
        </div>

        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
          <div className="d-flex align-items-center gap-4 flex-wrap">
            <h2 className="section-title mb-0">Flash Sales</h2>
            <div className="d-flex gap-3">
              {[
                ["Days", time.days],
                ["Hours", time.hours],
                ["Minutes", time.minutes],
                ["Seconds", time.seconds],
              ].map(([label, val]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "500",
                      marginBottom: "2px",
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: "28px", fontWeight: "700" }}>
                    {pad(val)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="btn btn-light rounded-circle"
              style={{ width: "36px", height: "36px", padding: 0 }}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <button
              onClick={() => scroll("right")}
              className="btn btn-light rounded-circle"
              style={{ width: "36px", height: "36px", padding: 0 }}
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            paddingBottom: "8px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`.flash-scroll::-webkit-scrollbar { display: none; }`}</style>
          {products.map((p) => (
            <div key={p.id} style={{ minWidth: "220px", flex: "0 0 220px" }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn-red">View All Products</button>
        </div>
      </div>
    </section>
  );
}
