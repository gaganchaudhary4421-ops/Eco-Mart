import React from "react";
import "./App.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import BrowseByCategory from "./components/BrowseByCategory";
import BestSelling from "./components/BestSelling";
import JBLBanner from "./components/JBLBanner";
import ExploreProducts from "./components/ExploreProducts";
import NewArrival from "./components/NewArrival";
import ServiceFeatures from "./components/ServiceFeatures";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Hero />
      <FlashSales />
      <hr style={{ margin: 0, borderColor: "#eee" }} />
      <BrowseByCategory />
      <hr style={{ margin: 0, borderColor: "#eee" }} />
      <BestSelling />
      <JBLBanner />
      <ExploreProducts />
      <NewArrival />
      <ServiceFeatures />
      <Footer />
    </>
  );
}
