"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, Button } from "@/components/ui/index"
import { Download, ExternalLink, Mail, Phone, Moon, Sun } from "lucide-react"
import { Linkedin, Twitter, Instagram, Facebook, Music, MessageCircle, Send } from "lucide-react"
import { useTheme } from "next-themes"

export default function ProfilePage() {
  const [contactSaved, setContactSaved] = useState(false)
  const { theme, setTheme } = useTheme()

  const profile = {
    name: "Joachim Mbidom",
    title: "Growth and Sales Lead @ Bpurple Technology.",
    photo: "/1743280225596.jpeg?height=500&width=500",
    bg: "/100.jpg?height=500&width=500",
    phone: "+234 (813) 747 4240",
    email: "joachim.a@bpurplehq.org",
    about:
    "Joachim is an assertive and solution driven Data expert, deploying cutting edge technology solutions. Over the years of working, I have built my capacity working and leading functional teams cutting across agile+scrum methodology driven workspace, software development and testing, product management.",
  socials: [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/alexjohnson", color: "#0077B5" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/2348137474240", color: "#25D366" },
    { name: "Instagram", icon: Instagram, url: "#", color: "#0088cc" },
    { name: "X", icon: Twitter, url: "https://x.com/alexjohnson", color: "#1DA1F2" },
    { name: "Facebook", icon: Facebook, url: "#", color: "#4267B2" },
    { name: "TikTok", icon: Music, url: "#", color: "#0088cc" },
    { name: "Telegram", icon: Send, url: "#", color: "#0088cc" },
    
  ],
  }

  const saveContact = () => {
    // Create a vCard format
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
TEL:${profile.phone}
EMAIL:${profile.email}
END:VCARD`

    // Create a blob and download it
    const blob = new Blob([vCard], { type: "text/vcard" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${profile.name.replace(" ", "_")}.vcf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setContactSaved(true)
    setTimeout(() => setContactSaved(false), 3000)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center p-4">
      {/* Theme toggle button */}
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 rounded-full bg-white/10 backdrop-blur-sm dark:bg-black/20"
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        <span className="sr-only">Toggle theme</span>
      </Button>

      <Card className="w-full max-w-md overflow-hidden shadow-lg rounded-xl dark:bg-gray-800 dark:border-gray-700">
        {/* Image occupying the entire gradient section */}
        <div className="relative w-full h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black-100 to-white opacity-5 z-10"></div>
          <Image src={profile.bg || "/placeholder.svg"} alt={profile.name} fill className="object-cover z-0" />
        </div>

        {/* Circular profile image - made more prominent */}
        <div className="flex justify-center -mt-24 relative z-20">
          <div className="rounded-full border-4 border-white overflow-hidden h-28 w-28 bg-white dark:bg-gray-700 shadow-lg">
            <Image
              src={profile.photo || "/placeholder.svg"}
              alt={profile.name}
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{profile.name}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{profile.title}</p>

          <div className="flex gap-2 mt-4 justify-center">
            {/* <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">{profile.phone}</span>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">{profile.email}</span>
            </div> */}

                  <Button
                    onClick={saveContact}
                    className="px-3 py-1 h-9 text-sm flex items-center justify-center gap-1"
                    variant={contactSaved ? "outline" : "default"}
                    size="sm"
                  >
                    {contactSaved ? (
                      "Saved!"
                    ) : (
                      <>
                        <Download className="w-3 h-3" />
                        Save Contact
                      </>
                    )}
                  </Button>

                  <Button
                    
                    className="px-3 py-1 h-9 text-sm flex items-center justify-center gap-1"
                    
                    size="sm"
                  >
          
                  </Button>
            
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 text-left">About</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify">{profile.about}</p>
          </div>

          {/* Social icons in a 2x2 grid with colors */}
          <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-left">Connect on socials</h2>
            <div className="grid grid-cols-3 gap-4 max-w-[300px] mx-auto">
              {profile.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" style={{ color: social.color }} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">Made with 💜 from bpurpleHQ</p>
          </div>
        </div>
      </Card>
    </main>
  )
}



