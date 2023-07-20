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
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
