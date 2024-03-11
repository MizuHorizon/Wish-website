"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import Card2 from "../CardRow2";
import { motion, AnimatePresence } from "framer-motion";
import I1 from "../../../public/I1.svg";
import I2 from "../../../public/I2.svg";
import I3 from "../../../public/I3.svg";
import I4 from "../../../public/I4.svg";
import I5 from "../../../public/I5.svg";

const Features = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      console.log(setMousePosition);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#494949",
      mixBlendMode: "diff",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const cards = [
    {
      image: I1,
      title: "Multi-Platform Integration",
      description:
        "Wish integrates with multiple e-commerce platforms, allowing users to consolidate their wishlists.",
    },
    {
      image: I2,
      title: "Product Tracking",
      description:
        "Users can add products they are interested in purchasing to their list within the app.",
    },
    {
      image: I3,
      title: "Multi-Platform Integration",
      description:
        "Users can customize their notification preferences to receive alerts based on their preferences and needs.",
    },
  ];

  const cards2 = [
    {
      image: I5,
      title: "Search and Add",
      description:
        "Wish provides a user-friendly interface for users to search for products and add them to their wishlist from any supported e-commerce platform.",
    },
    {
      image: I4,
      title: "Notifications",
      description:
        "Wish sends notifications to users about updates related to their tracked products, such as price changes, availability, or any other relevant information.",
    },
  ];

  return (
    <section className="w-full mt-20">
      <div className="flex flex-col">
        <h1 className="text-[#A9A5A5] text-[36px] font-semibold text-center">
          Features
        </h1>
        <h3 className="text-[#B5B5B5] text-[20px] text-medium text-center">
          Amazing group of features that are <br />
          easy to use.
        </h3>
        <div className="pt-16 lg:px-24 px-16 flex justify-center items-center md:items-start gap-8 md:gap-0 lg:flex-row flex-col">
          {cards.map((items, index) => (
            <Card
              key={index}
              image={items.image}
              title={items.title}
              description={items.description}
            />
          ))}
        </div>
        <div className="flex pt-8 pb-16 gap-8 md:gap-0 lg:flex-row md:items-start flex-col px-16 lg:px-8 items-center justify-center">
          {cards2.map((item, index) => (
            <Card2
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
