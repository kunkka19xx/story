import Header from "@/components/header";
import React from "react";

function Contact() {
  const contactInfo = {
    socialMedia: [
      { name: "Facebook", link: "https://www.facebook.com/example" },
      { name: "Twitter", link: "https://twitter.com/example" },
      // Add more social media links as needed
    ],
    phoneNumber: "+1 (555) 123-4567",
    email: "contact@example.com",
    address: "123 Main Street, City, Country",
    workingHours: "Monday to Friday: 9 AM - 5 PM",
  };
  return (
    <section>
      <div className="z-0 pb-16">
        <Header></Header>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-center w-full lg:w-1/2  mr-1 mt-2 lg:mt-10">
          <div className="w-11/12 items-center bg-neutral-100">
            <h2 className="text-xl font-bold mb-2">Social Media</h2>
            <ul className="ml-1">
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

            <h2 className="text-xl font-bold my-2">Contact Information</h2>
            <div className="ml-1">
              <p className="mb-1">Phone: {contactInfo.phoneNumber}</p>
              <p className="mb-1">Email: {contactInfo.email}</p>
              <p className="mb-1">Address: {contactInfo.address}</p>
              <p className="mb-1">Working Hours: {contactInfo.workingHours}</p>
            </div>
            <div className="block border-stone-300 border my-2 mx-2 shrink-0 grow-0 basis-auto">
              <div className="h-[500px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7477988419855!2d139.74285797642224!3d35.65858483121661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2sTokyo%20Tower!5e0!3m2!1sen!2sus!4v1692022241532!5m2!1sen!2sus"
                  className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ml-1 mr-2 mt-10 mx-auto flex justify-center">
          <div className="w-11/12 items-center bg-neutral-100">
            <div>
              <h2 className="text-xl font-bold mb-2">Contact</h2>
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

            <div className="mt-auto">
              <button
                className="w-full items-center border from-sky-500 to-sky-200 bg-gradient-to-r opacity-80
              hover:bg-gradient-to-r hover:from-indigo-400 hover:opacity-75 hover:text-lg hover:text-slate-800
               border-black rounded-md ml-2 mr-2 h-8 font-semibold"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
