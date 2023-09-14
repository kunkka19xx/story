import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutMe from "@/components/home/aboutMe";
import Latest from "@/components/home/latest";
import TopPost from "@/components/home/topPost";
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    const focusTarget = document.getElementById("id-header");
    if (focusTarget) {
      focusTarget.focus();
    }
  }, []);

  const img = [
    "/assets/services/custiomize service.png",
    "/assets/services/Custom-Software-Development.jpeg",
    "/assets/services/migration.jpeg",
  ];
  const captions = ["Ban co thich bai viet nay khong", "Ban khong thich no a"];
  return (
    <>
      <section className="min-h-screen flex flex-col bg-gradient-to-r from-zinc-100 to-stone-50 bg-opacity-95">
        <div id="id-header" className="z-50 pb-16">
          <Header></Header>
        </div>
          <TopPost images={img} captions={captions}></TopPost>
        <div className="">
          <Latest></Latest>
        </div>
        <hr className="mb-3 mx-3" />
        <AboutMe></AboutMe>

        <Footer></Footer>
      </section>
    </>
  );
}

export default Home;
