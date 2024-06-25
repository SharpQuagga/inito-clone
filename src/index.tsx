import React from "react";
import "./styles.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Promotional from "./components/Promotional";
import DataChart from "./components/DataChart";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Inito() {
  return (
    <>
      <Header />
      <MainSection/>
      <Promotional/>
      <DataChart />
      <Reviews />
      <Footer/>
    </>
  );
}
