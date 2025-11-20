"use client"

import { useState, useEffect } from "react"
import { Loader2, Mail, MessageSquare, Heart, Sparkles, User } from "lucide-react"

interface Guest {
  Name: string
  Email: string
  RSVP: string
  Guest: string
  Message: string
}

export function BookOfGuests() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalGuests, setTotalGuests] = useState(0)

  const getInitials = (name: string) => {
    if (!name) return "?"
    const parts = name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
    return parts.map((p) => p[0]?.toUpperCase()).join("") || "?"
  }

  const fetchGuests = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/guests", { cache: "no-store" })

      if (!response.ok) {
        throw new Error("Failed to fetch guest list")
      }

      const data: Guest[] = await response.json()

      // Filter only attending guests and normalize Guest field
      const attendingGuests = data
        .filter((guest) => guest.RSVP === "Yes")
        .map((guest) => ({
          ...guest,
          Guest: guest.Guest || '1', // Ensure Guest field exists
        }))
      
      // Calculate total guests by summing the Guest column values
      const totalGuestCount = attendingGuests.reduce((sum, guest) => {
        const guestCount = parseInt(String(guest.Guest)) || 1
        return sum + guestCount
      }, 0)
      
      setGuests(attendingGuests)
      setTotalGuests(totalGuestCount)
    } catch (error: any) {
      console.error("Failed to load guests:", error)
      setError(error?.message || "Failed to load guest list")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Initial fetch
    fetchGuests()

    // Set up event listener for RSVP updates
    const handleRsvpUpdate = () => {
      // Add a small delay to allow Google Sheets to update
      setTimeout(() => {
        fetchGuests()
      }, 2000)
    }

    window.addEventListener("rsvpUpdated", handleRsvpUpdate)

    return () => {
      window.removeEventListener("rsvpUpdated", handleRsvpUpdate)
    }
  }, [])

  return (
    <div 
      id="guests" 
      className="relative z-[55] isolate bg-gradient-to-b from-[#0A3428] via-[#106552]/90 to-[#0A3428] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
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
          Book of Guests
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#FFFFFF]/90 font-light max-w-xl mx-auto leading-relaxed px-2">
          See who's celebrating with us
        </p>
      </div>

      {/* Guests content */}
      <div className="relative z-10">
        {/* Stats card */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4 md:px-6">
          <div className="relative max-w-3xl mx-auto">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#C3A161]/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Subtle glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C3A161]/20 to-[#C5A572]/10 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-l-2 border-[#C3A161]/30 rounded-tl-lg sm:rounded-tl-xl md:rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-r-2 border-[#C3A161]/30 rounded-tr-lg sm:rounded-tr-xl md:rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-l-2 border-[#C3A161]/30 rounded-bl-lg sm:rounded-bl-xl md:rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-r-2 border-[#C3A161]/30 rounded-br-lg sm:rounded-br-xl md:rounded-br-2xl" />
              
              {/* Content */}
              <div className="relative z-10 p-3 sm:p-4 md:p-6">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="bg-gradient-to-br from-[#0A3428] to-[#106552] p-1.5 sm:p-2 rounded-full shadow-lg flex-shrink-0">
                    <Heart className="text-[#FFFFFF] h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans font-bold text-[#0A3428] leading-tight">
                      {totalGuests} {totalGuests === 1 ? "Guest" : "Guests"} Celebrating
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-[#0A3428]/70 font-sans mt-0.5">
                      {guests.length} {guests.length === 1 ? "RSVP entry" : "RSVP entries"}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-[#0A3428]/80 font-sans leading-relaxed">
                  Thank you for your RSVP!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guest list container */}
        <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="relative bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#C3A161]/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
            {/* Subtle glow on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C3A161]/20 to-[#C5A572]/10 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-l-2 border-[#C3A161]/30 rounded-tl-lg sm:rounded-tl-xl md:rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-r-2 border-[#C3A161]/30 rounded-tr-lg sm:rounded-tr-xl md:rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-l-2 border-[#C3A161]/30 rounded-bl-lg sm:rounded-bl-xl md:rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-r-2 border-[#C3A161]/30 rounded-br-lg sm:rounded-br-xl md:rounded-br-2xl" />
            
            <div className="relative p-3 sm:p-4 md:p-6 lg:p-8 z-10">
            
            {isLoading ? (
              <div className="flex items-center justify-center py-16 sm:py-20">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="h-8 w-8 sm:h-10 sm:w-10 animate-spin text-[#C5A572]" />
                  <span className="text-[#0A3428]/70 font-sans text-sm sm:text-base">Loading guests...</span>
                </div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center py-16 sm:py-20">
                <div className="text-center">
                  <MessageSquare className="h-10 w-10 sm:h-12 sm:w-12 text-red-500 mx-auto mb-3" />
                  <p className="text-red-600 font-sans text-sm sm:text-base mb-2">{error}</p>
                </div>
              </div>
            ) : guests.length === 0 ? (
              <div className="flex items-center justify-center py-16 sm:py-20">
                <div className="text-center px-4">
                  <div className="bg-gradient-to-br from-[#0A3428] to-[#106552] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-sans font-bold text-[#0A3428] mb-1.5 sm:mb-2">
                    No guests yet
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0A3428]/70 font-sans max-w-xs mx-auto leading-relaxed">
                    Be the first to RSVP!
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-2 sm:space-y-3 relative z-10">
                {guests.map((guest, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-[#C3A161]/30 hover:border-[#C3A161]/50 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex gap-2 sm:gap-3">
                      {/* Avatar */}
                      <div className="relative h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0">
                        <div className="h-full w-full rounded-full bg-gradient-to-br from-[#0A3428] to-[#106552] text-[#FFFFFF] flex items-center justify-center font-semibold shadow-md ring-2 ring-white text-xs sm:text-sm">
                          {getInitials(guest.Name)}
                        </div>
                      </div>
                      
                      {/* Guest Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-sans text-sm sm:text-base md:text-lg font-semibold text-[#0A3428] mb-0.5 sm:mb-1 group-hover:text-[#106552] transition-colors duration-200 truncate">
                              {guest.Name}
                            </h4>
                            {guest.Email && guest.Email !== "Pending" && (
                              <div className="flex items-center text-[10px] sm:text-xs text-[#0A3428]/70 mb-1">
                                <Mail className="h-3 w-3 mr-1 text-[#C3A161] flex-shrink-0" />
                                <span className="font-sans truncate">{guest.Email}</span>
                              </div>
                            )}
                          </div>
                          {/* Guest count badge */}
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <User className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#C3A161]" />
                            <span className="inline-flex items-center justify-center px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#C3A161]/10 text-[#106552] rounded-full text-[10px] sm:text-xs font-semibold border border-[#C3A161]/30 whitespace-nowrap">
                              {guest.Guest ? (parseInt(String(guest.Guest)) || 1) : 1}
                            </span>
                          </div>
                        </div>
                        
                        {/* Message */}
                        {guest.Message && (
                          <div className="mt-2 sm:mt-2.5 pt-2 sm:pt-2.5 border-t border-[#C3A161]/20">
                            <div className="flex items-start gap-1.5 sm:gap-2">
                              <MessageSquare className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#C3A161] flex-shrink-0 mt-0.5" />
                              <p className="text-[10px] sm:text-xs md:text-sm text-[#0A3428]/80 font-sans leading-relaxed italic flex-1">
                                "{guest.Message}"
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
