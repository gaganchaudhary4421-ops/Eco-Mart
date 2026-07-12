import React from "react";
import coat from "../assets/images/Coat.jpg";
import bag from "../assets/images/Gucci_bag.jpg";
import cooler from "../assets/images/RGB_cooler.jpg";
import shelf from "../assets/images/Bookshelf.jpg";

const products = [
  {
    id: 1,
    name: "The North Coat",
    price: 260,
    oldPrice: 360,
    rating: 4,
    reviews: 65,
    img: coat,
  },
  {
    id: 2,
    name: "Gucci Duffle Bag",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 355,
    img: bag,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    rating: 4,
    reviews: 56,
    img: cooler,
  },
  {
    id: 4,
    name: "Small BookShelf",
    price: 360,
    oldPrice: null,
    rating: 4,
    reviews: 86,
    img: shelf,
  },
];

function Stars({ rating }) {
  return (
    <div className="d-flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <i
          key={i}
          className={`bi bi-star${i <= rating ? "-fill" : ""}`}
          style={{ color: "#FFAD33", fontSize: "12px" }}
        ></i>
      ))}
    </div>
  );
}

function Card({ p }) {
  const [hovered, setHovered] = React.useState(false);
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
          src={p.img}
          alt={p.name}
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
          {p.name}
        </p>
        <div className="d-flex gap-2 align-items-center mb-1">
          <span
            style={{ color: "#DB4444", fontWeight: "600", fontSize: "14px" }}
          >
            ${p.price}
          </span>
          {p.oldPrice && (
            <span
              style={{
                color: "#999",
                textDecoration: "line-through",
                fontSize: "13px",
              }}
            >
              ${p.oldPrice}
            </span>
          )}
        </div>
        <div className="d-flex align-items-center gap-1">
          <Stars rating={p.rating} />
          <span style={{ fontSize: "12px", color: "#999" }}>({p.reviews})</span>
        </div>
      </div>
    </div>
  );
}

export default function BestSelling() {
  return (
    <section style={{ padding: "40px 0" }}>
      <div className="container">
        <div className="section-label">
          <span></span>
          <p>This Month</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title mb-0">Best Selling Products</h2>
          <button className="btn-red">View All</button>
        </div>
        <div className="row g-3">
          {products.map((p) => (
            <div key={p.id} className="col-6 col-md-3">
              <Card p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
