import Footer from "@/components/footer";
import Header from "@/components/header";
import Latest from "@/components/home/lastest";
import React from "react";

function Home2() {
  return (
    <section className="min-h-screen flex flex-col ">
      <div className="z-50 pb-16">
        <Header></Header>
      </div>
      <Latest></Latest>
      <Footer></Footer>
    </section>
  );
}

export default Home2;
