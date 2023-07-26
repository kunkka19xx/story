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
      <div className="ml-10 mt-10">
        <div>
          <h2 className="text-xl font-bold mb-2">Social Media</h2>
          <ul>
            {contactInfo.socialMedia.map((platform) => (
              <li key={platform.name}>
                <a
                  className="flex"
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
          <p>Phone: {contactInfo.phoneNumber}</p>
          <p>Email: {contactInfo.email}</p>
          <p>Address: {contactInfo.address}</p>
          <p>Working Hours: {contactInfo.workingHours}</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
