import React from "react";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";

const BlogCard = () => {
  const goals = [
    {
      id: 1,
      icon: first,
      title: "Ensures inclusive education with personalized support.",
      link: "https://sdgs.un.org/goals/goal4"
    },
    {
      id: 2,
      icon: second,
      title: "Enhances mental well-being by reducing academic stress.",
      link: "https://sdgs.un.org/goals/goal3"
    },
    {
      id: 3,
      icon: third,
      title: "Uses technology to improve accessibility and assessment.",
      link: "https://sdgs.un.org/goals/goal9"
    },
    {
      id: 4,
      icon: fourth,
      title: "Promotes equal learning opportunities for children.",
      link: "https://www.undp.org/sustainable-development-goals/quality-education"
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-14 p-6 -mt-30 bg-white">
      {goals.map((goal) => (
        <a
          key={goal.id}
          href={goal.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-60"
        >
          <div className="bg-black text-white p-6 rounded-lg text-center transition-transform transform hover:scale-105 hover:bg-gray-900 duration-300 ease-in-out shadow-lg cursor-pointer">
            <img src={goal.icon} alt="Goal Icon" className="mx-auto mb-4 w-35 h-35" />
            <p className="text-sm">{goal.title}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default BlogCard;
