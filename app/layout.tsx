import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Albert & Rodelyn - Wedding Invitation",
  description:
    "Celebrate the simple and faith-filled wedding of Albert Gupit and Rodelyn Ruga on December 8, 2025 at the Southern-Asia Pacific Division (SSD) Worship Hall in Silang, Cavite. RSVP, read the invitation, and get all event details online.",
  keywords:
    "Albert Rodelyn wedding, Bert Rhods wedding, Cavite wedding, SSD Worship Hall, emerald green beige wedding, RSVP, wedding invitation website, 2025 weddings, Filipino wedding, albertrhods25@gmail.com",
  authors: [
    { name: "Albert Gupit" },
    { name: "Rodelyn Ruga" },
  ],
  creator: "Albert & Rodelyn",
  publisher: "Albert & Rodelyn",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://rodelyn-and-albert-invitation.vercel.app/"),
  alternates: {
    canonical: "https://rodelyn-and-albert-invitation.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Albert & Rodelyn Wedding | December 8, 2025",
    description:
      "Join Albert & Rodelyn as they say “I do” on December 8, 2025 at the SSD Worship Hall in Silang, Cavite. View the invitation, RSVP details, and schedule online.",
    url: "https://rodelyn-and-albert-invitation.vercel.app/",
    siteName: "Rodelyn and Albert Wedding",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://rodelyn-and-albert-invitation.vercel.app/desktop-background/couple (6).jpg",
        width: 1200,
        height: 630,
        alt: "Albert & Rodelyn Wedding Invitation - December 8, 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert & Rodelyn Wedding Invitation",
    description:
      "You're invited to the wedding of Albert & Rodelyn on December 8, 2025 at SSD Worship Hall, Silang, Cavite. RSVP and view the details online. #BertAndRhods",
    images: ["https://rodelyn-and-albert-invitation.vercel.app/desktop-background/couple (6).jpg"],
    creator: "@bertandrhods",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Albert & Rodelyn Wedding",
      startDate: "2025-12-08T10:00:00+08:00",
      endDate: "2025-12-08T14:00:00+08:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: [
        {
          "@type": "Place",
          name: "Southern-Asia Pacific Division (SSD) Worship Hall",
          address: {
            "@type": "PostalAddress",
            streetAddress: "SSD Compound, San Miguel",
            addressLocality: "Silang",
            addressRegion: "Cavite",
            postalCode: "4118",
            addressCountry: "PH",
          },
        },
      ],
      image: ["https://rodelyn-and-albert-invitation.vercel.app/desktop-background/couple (6).jpg"],
      description:
        "In honor and gratitude to God who brought them together, Albert & Rodelyn invite you to witness their simple wedding on December 8, 2025 at the SSD Worship Hall in Silang, Cavite. RSVP details and schedule are available online.",
      organizer: {
        "@type": "Person",
        name: "Albert & Rodelyn",
      },
      offers: {
        "@type": "Offer",
        url: "https://rodelyn-and-albert-invitation.vercel.app/",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "PHP",
      },
      eventHashtag: "#BertAndRhods",
    }),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0A3428" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montez&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/mobile-background/DSCF2614-min.jpg" media="(max-width: 767px)" />
        <link rel="preload" as="image" href="/desktop-background/DSCF2444-min.jpg" media="(min-width: 768px)" />
      </head>
      <body className={`${inter.variable} ${greatVibes.variable} font-inter antialiased text-foreground`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
