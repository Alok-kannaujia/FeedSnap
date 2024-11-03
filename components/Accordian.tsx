import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    value: "item-1",
    question: "What is FeedSnap?",
    answer:
      "FeedSnap is a feedback form integration website that is free to use and highly simplified.",
  },
  {
    value: "item-2",
    question: "How can FeedSnap improve user feedback collection?",
    answer:
      "FeedSnap improves user feedback collection by providing an easy-to-use and integrate feedback form, making it simple for users to give feedback.",
  },
  {
    value: "item-3",
    question: "What are the key features of FeedSnap?",
    answer:
      "Key features of FeedSnap include ease of use, seamless integration, and a simplified interface for collecting feedback from users.",
  },
  {
    value: "item-4",
    question:
      "Is FeedSnap suitable for both small businesses and large enterprises?",
    answer:
      "Yes, FeedSnap is designed to be scalable and can accommodate the needs of both small businesses and large enterprises. Its simplicity makes it accessible for smaller teams, while its robust features can handle larger volumes of feedback for bigger organizations.",
  },
  {
    value: "item-5",
    question: "Can I customize the feedback form to match my brand?",
    answer:
      "As of now, FeedSnap only offers certain themes and color options that allow you to adjust the look and feel of the feedback form to align with your brand's visual identity. But in future you can modify it more like fonts, custom colors and layout to ensure a seamless integration with your website or application.",
  },
];

const Accordian = () => {
  return (
    <div>
      <div className="min-w-[75vw] mt-10 flex w-full flex-col items-center justify-center">
        <h1 className="mb-2 text-center text-2xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 md:text-3xl ">
          FAQ&apos;s
        </h1>
        <p className="max-w-md mb-4 text-center text-sm text-gray-400 dark:text-gray-400">
          Some common FAQ&apos;s about FeedSnap
        </p>
        <Accordion type="single" collapsible className="w-[80vw] text-sm ">
          {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-slate-50">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian;
