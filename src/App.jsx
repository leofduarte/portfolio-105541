import "./App.css";
import "./index.css";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import logo from "./imgs/Vector.png";
import {
  faBootstrap,
  faCss3,
  faGithub,
  faGolang,
  faHtml5,
  faLinkedinIn,
  faPhp,
  faReact,
  faJs,
  faShopify,
  faLaravel,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import TaiwlindIcon from "./imgs/tailwind-icon.svg";
import FirebaseIcon from "./imgs/firebase-icon.svg";
import MySQL from "./imgs/mysql-icon.svg";
import WebSocketIcon from "./imgs/websocket-icon.svg";
import GsapIcon from "./imgs/gsap-icon.svg";


function App() {
  const next = (websiteIndex) => {
    setWebsites((prevWebsites) =>
      prevWebsites.map((website, index) => {
        if (index === websiteIndex) {
          return {
            ...website,
            currentImageIndex:
              (website.currentImageIndex + 1) % website.imageUrl.length,
          };
        }
        return website;
      })
    );
  };

  const prev = (websiteIndex) => {
    setWebsites((prevWebsites) =>
      prevWebsites.map((website, index) => {
        if (index === websiteIndex) {
          return {
            ...website,
            currentImageIndex:
              website.currentImageIndex === 0
                ? website.imageUrl.length - 1
                : website.currentImageIndex - 1,
          };
        }
        return website;
      })
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [websites, setWebsites] = useState([
    {
      title: "InHere",
      description:
        "InHere is a geolocation web application created with the aim of integrating the digital and spatial experience. In a scenario where people are connected through their devices, the proposed web application not only allows social interaction based on location, but transcends physical barriers by giving users the ability to explore and visualize the space of others, even when spatially distant. This application was developed alone as part of the Tecnologias Avançadas Client-side course.",
      imageUrl: [
        "/imgs/inhere/capa.png",
        "/imgs/inhere/capa2.png",
        "/imgs/inhere/ih-3.png",
        "/imgs/inhere/ih-4.png",
      ],
      technology: ["React", "TailwindCSS", "Firebase"],
      link: "",
      currentImageIndex: 0,
      state: "In development",
    },
    {
      title: "AstroData & AstroPrize",
      description: "This is website 3",
      imageUrl: [
        "/imgs/astrodata-astroprize/capa-astro.png",
        "/imgs/astrodata-astroprize/astrodata-1.png",
        "/imgs/astrodata-astroprize/astrodata-2.png",
        "/imgs/astrodata-astroprize/astrodata-3.png",
        "./imgs/astrodata-astroprize/astrodata-4.png",
        "./imgs/astrodata-astroprize/astroprize-1.png",
        "./imgs/astrodata-astroprize/astroprize-2.png",
        "./imgs/astrodata-astroprize/astroprize-3.png",
        "./imgs/astrodata-astroprize/astroprize-4.png",
        "./imgs/astrodata-astroprize/astroprize-5.png",
        "./imgs/astrodata-astroprize/astroprize-6.png",
        "./imgs/astrodata-astroprize/astroprize-7.png",
        "./imgs/astrodata-astroprize/astroprize-8.png",
        "./imgs/astrodata-astroprize/astroprize-9.png",
        "./imgs/astrodata-astroprize/astroprize-10.png",
        "./imgs/astrodata-astroprize/astroprize-11.png",
        "./imgs/astrodata-astroprize/astroprize-12.png",
        "./imgs/astrodata-astroprize/astroprize-13.png",
      ],
      link: "  ",
      technology: ["PHP", "Bootstrap 5", "MySQL", "JavaScript"],
      currentImageIndex: 0,
      state: "Finished",
    },
    {
      title: "Eco-Exploradores",
      description:
        "Eco-Exploradores is a website that aims to teach children about the history of the environment and how to protect it. It has a lot of fun activities like a horizontal parallax remembering some of the most historical moments of the planet, a quiz to test your level of sustentability and a game, for children to learn while having fun. It was a group project for the Laboratório Multimédia 3 course at the University of Aveiro.",
      imageUrl: [
        "./imgs/eco-exploradores/ee-1.png",
        "./imgs/eco-exploradores/ee-2.png",
        "./imgs/eco-exploradores/ee-3.png",
        "./imgs/eco-exploradores/ee-4.png",
        "./imgs/eco-exploradores/ee-5.png",
        "./imgs/eco-exploradores/ee-6.png",
        "./imgs/eco-exploradores/ee-7.png",
        "./imgs/eco-exploradores/ee-8.png",
        "./imgs/eco-exploradores/ee-9.png",
        "./imgs/eco-exploradores/ee-10.png",
        "./imgs/eco-exploradores/ee-11.png",
      ],
      link: "",
      technology: ["HTML", "CSS", "JavaScript", "Model-Viewer", "GSAP"],
      currentImageIndex: 0,
      state: "Finished",
    },
    {
      title: "GoChat",
      description:
        "GoChat is a real-time chat application that allows users to create chat rooms and communicate with each other. It was developed as an individual project, with the purpose of testing new technologies and improving my skills. The project was developed using Golang for the backend, React for the frontend, and MySQL for the database. It also uses Websockets to enable real-time communication between users. The design is not pretty, as the main goal was to learn Golang and Websockets.",
      imageUrl: ["url-to-image-3"],
      link: "",
      technology: ["Golang", "React", "TailwindCSS", "MySQL", "WebSockets"],
      currentImageIndex: 0,
      state: "In development",
    },
    {
      title: "Top Indian Movies",
      description:
        "This project involved the creation of a secure web platform designed to catalog and analyze a collection of Indian films from a given database. It includes a  user authentication system, complete with password encryption for added security. A reactive feedback mechanism has also been integrated, which alerts users to their interactions on the site, such as managing their favorites list. Proactive measures have been taken to protect the site against SQL injection and other security vulnerabilities. It also features a comment system with upvotes and downvotes, and the possibility of managing comment statuses (accepted, deleted or awaiting review). The project significantly strengthened my understanding of coding structure, especially the separation of static and dynamic content. This work was part of a mini-project for my Bases de Dados e Tecnologias Server-side course.",
      imageUrl: [
        "./imgs/mp-tim/tim-1.png",
        "./imgs/mp-tim/tim-2.png",
        "./imgs/mp-tim/tim-3.png",
        "./imgs/mp-tim/tim-4.png",
        "./imgs/mp-tim/tim-5.png",
      ],
      link: "",
      technology: ["PHP", "Bootstrap 4", "MySQL", "JavaScript"],
      currentImageIndex: 0,
      state: "Finished",
    },
    {
      title: "Minimal Music Festival",
      description: "Minimal Music Festival was a project made in the context of the Laboratório Multimédia 2 course at the University of Aveiro. The main goal was to create a website for a music festival, with a minimalist design and a focus on the user experience. The website includes a schedule of the festival, information about the artists, and a ticket purchase system. The project was developed using HTML, CSS, and JavaScript, with a focus on responsive design and accessibility. The first  Made by me: image 1, 4, 7.",
      imageUrl: [
        "./imgs/mmfestival/mmf-1.png",
        "./imgs/mmfestival/mmf-2.png",
        "./imgs/mmfestival/mmf-3.png",
        "./imgs/mmfestival/mmf-4.png",
        "./imgs/mmfestival/mmf-5.png",
        "./imgs/mmfestival/mmf-6.png",
      ],
      link: "",
      technology: ["HTML", "Bootstrap 4", "JavaScript"],
      currentImageIndex: 0,
      state: "Finished",
    },
  ]);

  gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);
  useEffect(() => {
    const myWorkButton = document.getElementById("myWork");
    const myWorkButton2 = document.getElementById("myWork2");
    // const myContactsButton = document.getElementById("myContacts");
    const aboutMeButton = document.getElementById("aboutme");

    aboutMeButton.addEventListener("click", () => {
      const aboutMeSection = document.getElementById("aboutme2");
      if (aboutMeSection) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: aboutMeSection.offsetTop,
            autoKill: true,
          },
          ease: "power2.out",
        });
      }
    });

    // myContactsButton.addEventListener("click", () => {
    //   const contactsSection = document.getElementById("contacts");
    //   if (contactsSection) {
    //     gsap.to(window, {
    //       duration: 1,
    //       scrollTo: {
    //         y: contactsSection.offsetTop,
    //         autoKill: true,
    //       },
    //       ease: "power2.out",
    //     });
    //   }
    // });

    myWorkButton.addEventListener("click", () => {
      const worksSection = document.getElementById("works");
      if (worksSection) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: worksSection.offsetTop,
            autoKill: true,
          },
          ease: "power2.out",
        });
      }
    });

    myWorkButton2.addEventListener("click", () => {
      const worksSection = document.getElementById("works");
      if (worksSection) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: worksSection.offsetTop,
            autoKill: true,
          },
          ease: "power2.out",
        });
      }
    });

    let cardElement = document.querySelectorAll(".card");
    cardElement.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          ease: "power1.out",
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", function () {
        gsap.to(card, {
          scale: 1,
          boxShadow: "none",
          ease: "power1.out",
          duration: 0.3,
        });
      });
    });

    let tl = gsap.timeline();
    tl.fromTo(
      "#hero-title",
      1,
      {
        opacity: 0,
        ease: "power4.out",
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
      }
    ).to("#myText", {
      duration: 2,
      text: {
        value: "I'm Leandro",
        newClass: "text-fuchsia-600",
        delay: 2,
      },
    });
    gsap.to(".navbar", {
      scrollTrigger: {
        trigger: ".navbar",
        start: "top+=50% top",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      duration: 0.5,
    });
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 z-99 w-full flex justify-between font-mono mt-8 items-cente navbar">
        <a href="/">
          <img src={logo} alt="logotipo" className="h-16 ml-16" />
        </a>
        <ul className="text-white flex items-center mr-16">
          <li
            id={"aboutme"}
            className="mr-8 hover:text-gray-400 text-md cursor-pointer"
          >
            About me
          </li>
          <li
            id={"myWork2"}
            className=" hover:text-gray-400 text-md cursor-pointer"
          >
            Works
          </li>
          {/* <li
            id={"myContacts"}
            className="hover:text-gray-400 text-md cursor-pointer"
          >
            Contact
          </li> */}
          <span className="px-5  text-gray-500">|</span>
          <li className="mr-3 items-center text-xl hover:text-gray-400">
            <a href={"https://github.com/leofduarte"} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="items-center text-xl hover:text-gray-400">
            <a href={"https://linkedin.com/in/leofduarte"} target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex justify-between flex-col h-screen w-screen z-20">
        <main className="grid place-items-center w-full h-full overflow-auto content-center">
          <div className="flex justify-center place-content-center h-full ">
            <div className={"mr-40"}>
              <h1
                className="text-yellow-200 text-9xl leading-[0.9] font-bold mb-4"
                id="hero-title"
              >
                Unleashing <br /> Creativity, <br />
                One Project <br />
                at a Time
              </h1>
              <h2 className="text-white text-5xl font-bold">
                Hi, <span className="font-bold" id="myText"></span>
              </h2>
              <h2 className="text-white text-xl font-normal mt-2">
                A Web Developer from Aveiro, Portugal.
              </h2>
              <h2 className="text-white text-xl font-normal mt-1">
                Currently studying at the{" "}
                <a
                  className={"relative group underline underline-offset-4"}
                  href={"https://www.ua.pt/en/course/1531"}
                  target="_blank"
                >
                  University of Aveiro
                  <span className="absolute tooltip-text transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 top-full right-0 transform px-2 py-1 rounded-md bg-black text-white text-center">
                    Degree{" "}
                  </span>
                </a>
                .
              </h2>
              <div className="mt-6 flex">
                <button
                  id={"myWork"}
                  className="text-black rounded-xl bg-yellow-200 p-4 mr-6 hover:opacity-80 hidden"
                >
                  My work
                </button>
                <button className="text-white flex items-center gap-2 hover:text-gray-400">
                  Download resume <FontAwesomeIcon icon={faCircleDown} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <FontAwesomeIcon className="text-5xl" icon={faPhp} />
              </div>
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <FontAwesomeIcon className="text-5xl" icon={faCss3} />
              </div>
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <FontAwesomeIcon className="text-5xl" icon={faHtml5} />
              </div>
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <FontAwesomeIcon className="text-5xl" icon={faJs} />
              </div>
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <FontAwesomeIcon className="text-5xl" icon={faGolang} />
              </div>
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <FontAwesomeIcon className="text-5xl" icon={faBootstrap} />
              </div>
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <FontAwesomeIcon className="text-5xl" icon={faReact} />
              </div>
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <FontAwesomeIcon className="text-5xl" icon={faShopify} />
              </div>
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <FontAwesomeIcon className="text-5xl" icon={faLaravel} />
              </div>
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <img className="h-[45px] w-[45px]" src={TaiwlindIcon} />
              </div>
              {/* <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center">
                <FontAwesomeIcon className="text-5xl" icon={faNodeJs} />
              </div> */}
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <img className="h-[45px] w-[45px]" src={FirebaseIcon} />
              </div>
              <div className="p-5 h-20 w-20 card-btn rounded-lg flex justify-center items-center">
                <img className="h-[45px] w-[45px]" src={MySQL} />
              </div>
            </div>
          </div>
        </main>
      </div>

      <div
        id="aboutme2"
        className="flex h-screen gap-16 justify-center items-center max-w-[80%] mx-auto"
      >
        <div className="w-1/2 transform overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-3xl transition-all duration-500 ease-in-out transform hover:scale-110"
            src="./imgs/leo.jpeg"
            alt="Leandro Duarte"
          />
        </div>
        <div className="flex flex-col justify-center w-1/2">
          <h2 className="text-yellow-200 text-7xl font-bold">About me</h2>
          {/* <p className="text-white text-2xl mt-8 font-light">
      I am a web developer from Aveiro, Portugal. I am currently studying at
      the University of Aveiro, where I am pursuing a degree in Multimedia and Communication Technologies.
    </p>
    <p className="text-white text-2xl mt-8 font-light">
      I have a passion for web development and I am always
      looking for new challenges to improve my skills. I have experience in
      front-end and back-end development, and I am always looking for new
      technologies to learn.
    </p> */}

          <p className="text-white text-2xl mt-8 font-light">
            I'm a full-stack web developer pursuing a degree in Multimedia and
            Communication Technologies at the University of Aveiro. I have a
            passion for challenges and find satisfaction untangling complex
            problems and turning them into solutions. Like that time that I
            smaked my pc into the wall when a div was not centering, just kidding. At the end
            of the day, when I look at the work that I've done, I feel that I
            did a good job trying my best to find the key to solve all the
            problems that come my way, one at a time. My thirst for knowledge
            and new challenges motivates me to work constantly to improve my
            skills.
          </p>
        </div>
      </div>

      <div
        id={"works"}
        className="h-full w-full flex flex-col place-content-center place-items-center pt-16"
      >
        <h2 className="text-yellow-200 text-7xl font-bold ">Works</h2>
        <div className="flex flex-col mt-8">
          {websites.map((website, websiteIndex) => (
            <div
              key={websiteIndex}
              className="m-4 bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl  card transform transition-transform hover:scale-105"
            >
              <div
                id="default-carousel"
                className="relative overflow-auto min-h-[450px]"
                data-carousel="slide"
              >
                {website.imageUrl.map((img, imgIndex) => (
                  <div
                    className=" duration-700 ease-in-out"
                    data-carousel-item
                    key={`${websiteIndex}-${imgIndex}`}
                  >
                    <img
                      src={img}
                      className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                        website.currentImageIndex === imgIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      alt="..."
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => prev(websiteIndex)}
                  className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => next(websiteIndex)}
                  className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                  {website.imageUrl.map((img, imgIndex) => (
                    <div
                      className="duration-700 ease-in-out"
                      data-carousel-item
                      key={imgIndex}
                    >
                      <button
                        type="button"
                        className={`w-3 h-3 rounded-full`}
                        aria-current="true"
                        aria-label={`Slide ${imgIndex + 1}`}
                        data-carousel-slide-to={imgIndex}
                      ></button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 relative">
                <div className={"flex gap-4 mb-2"}>
                  <h2 className="text-2xl font-bold">{website.title}</h2>
                  {website.technology.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-2">
                      <span className="text-xs bg-yellow-200 text-black rounded-lg p-2 align-middle flex ">
                        {tech === "React" && (
                          <FontAwesomeIcon
                            className="text-base mr-1 align-middle"
                            icon={faReact}
                          />
                        )}
                        {tech === "JavaScript" && (
                          <FontAwesomeIcon
                            className="text-base mr-1 align-middle"
                            icon={faJs}
                          />
                        )}
                        {tech === "HTML" && (
                          <FontAwesomeIcon
                            className="text-base mr-1 align-middle"
                            icon={faHtml5}
                          />
                        )}
                        {tech === "CSS" && (
                          <FontAwesomeIcon
                            className="text-base mr-1 align-middle"
                            icon={faCss3}
                          />
                        )}
                        {tech === "PHP" && (
                          <FontAwesomeIcon
                            className="text-base mr-1 align-middle"
                            icon={faPhp}
                          />
                        )}
                        {tech === "Golang" && (
                          <FontAwesomeIcon
                            className="text-base mr-1 align-middle"
                            icon={faGolang}
                          />
                        )}
                        {tech === "Bootstrap 5" && (
                          <FontAwesomeIcon
                            className="text-base mr-1 align-middle"
                            icon={faBootstrap}
                          />
                        )}
                        {tech === "Bootstrap 4" && (
                          <FontAwesomeIcon
                            className="text-base mr-1 align-middle"
                            icon={faBootstrap}
                          />
                        )}
                        {tech === "Node.js" && (
                          <FontAwesomeIcon
                            className="text-base mr-1 align-middle"
                            icon={faNodeJs}
                          />
                        )}
                        {tech === "TailwindCSS" && (
                          <img
                            className="h-4 w-4 mr-1 align-middle"
                            src={TaiwlindIcon}
                            alt=""
                          />
                        )}
                        {tech === "Firebase" && (
                          <img
                            className="h-4 w-4 mr-1 align-middle"
                            src={FirebaseIcon}
                            alt=""
                          />
                        )}
                        {tech === "MySQL" && (
                          <img
                            className="h-4 w-4 mr-1 align-middle"
                            src={MySQL}
                            alt=""
                          />
                        )}
                        {tech === "Laravel" && (
                          <FontAwesomeIcon
                            className="text-base mr-1 align-middle"
                            icon={faLaravel}
                          />
                        )}
                        {tech === "WebSockets" && (
                          <img
                            className="h-4 w-4 mr-1 align-middle"
                            src={WebSocketIcon}
                            alt=""
                          />
                        )}
                        {tech === "GSAP" && (
                          <img
                            className="h-4 w-4 mr-1 align-middle"
                            src={GsapIcon}
                            alt=""
                          />
                        )}
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700">{website.description}</p>

                <div className={`flex mt-4 justify-between`}>
                  <a
                    href={website.link}
                    className={`text-blue-500 inline-block ${
                      website.link.trim() == ""
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:underline"
                    }`}
                    onClick={(e) => {
                      if (website.link == "") e.preventDefault();
                    }}
                  >
                    Visit website
                  </a>

                  <span
                    className={`${
                      website.state == "Finished"
                        ? "bg-green-300"
                        : "bg-red-300"
                    } p-2 rounded-lg text-xs `}
                  >
                    {website.state}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div
        id={"contacts"}
        className="h-screen w-full flex flex-col place-content-center place-items-center justify-around"
      >
        <h2 className="text-yellow-200 text-7xl font-bold">Contact</h2>
        <p className={"uppercase text-white text-3xl text-center max-w-[75%]"}>
          If you'd like to get in touch, please fill in the form with a
          detailled description of your request and I will endeavor to get back
          at you as soon as possible.
        </p>
        <div className="flex flex-col mt-8">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-4 rounded-lg bg-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-lg bg-white"
            />
            <textarea
              placeholder="Message"
              className="p-4 rounded-lg bg-white"
            />
            <button
              type="submit"
              className="p-4 rounded-lg bg-yellow-200 hover:opacity-80"
            >
              Send
            </button>
          </form>
        </div>
      </div> */}

      {/*        <footer className="flex h-32 w-full text-white border-t-2 border-yellow-200 justify-between items-center mt-16">
          <img className={"h-16 ml-8"} src={"src/imgs/Vector.png"} alt={""}/>
          <p className="text-center">Made with ❤️ by Leandro Duarte</p>
          <p id={""} className={"mr-8 text-center"}>return to the top</p>
        </footer>*/}

      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-yellow-200 text-black rounded-full w-16 h-16 flex items-center justify-center"
      >
        <FontAwesomeIcon className="text-xl" icon={faArrowUp} />
      </button>

      <div className="gradients">
        <div className="gradient purple" id="gradient-1"></div>
        <div className="gradient purple" id="gradient-3"></div>
      </div>
    </>
  );
}

export default App;
