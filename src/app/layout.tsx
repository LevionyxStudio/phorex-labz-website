import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { siteConfig } from "@/config/site"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: siteConfig.name + " - The Lab is Open",
  description: siteConfig.description,
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-col relative overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div id="page-wrapper" className="min-h-screen flex flex-col w-full relative overflow-x-hidden">
            {/* Atmospheric Glows */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-lab-glow-1"></div>
            <div className="fixed inset-0 pointer-events-none z-0 bg-lab-glow-2"></div>

            <Navbar />
            <main className="flex-grow relative z-10 pt-40 pb-xxl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
