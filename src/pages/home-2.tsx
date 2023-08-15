import Footer from "@/components/footer";
import Header from "@/components/header";
import Latest from "@/components/home/lastest";
import TopPost from "@/components/home/topPost";
import React from "react";

function Home2() {
  const img =["/assets/services/custiomize service.png","/assets/services/Custom-Software-Development.jpeg"
,"/assets/services/migration.jpeg"]
  const captions =["Ban co thich bai viet nay khong", "Ban khong thich no a"];
  return (
    <>
    <section className="min-h-screen flex flex-col ">
      <div className="z-50 pb-16">
        <Header></Header>
      </div>
      <TopPost images={img} captions={captions}></TopPost>
      <Latest></Latest>
      
      <Footer></Footer>
    </section>
    </>
  );
}

export default Home2;
