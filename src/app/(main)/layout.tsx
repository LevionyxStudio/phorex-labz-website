import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div id="page-wrapper" className="min-h-screen flex flex-col w-full relative overflow-x-hidden">
      {/* Atmospheric Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-lab-glow-1"></div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-lab-glow-2"></div>

      <Navbar />
      <main className="flex-grow relative z-10 pt-28 md:pt-40 pb-xxl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}
