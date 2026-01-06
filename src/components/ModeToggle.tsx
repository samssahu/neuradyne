"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const hasAutoSetTheme = useRef(false)

  useEffect(() => {
    if (hasAutoSetTheme.current) return
    hasAutoSetTheme.current = true

    console.log("[Theme] Initial theme:", theme)

    if (theme && theme !== "system") {
      console.log("[Theme] User preference already set, skipping auto theme")
      return
    }

    try {
      if ("AmbientLightSensor" in window) {
        console.log("[Theme] Ambient Light Sensor is supported")

        // @ts-ignore
        const sensor = new AmbientLightSensor()

        sensor.addEventListener("reading", () => {
          const lux = sensor.illuminance
          console.log(`[Theme] Ambient light reading: ${lux} lux`)

          if (lux < 50) {
            console.log("[Theme] Low light detected → switching to DARK theme")
            setTheme("dark")
          } else if (lux > 150) {
            console.log("[Theme] Bright light detected → switching to LIGHT theme")
            setTheme("light")
          } else {
            console.log("[Theme] Neutral light → keeping system preference")
          }

          sensor.stop()
          console.log("[Theme] Ambient Light Sensor stopped (one-time use)")
        })

        sensor.start()
        console.log("[Theme] Ambient Light Sensor started")
      } else {
        console.log("[Theme] Ambient Light Sensor NOT supported in this browser")
      }
    } catch (err) {
      console.error("[Theme] Ambient Light Sensor error:", err)
    }
  }, [theme, setTheme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
