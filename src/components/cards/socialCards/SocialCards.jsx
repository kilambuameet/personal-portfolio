import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const SocialCards = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook size={30} />,
      href: "https://www.facebook.com/share/1WBzh8p8y1/",
      color: "text-blue-600",
    },

    {
      name: "Instagram",
      icon: <FaInstagram size={30} />,
      href: "https://www.instagram.com/am_teyy_?igsh=MTl0aGpsYThrOW9paA==",
      color: "text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/amit-kilambu-987481b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "text-blue-700",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/kilambuameet",
      color: "text-blue-400",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 font-mono text-slate-800">
          Connect With Me
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 p-6 bg-indigo-50 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300`}
            >
              <span className={`${social.color}`}>{social.icon}</span>
              <span className="font-medium text-slate-700">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialCards;
