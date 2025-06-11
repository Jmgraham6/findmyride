"use client";
import * as React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUp } from "lucide-react";


export default function Faq() {
  const questions = [
    {
      question: "How do I join a cycling meetup?",
      answer:
        "Simply create an account, browse upcoming rides, and RSVP to the events you’d like to join.",
    },
    {
      question: "Is the app free to use for all cyclists?",
      answer:
        "Yes, our app is free for everyone who wants to find or host cycling meetups.",
    },
    {
      question: "Can I create my own cycling event?",
      answer:
        "Absolutely! You can create and customize your own meetup and invite others.",
    },
    {
      question: "Do I need special gear to join group rides?",
      answer: "A bicycle and helmet are required; other equipment is optional.",
    },
    {
      question: "How are ride routes and difficulty levels decided?",
      answer:
        "Event organizers provide route details and rate the skill level for each meetup.",
    },
  ];

  return (
    <div
      id="faq"
      className="w-full max-w-3xl mx-auto rounded-lg px-5 md:px-8 lg:px-0 py-12 lg:py-[4.5rem]"
    >
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>
      {questions.map(({ question, answer }, index) => (
        <div key={index} className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton className="border bg-card dark:bg-secondary flex items-center justify-between w-full px-4 py-4 md:text-lg text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
                  <span>
                    <span>{question}</span>
                  </span>
                  <ChevronUp
                    className={`${open ? "transform rotate-180" : ""}
   w-5 h-5`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-4 pt-4 pb-2">
                  <span>{answer}</span>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
}
