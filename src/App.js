import React from "react";
import Navbar from "../src/components/nav-bar";
import Hero from "../src/components/hero";
import Search from "../src/components/search-bar";
import Footer from "../src/components/footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search />
      <Footer />
    </div>
  );
}
