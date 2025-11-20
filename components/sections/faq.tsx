"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/section"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What is the dress code?",
    answer:
      "Principal Sponsors: Filipiniana, Barong, or long formal attire in emerald or beige is highly appreciated.\n\nGuests: Kindly come in semi-formal looks in muted emerald, sage, champagne, or beige hues.",
  },
  {
    question: "When and where is the ceremony?",
    answer:
      "The ceremony is on December 8, 2025 at 10:00 AM at the Southern-Asia Pacific Division (SSD) Worship Hall, Silang, Cavite.",
  },
  {
    question: "Where is the reception?",
    answer:
      "The reception will immediately follow at the SSD Lobby within the same compound in Silang, Cavite.",
  },
  {
    question: "When is the RSVP deadline?",
    answer:
      "Kindly send a dedicated email RSVP to albertrhods25@gmail.com on or before November 23, 2025. Your response helps us finalize our guest list. Thank you! [RSVP_LINK]Click here to RSVP[/RSVP_LINK]",
  },
  {
    question: "Do you have a gift registry?",
    answer:
      "Your presence is the greatest gift. If you feel inclined to give, we would appreciate monetary gifts given in person so we can thank you personally. You can also use the GCash QR code available in the Gift Registry section.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes! Ample parking is available at the venue. We recommend arriving 15-20 minutes early to secure a spot.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "We kindly ask that any additional guests be included or declared in your RSVP so we can make the proper arrangements. Thank you so much for your understanding — we can't wait to celebrate together on our special day!",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "Please mention any dietary restrictions, allergies, or special meal requirements in the message field when you submit your RSVP.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We have a professional photographer, but you're welcome to take photos! We'll have a dedicated time for group photos after the ceremony.",
  },
  {
    question: "What should I do if I need to cancel my RSVP?",
    answer:
      "Please contact us as soon as possible if your plans change. You can update your RSVP by searching for your name in the RSVP section or by emailing albertrhods25@gmail.com / texting 0917-112-9528.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section
      id="faq"
      className="relative bg-gradient-to-b from-[#0A3428] via-[#106552]/90 to-[#0A3428] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#C3A161]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#C3A161]/5 to-transparent" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-3 sm:px-4">
        <h2 className="montez-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-normal text-[#FFFFFF] mb-2 sm:mb-3 md:mb-4 drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)] leading-snug">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#FFFFFF]/90 font-light max-w-xl mx-auto leading-relaxed px-2">
          Everything you need to know
        </p>
      </div>

      {/* FAQ content */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Enhanced card with gradient glow */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#C3A161]/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
          {/* Subtle glow on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C3A161]/20 to-[#C5A572]/10 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-l-2 border-[#C3A161]/30 rounded-tl-lg sm:rounded-tl-xl md:rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-r-2 border-[#C3A161]/30 rounded-tr-lg sm:rounded-tr-xl md:rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-l-2 border-[#C3A161]/30 rounded-bl-lg sm:rounded-bl-xl md:rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-r-2 border-[#C3A161]/30 rounded-br-lg sm:rounded-br-xl md:rounded-br-2xl" />
          
          {/* FAQ items */}
          <div className="relative p-3 sm:p-4 md:p-6 lg:p-8 z-10">
            <div className="space-y-2 sm:space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                const contentId = `faq-item-${index}`
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border border-[#C3A161]/30 bg-white hover:bg-[#C3A161]/5 transition-all duration-300 hover:shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#C3A161]/50 focus-visible:ring-offset-2 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className="font-semibold text-[#0A3428] pr-3 text-xs sm:text-sm md:text-base lg:text-lg font-sans leading-relaxed group-hover:text-[#106552] transition-colors duration-200">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-[#C3A161] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-[#C3A161]/10 border-t border-[#C3A161]/20">
                          {item.answer.includes("[RSVP_LINK]") ? (
                            <p className="text-[#0A3428] leading-relaxed text-xs sm:text-sm md:text-base font-sans whitespace-pre-line">
                              {item.answer.split("[RSVP_LINK]")[0]}
                              <a 
                                href="#guest-list" 
                                className="text-[#106552] underline font-semibold hover:text-[#0A3428] transition-colors"
                                onClick={(e) => {
                                  e.preventDefault()
                                  document.getElementById('guest-list')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                              >
                                {item.answer.match(/\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/)?.[1]}
                              </a>
                              {item.answer.split("[/RSVP_LINK]")[1]}
                            </p>
                          ) : (
                            <p className="text-[#0A3428] leading-relaxed text-xs sm:text-sm md:text-base font-sans whitespace-pre-line">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
