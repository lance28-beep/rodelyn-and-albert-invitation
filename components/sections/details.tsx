"use client"

import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import { Car, Shirt, Copy, Check, Navigation, MapPin, Mail, Phone, Music2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Details() {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set())

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItems(prev => new Set(prev).add(itemId))
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev)
          newSet.delete(itemId)
          return newSet
        })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Updated venue information
  const ceremonyVenueName = siteConfig.ceremony.venue
  const ceremonyVenueAddress = "SSD Compound, Silang, Cavite"
  const receptionVenueName = siteConfig.reception.venue
  const receptionVenueAddress = "SSD Compound, Silang, Cavite"
  const venue = `${ceremonyVenueName}, ${ceremonyVenueAddress}`
  const ceremonyMapsLink = `https://maps.google.com/?q=${encodeURIComponent(venue)}`
  const receptionMapsLink = `https://maps.google.com/?q=${encodeURIComponent(`${receptionVenueName}, ${receptionVenueAddress}`)}`

  const openInMaps = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }


  return (
    <Section id="details" className="relative bg-gradient-to-b from-[#0A3428] via-[#106552]/90 to-[#0A3428] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#C3A161]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#C3A161]/5 to-transparent" />
      </div>

      {/* Header */}
        <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-3 sm:px-4">
          <h2 className="montez-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-normal text-[#FFFFFF] mb-3 sm:mb-4 md:mb-6 drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)] leading-snug">
          Event Details
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#FFFFFF]/90 font-light max-w-xl mx-auto leading-relaxed px-2">
          Everything you need to know about our special day
        </p>
      </div>

      {/* Ceremony and Reception - Combined Card */}
      <div className="relative z-10 mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
        <div 
          className="relative bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#C3A161]/30 shadow-lg hover:shadow-xl hover:border-[#C3A161]/50 transition-all duration-300 group"
        >
          {/* Subtle glow on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C3A161]/20 to-[#C5A572]/10 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          
          {/* Venue Image */}
          <div className="relative w-full h-44 sm:h-52 md:h-60 lg:h-64 xl:h-72 overflow-hidden">
            <Image
              src="/Details/SouthernAsiaPacificDivision.png"
              alt="Southern-Asia Pacific Division (SSD) Worship Hall"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            
            {/* Venue name overlay */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 right-3 sm:right-4 md:right-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg leading-tight">
                SSD Worship Hall
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/90 drop-shadow-md">
                Silang, Cavite
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 relative z-10">
            {/* Date */}
            <div className="text-center mb-5 sm:mb-6 md:mb-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#0A3428] mb-2">
                {siteConfig.ceremony.date} • {siteConfig.ceremony.day}
              </p>
              
              {/* Ceremony and Reception Times */}
              <p className="text-sm sm:text-base md:text-lg text-[#0A3428]/80">
                Ceremony: {siteConfig.ceremony.time}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[#0A3428]/80">
                Reception: {siteConfig.reception.time}
              </p>
            </div>

            {/* Venue Details */}
            <div className="space-y-3 mb-5 sm:mb-6 md:mb-8">
              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-[#0A3428]/5 rounded-lg border border-[#C3A161]/20">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C5A572] mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-[#0A3428] mb-1 tracking-wide">Ceremony</p>
                  <p className="text-xs sm:text-sm md:text-base text-[#0A3428]/80 break-words">{ceremonyVenueName}</p>
                  <p className="text-xs sm:text-sm md:text-base text-[#0A3428]/80 break-words mt-1">{ceremonyVenueAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-[#0A3428]/5 rounded-lg border border-[#C3A161]/20">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C5A572] mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-[#0A3428] mb-1 tracking-wide">Reception</p>
                  <p className="text-xs sm:text-sm md:text-base text-[#0A3428]/80 break-words">{receptionVenueName}</p>
                  <p className="text-xs sm:text-sm md:text-base text-[#0A3428]/80 break-words mt-1">{receptionVenueAddress}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
              <button
                onClick={() => openInMaps(ceremonyMapsLink)}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-3 sm:py-3 md:py-3.5 bg-[#0A3428] hover:bg-[#106552] text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg touch-manipulation"
                aria-label="Get directions to venue"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Get Directions</span>
              </button>
              <button
                onClick={() => copyToClipboard(venue, 'venue')}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-3 sm:py-3 md:py-3.5 bg-white border-2 border-[#C3A161] hover:bg-[#C3A161]/10 text-[#0A3428] rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
                aria-label="Copy venue address"
              >
                {copiedItems.has('venue') ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                )}
                <span>{copiedItems.has('venue') ? 'Copied!' : 'Copy Address'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="relative z-10 mb-6 sm:mb-8 md:mb-12 lg:mb-16 max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-5 sm:mb-6 md:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#FFFFFF]">Important Information</h3>
          <p className="text-xs sm:text-sm md:text-base text-[#FFFFFF]/85">Everything you need to know</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Dress Code */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-[#C3A161]/30 shadow-lg hover:shadow-xl hover:border-[#C3A161]/50 transition-all duration-300 group overflow-hidden">
            {/* Subtle glow on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C3A161]/20 to-[#C5A572]/10 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                <div className="bg-[#C5A572]/10 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl flex-shrink-0">
                  <Shirt className="text-[#C5A572] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A3428]">Dress Code</h4>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-[#C3A161]/10 rounded-lg p-3 sm:p-4 border border-[#C3A161]/30">
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-[#0A3428] mb-1.5 sm:mb-2">Principal Sponsors</p>
                  <p className="text-xs sm:text-sm text-[#0A3428]/80 leading-relaxed mb-2">
                    Barong for Ninongs; Filipiniana or formal attire in cream or beige accents for Ninangs
                  </p>
                  {/* Sponsor Color Palette - Beige & Cream */}
                  <div className="mt-2">
                    <p className="text-[10px] sm:text-xs font-medium text-[#0A3428]/70 mb-1.5">Color Palette:</p>
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: '#F5F5DC' }} title="Beige"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: '#FFFDD0' }} title="Cream"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: '#F5DEB3' }} title="Wheat"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: '#FFE4C4' }} title="Bisque"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#C3A161]/10 rounded-lg p-3 sm:p-4 border border-[#C3A161]/30">
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-[#0A3428] mb-1.5 sm:mb-2">Guests</p>
                  <p className="text-xs sm:text-sm text-[#0A3428]/80 leading-relaxed mb-2">
                    Semi-formal silhouettes in shades of green are highly appreciated.
                  </p>
                  {/* Guest Color Palette - Shades of Green */}
                  <div className="mt-2">
                    <p className="text-[10px] sm:text-xs font-medium text-[#0A3428]/70 mb-1.5">Color Palette:</p>
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: '#0A3428' }} title="Dark Green"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: '#106552' }} title="Emerald"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: '#8FBC8F' }} title="Sage Green"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: '#90EE90' }} title="Light Green"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: '#98FB98' }} title="Pale Green"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parking & Travel */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-[#C3A161]/30 shadow-lg hover:shadow-xl hover:border-[#C3A161]/50 transition-all duration-300 group overflow-hidden">
            {/* Subtle glow on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C3A161]/20 to-[#C5A572]/10 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                <div className="bg-[#C5A572]/10 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl flex-shrink-0">
                  <Car className="text-[#C5A572] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A3428]">Parking & Travel</h4>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-[#C3A161]/10 rounded-lg p-3 sm:p-4 border border-[#C3A161]/30">
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-[#0A3428] mb-1.5 sm:mb-2">Parking Available</p>
                  <p className="text-xs sm:text-sm text-[#0A3428]/80 leading-relaxed">
                    The SSD compound offers secure parking spaces. Kindly arrive 15–20 minutes early to settle in reverently.
                  </p>
                </div>

                <div className="bg-[#C3A161]/10 rounded-lg p-3 sm:p-4 border border-[#C3A161]/30">
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-[#0A3428] mb-1.5 sm:mb-2">Transportation</p>
                  <p className="text-xs sm:text-sm text-[#0A3428]/80 leading-relaxed">
                    Private vehicles, carpooling, and booked rides are welcome. Kindly pin “SSD Worship Hall, Silang, Cavite” on your navigation apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Section>
  )
}

