import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { twMerge } from "tailwind-merge"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuradyne",
  description: "Neuradyne is a cutting-edge platform for AI-driven solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          dmSans.className,
          "antialiased bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#7DD3FC,_#F0F9FF_100%)] dark:bg-black/80"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}