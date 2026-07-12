import React from "react";
import dogFood from "../assets/images/Dog_food.jpg";
import camera from "../assets/images/canon_camera.jpg";
import laptop from "../assets/images/ASUS_laptop.jpg";
import curology from "../assets/images/curology_set.jpg";
import car from "../assets/images/Electric_Car.jpg";
import cleats from "../assets/images/soccer_cleat.jpg";
import gamepad from "../assets/images/GP11_shooter_GAmepad.jpg";
import jacket from "../assets/images/Quilted_Jacket.jpg";

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    oldPrice: null,
    rating: 3,
    reviews: 35,
    img: dogFood,
    badge: null,
  },
  {
    id: 2,
    name: "Canon EOS DSLR Camera",
    price: 360,
    oldPrice: null,
    rating: 4,
    reviews: 95,
    img: camera,
    badge: null,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    oldPrice: null,
    rating: 5,
    reviews: 325,
    img: laptop,
    badge: null,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    oldPrice: null,
    rating: 4,
    reviews: 145,
    img: curology,
    badge: null,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    oldPrice: 1160,
    rating: 5,
    reviews: 65,
    img: car,
    badge: "NEW",
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    oldPrice: null,
    rating: 5,
    reviews: 35,
    img: cleats,
    badge: null,
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    oldPrice: 1160,
    rating: 4,
    reviews: 55,
    img: gamepad,
    badge: "NEW",
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    oldPrice: null,
    rating: 4,
    reviews: 55,
    img: jacket,
    badge: null,
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
        {p.badge && (
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "#DB4444",
              color: "#fff",
              fontSize: "11px",
              padding: "2px 8px",
              borderRadius: "4px",
            }}
          >
            {p.badge}
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

export default function ExploreProducts() {
  return (
    <section style={{ padding: "40px 0" }}>
      <div className="container">
        <div className="section-label">
          <span></span>
          <p>Our Products</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title mb-0">Explore Our Products</h2>
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
        <div className="row g-3">
          {products.map((p) => (
            <div key={p.id} className="col-6 col-md-3">
              <Card p={p} />
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
