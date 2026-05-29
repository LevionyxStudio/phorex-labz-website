"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What makes Phorex Labz different from other Discord servers?",
    answer: "Most servers focus on one thing. Phorex Labz is built to be your all-in-one space — gaming, coding, music, creative work and chill conversations, all under one roof with an actual community behind it.",
  },
  {
    question: "What is Phorex Labz?",
    answer: "Phorex Labz is an all-in-one Discord community built for gamers, coders, music makers, creatives and anyone who just wants to chill. One server, every vibe.",
  },
  {
    question: "I'm new to coding / gaming — is this for me?",
    answer: "100%. We welcome all skill levels. Whether you're just starting out or you're a veteran, there's a place for you here.",
  },
  {
    question: "What kind of events will you host?",
    answer: "Gaming tournaments, coding challenges, creative showcases, music listening parties and more. We're just getting started — join early and help shape what we do.",
  },
  {
    question: "How do I get a role or rank up?",
    answer: "Just be active, contribute to the community and you'll naturally get recognized. We reward members who help others and bring good vibes.",
  },
  {
    question: "Why should I join now if the server is new?",
    answer: "Early members help shape the culture, the rules, and the direction of the server. You get a say in what Phorex Labz becomes — that's rare.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-xxl" id="faq">
      <h2 className="font-headline-lg text-headline-lg text-center mb-xl text-on-surface">
        Common Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-6 cursor-pointer group"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-headline-md text-lg text-white group-hover:text-primary transition-colors">
                {faq.question}
              </h4>
              <ChevronDown
                className={`text-primary w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-on-surface-variant font-body-md">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
