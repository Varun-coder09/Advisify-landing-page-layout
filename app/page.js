'use client'
import React from "react";
import Home from "../components/Home/Home";
import HeroSection from "../components/HeroSection/HeroSection";
import Review from "../components/Review/Review";

import './globals.css';
import Price from "@/components/Price/Price";

export default function Page() {
  return (
    <>
      <Home />
      <HeroSection/>
      <Review />
      <Price/>
    </>
  );
}

