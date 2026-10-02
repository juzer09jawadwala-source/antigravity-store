"use client";

import React from "react";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";

export default function KeyHighlights() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-[#050505]">
      <h2 className="max-w-7xl pl-4 sm:pl-6 lg:pl-8 mx-auto text-3xl md:text-5xl font-bold text-white font-sans tracking-tight mb-4">
        Get to know your iPhone 18 Pro.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img loading="lazy" decoding="async"
              src="https://assets.aceternity.com/macbook.webp"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "",
    title: "Siri. Personal, private,<br/>and powerful.",
    src: "/highlight-images/siri__eprmtp3edh8i_large_2x.webp",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "48MP Main camera.<br/>Mind-blowing detail.",
    src: "/highlight-images/main_camera_endframe__fcjfhs06rdme_large_2x.webp",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "The A19 Pro chip.<br/>A mind-blowing win for gaming.",
    src: "/highlight-images/chip_endframe__lhkymtfv1uie_large_2x.webp",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Four gorgeous colours. Two great sizes.<br/>One durable aluminium design.",
    src: "/highlight-images/colors_endframe__czfie0zmty4i_large_2x.webp",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "A huge leap in<br/>battery life.",
    src: "/highlight-images/battery_endframe__ds9p2a09r9aq_large_2x.webp",
    content: <DummyContent />,
  }
];
