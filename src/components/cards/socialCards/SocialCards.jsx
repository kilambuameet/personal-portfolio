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
    <section className="md:py-16 py-10 bg-gradient-to-tr from-blue-100 via-white to-blue-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="md:text-4xl text-2xl font-bold font-mono text-slate-800">
          Connect With Me
        </h2>
        <hr className="w-28 mx-auto border-t-2 border-black my-3" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full md:mt-12 mt-5">
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
