"use client"

import React from "react"
import { useEffect, useMemo, useState } from "react"
import { Section } from "@/components/section"

interface PrincipalSponsor {
  MalePrincipalSponsor: string
  FemalePrincipalSponsor: string
}

  const SectionTitle = ({
    children,
    align = "center",
    className = "",
  }: {
    children: React.ReactNode
    align?: "left" | "center" | "right"
    className?: string
  }) => {
    const textAlign =
      align === "right" ? "text-right" : align === "left" ? "text-left" : "text-center"
    return (
      <h3 className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase text-[#0A3428] mb-2 sm:mb-3 md:mb-4 tracking-[0.1em] ${textAlign} ${className} drop-shadow-sm`}>
        {children}
      </h3>
    )
  }

  const NameItem = ({ name, align = "center" }: { name: string, align?: "left" | "center" | "right" }) => {
    const containerAlign =
      align === "right" ? "items-end" : align === "left" ? "items-start" : "items-center"
    const textAlign =
      align === "right" ? "text-right" : align === "left" ? "text-left" : "text-center"
    return (
    <div className={`flex flex-col ${containerAlign} justify-center py-1.5 sm:py-2.5 md:py-3 w-full group/item transition-all duration-200 hover:scale-[1.015]`}>
      <p className={`imperial-script-regular text-[#0A3428] text-[1.05rem] sm:text-lg md:text-xl lg:text-[1.5rem] leading-tight break-words ${textAlign} group-hover/item:text-[#106552] transition-colors duration-200`}>
        {name}
      </p>
      </div>
    )
  }

const JUNIOR_SPONSOR_PAIRS: [string, string][] = [
  ["Mr. Zernan Diaz", "Mrs. Jazel May Diaz"],
  ["Pastor Junas Carreon", "Dr. Zipporah Morales-Carreon"],
]

const JUNIOR_SPONSOR_SINGLE = [
  "Mr. Jojo Aguba",
  "Mr. Raul Carrera Jr.",
  "Ms. Melody Montalbo",
]

export function PrincipalSponsors() {

  // Remote data state
  const [sponsors, setSponsors] = useState<PrincipalSponsor[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSponsors = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/principal-sponsor", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to load principal sponsors")
      const data: PrincipalSponsor[] = await res.json()
      setSponsors(data)
    } catch (e: any) {
      console.error(e)
      setError(e?.message || "Failed to load principal sponsors")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSponsors()
  }, [])

  // Keep sponsors as pairs to ensure alignment
  const sponsorPairs = useMemo(() => 
    sponsors.filter(s => s.MalePrincipalSponsor || s.FemalePrincipalSponsor),
    [sponsors]
  )

  return (
    <Section
      id="sponsors"
      className="relative bg-gradient-to-b from-[#0A3428] via-[#106552]/90 to-[#0A3428] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#C3A161]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#C3A161]/5 to-transparent" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-6 sm:mb-10 md:mb-12 lg:mb-16 px-3 sm:px-4">
        <h2 className="montez-regular text-[2.4rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-normal text-[#FFFFFF] mb-2 sm:mb-4 md:mb-6 drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)] leading-snug">
          Principal Sponsors
        </h2>
        <p className="text-[0.8rem] sm:text-sm md:text-base lg:text-lg text-[#FFFFFF]/90 font-light max-w-xl mx-auto leading-relaxed px-1.5 sm:px-2">
          Our Beloved Godparents
        </p>
      </div>

      {/* Sponsors content */}
      <div className="relative z-10 max-w-5xl mx-auto px-2.5 sm:px-4 md:px-6 lg:px-8">
        {/* Enhanced card with gradient glow */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#C3A161]/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
          {/* Subtle glow on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C3A161]/20 to-[#C5A572]/10 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 border-t-2 border-l-2 border-[#C3A161]/30 rounded-tl-lg sm:rounded-tl-xl md:rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 border-t-2 border-r-2 border-[#C3A161]/30 rounded-tr-lg sm:rounded-tr-xl md:rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 border-b-2 border-l-2 border-[#C3A161]/30 rounded-bl-lg sm:rounded-bl-xl md:rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 border-b-2 border-r-2 border-[#C3A161]/30 rounded-br-lg sm:rounded-br-xl md:rounded-br-2xl" />
          
          {/* Card content */}
          <div className="relative p-3 sm:p-6 md:p-8 lg:p-10 xl:p-12 z-10">
            <div className="relative z-10 w-full">
              {isLoading ? (
                <div className="flex items-center justify-center py-18 sm:py-24 md:py-32">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-[#C3A161]/30 border-t-[#C5A572] rounded-full animate-spin" />
                    <span className="text-[#0A3428]/70 font-serif text-base sm:text-lg">Loading sponsors...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center py-18 sm:py-24 md:py-32">
                  <div className="text-center">
                    <p className="text-red-600 font-serif text-base sm:text-lg mb-3">{error}</p>
                    <button
                      onClick={fetchSponsors}
                      className="text-[#C5A572] hover:text-[#0A3428] font-serif underline transition-colors duration-200"
                    >
                      Try again
                    </button>
                  </div>
                </div>
              ) : sponsorPairs.length === 0 ? (
                <div className="text-center py-18 sm:py-24 md:py-32">
                  <p className="text-[#0A3428]/60 font-serif text-base sm:text-lg">No sponsors yet</p>
                </div>
              ) : (
                <div className="mb-4 sm:mb-7 md:mb-9 lg:mb-12">
                  <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-x-1.5 sm:gap-x-3 md:gap-x-4 gap-y-1 sm:gap-y-2 md:gap-y-3 items-stretch">
                    {sponsorPairs.map((pair, idx) => (
                      <>
                        <div key={`male-${idx}-${pair.MalePrincipalSponsor || 'empty'}`} className="px-3 sm:px-4 md:px-6">
                          {pair.MalePrincipalSponsor ? (
                            <NameItem name={pair.MalePrincipalSponsor} align="right" />
                          ) : (
                            <div className="py-1 sm:py-1.5 md:py-2" />
                          )}
                        </div>
                        <div key={`female-${idx}-${pair.FemalePrincipalSponsor || 'empty'}`} className="px-3 sm:px-4 md:px-6">
                          {pair.FemalePrincipalSponsor ? (
                            <NameItem name={pair.FemalePrincipalSponsor} align="left" />
                          ) : (
                            <div className="py-1 sm:py-1.5 md:py-2" />
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export function JuniorSponsors() {
  return (
    <Section
      id="junior-sponsors"
      className="relative bg-gradient-to-b from-[#0A3428] via-[#106552]/90 to-[#0A3428] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#C3A161]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#C3A161]/5 to-transparent" />
      </div>

      <div className="relative z-10 text-center mb-6 sm:mb-10 md:mb-12 lg:mb-16 px-3 sm:px-4">
        <h2 className="montez-regular text-[2.4rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-normal text-[#FFFFFF] mb-2 sm:mb-4 md:mb-6 drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)] leading-snug">
          Junior Sponsors
        </h2>
        <p className="text-[0.8rem] sm:text-sm md:text-base lg:text-lg text-[#FFFFFF]/90 font-light max-w-xl mx-auto leading-relaxed px-1.5 sm:px-2">
          Our cherished younger mentors
        </p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-2.5 sm:px-4 md:px-6 lg:px-8">
        <div className="relative bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#C3A161]/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C3A161]/20 to-[#C5A572]/10 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          <div className="absolute top-0 left-0 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 border-t-2 border-l-2 border-[#C3A161]/30 rounded-tl-lg sm:rounded-tl-xl md:rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 border-t-2 border-r-2 border-[#C3A161]/30 rounded-tr-lg sm:rounded-tr-xl md:rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 border-b-2 border-l-2 border-[#C3A161]/30 rounded-bl-lg sm:rounded-bl-xl md:rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 border-b-2 border-r-2 border-[#C3A161]/30 rounded-br-lg sm:rounded-br-xl md:rounded-br-2xl" />

          <div className="relative p-3 sm:p-6 md:p-8 lg:p-10 xl:p-12 z-10">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-x-1.5 sm:gap-x-3 md:gap-x-4 gap-y-1 sm:gap-y-2 md:gap-y-3 items-stretch">
                {JUNIOR_SPONSOR_PAIRS.map(([left, right], idx) => (
                  <React.Fragment key={`junior-row-${idx}`}>
                    <div className="px-3 sm:px-4 md:px-6">
                      <NameItem name={left} align="right" />
                    </div>
                    <div className="px-3 sm:px-4 md:px-6">
                      <NameItem name={right} align="left" />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="max-w-sm mx-auto flex flex-col items-center gap-1.5 sm:gap-2.5">
              {JUNIOR_SPONSOR_SINGLE.map((name) => (
                <div key={name} className="w-full px-3 sm:px-4 md:px-6">
                  <NameItem name={name} align="center" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
