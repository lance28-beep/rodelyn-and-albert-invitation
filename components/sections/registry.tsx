"use client"

import { Section } from "@/components/section"
import { Heart, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Registry() {
  const [showQRCode, setShowQRCode] = useState(false)
  
  return (
    <Section id="registry" className="relative bg-gradient-to-b from-[#0A3428] via-[#106552]/90 to-[#0A3428] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#C3A161]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#C3A161]/5 to-transparent" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
        <h2 className="montez-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-normal text-[#FFFFFF] mb-3 sm:mb-4 md:mb-6 drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)] leading-snug">
          Gift Registry
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#FFFFFF]/90 font-light max-w-xl mx-auto leading-relaxed px-2">
          Your presence is the greatest gift
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Enhanced card with gradient glow */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#C3A161]/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
          {/* Subtle glow on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C3A161]/20 to-[#C5A572]/10 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t-2 border-l-2 border-[#C3A161]/30 rounded-tl-lg sm:rounded-tl-xl md:rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t-2 border-r-2 border-[#C3A161]/30 rounded-tr-lg sm:rounded-tr-xl md:rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-b-2 border-l-2 border-[#C3A161]/30 rounded-bl-lg sm:rounded-bl-xl md:rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-b-2 border-r-2 border-[#C3A161]/30 rounded-br-lg sm:rounded-br-xl md:rounded-br-2xl" />
          
          {/* Card content */}
          <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 z-10">
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8">
              {/* Header with hearts */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C5A572] fill-current flex-shrink-0" />
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase text-[#0A3428] text-center tracking-[0.1em]">
                  Your Presence Is Our Gift
                </h3>
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C5A572] fill-current flex-shrink-0" />
              </div>
              
              {/* Main message - Poetic verse */}
              <div className="text-center space-y-1.5 sm:space-y-2 md:space-y-3 max-w-2xl px-2 sm:px-4">
                <div className="relative py-3 sm:py-4 md:py-6">
                  {/* Decorative top border */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#C3A161]/60 to-transparent"></div>
                  
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3 font-sans">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0A3428] leading-relaxed">
                      With all that we have, we've been truly blessed.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0A3428] leading-relaxed">
                      Your presence and prayers are all that we request.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0A3428] leading-relaxed pt-1.5 sm:pt-2 md:pt-3">
                      But if you desire to give nonetheless,
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0A3428] leading-relaxed">
                      Monetary gift is one we suggest.
                    </p>
                  </div>
                  
                  {/* Decorative bottom border */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#C3A161]/60 to-transparent"></div>
                </div>
              </div>
              
              {/* Toggle Button */}
              <button
                onClick={() => setShowQRCode(!showQRCode)}
                className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#0A3428] to-[#106552] hover:from-[#106552] hover:to-[#0A3428] text-white rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl group mt-1 sm:mt-2"
                aria-label={showQRCode ? "Hide QR Code" : "Show QR Code"}
              >
                <span>{showQRCode ? "Hide" : "View"} GCash QR Code</span>
                {showQRCode ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-0.5 flex-shrink-0" />
                )}
              </button>
              
              {/* QR Code Section - Animated */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  showQRCode
                    ? "max-h-[900px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5 pt-4 sm:pt-6 md:pt-8">
                  {/* Decorative divider */}
                  <div className="flex items-center gap-2 w-full max-w-md">
                    <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#C3A161]/50 to-[#C3A161]"></div>
                    <div className="w-1.5 h-1.5 bg-[#C3A161] rounded-full"></div>
                    <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#C3A161]/50 to-[#C3A161]"></div>
                  </div>
                  
                  {/* GCash Label */}
                  <div className="text-center space-y-0.5 sm:space-y-1">
                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-[#0A3428] mb-0.5 sm:mb-1">
                      GCash
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-[#0A3428]/70 font-sans">
                      Scan to send your gift
                    </p>
                  </div>
                  
                  {/* QR Code Image */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-5 shadow-xl border-2 border-[#C3A161]/40 hover:border-[#C3A161]/70 transition-all duration-500 hover:shadow-2xl group/qr">
                    <div className="relative w-full h-full">
                      <Image
                        src="/QR/gcash2.png"
                        alt="GCash QR Code - Scan to send monetary gift"
                        fill
                        className="object-contain rounded-lg group-hover/qr:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                        priority
                      />
                    </div>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#C3A161]/0 via-[#C3A161]/10 to-[#C3A161]/0 opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  {/* Instructions */}
                  <div className="text-center space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                    <p className="text-[10px] sm:text-xs md:text-sm text-[#0A3428]/70 font-sans">
                      Open GCash app → Scan QR → Enter amount
                    </p>
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-[#C5A572]">
                      <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
                      <span className="font-sans">Thank you for your generosity</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Closing message */}
              <div className="text-center pt-1 sm:pt-2">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-[#106552] font-semibold">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#C5A572] fill-current flex-shrink-0" />
                  <span>We look forward to celebrating with you</span>
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#C5A572] fill-current flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
