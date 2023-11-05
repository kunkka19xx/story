import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

function Contact() {
  const contactInfo = {
    socialMedia: [
      { name: "Facebook", link: "https://www.facebook.com/CodingByNoah/" },
      { name: "Twitter", link: "https://twitter.com/example" },
      // Add more social media links as needed
    ],
    phoneNumber: "+81 (709)-(9026)-(5396)",
    email: "nobita079x@gmail.com",
    address: "4-chōme-1-40 , Minato City, Tokyo 105-0001, Japan",
    workingHours: "Monday to Friday: 9 AM - 5 PM",
  };
  return (
    <section className="min-h-screen flex flex-col">
      <div className="z-0 pb-16">
        <Header></Header>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:flex-grow flex justify-center w-full lg:w-1/2  mr-1 mt-2 lg:mt-10">
          <div className="w-11/12 items-center bg-gradient-to-l from-stone-100 to-rose-50 rounded-lg">
            <h2 className="ml-1 text-xl font-bold mb-2">Social Media</h2>
            <ul className="ml-2">
              {contactInfo.socialMedia.map((platform) => (
                <li key={platform.name}>
                  <a
                    className="flex mb-1"
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    <span className="ml-1"></span>
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold ml-1 my-2">Contact Information</h2>
            <div className="ml-2">
              <p className="mb-1">Phone: {contactInfo.phoneNumber}</p>
              <p className="mb-1">Email: {contactInfo.email}</p>
              <p className="mb-1">Address: {contactInfo.address}</p>
              <p className="mb-1">Working Hours: {contactInfo.workingHours}</p>
            </div>
            <div className="block border-stone-300 border my-2 mx-2 shrink-0 grow-0 basis-auto">
              <div className="h-[400px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.7357478701815!2d139.74338418893748!3d35.6653907222722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b90fcdf31cf%3A0xedfb29ae1b2e14ac!2s4-ch%C5%8Dme-1%20Toranomon%2C%20Minato%20City%2C%20Tokyo%20105-0001%2C%20Japan!5e0!3m2!1sen!2sus!4v1694835886554!5m2!1sen!2sus"
                  className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ml-1 mr-2 mt-10 mx-auto flex justify-center">
          <div className="w-11/12 items-center bg-gradient-to-r from-stone-100 to-rose-50 rounded-lg">
            <div>
              <h2 className="ml-1 mb-3 text-xl font-bold">Send us your message</h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="ml-1 mb-1 font-semibold">
                Email:
              </label>
              <input
                className="border border-sky-500 ml-2 mr-2 rounded-md h-10 pl-2 placeholder:text-left"
                placeholder="Enter your email"
                type="text"
              ></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="ml-1 mt-3 mb-1 font-semibold">
                Name:
              </label>
              <input
                className="border border-sky-500 ml-2 mr-2 rounded-md h-10 pl-2 placeholder:text-left"
                placeholder="Enter your name"
                type="text"
              ></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="ml-1 mt-3 mb-1 font-semibold">
                Subject:
              </label>
              <input
                className="border border-sky-500 ml-2 mr-2 rounded-md h-10 pl-2 placeholder:text-left"
                placeholder="Enter email subject"
                type="text"
              ></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="ml-1 mt-3 mb-1 font-semibold">
                Message:
              </label>
              <textarea
                className="flex-grow border h-48 border-sky-500 mb-5 ml-2 mr-2 rounded-md pl-2 placeholder:text-left"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="flex justify-center mb-4 flex-grow">
              <button
                className="w-full items-center border from-sky-600 to-sky-200 bg-gradient-to-r opacity-80
              hover:bg-gradient-to-r hover:from-indigo-400 hover:opacity-75 hover:text-lg hover:text-slate-800
               border-black rounded-md ml-2 mr-2 h-8 font-semibold"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </section>
  );
}

export default Contact;
