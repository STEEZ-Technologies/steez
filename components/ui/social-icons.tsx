"use client"

import { useState } from "react"
import { Phone, Mail, MessageCircle, Download } from "lucide-react"

const contacts = [
  {
    name: "WeChat",
    label: "tim_sab",
    href: "#wechat",
    icon: <MessageCircle className="size-[18px]" />,
    action: "wechat" as const,
  },
  {
    name: "Email",
    label: "steez.workspace@gmail.com",
    href: "mailto:steez.workspace@gmail.com",
    icon: <Mail className="size-[18px]" />,
    action: "link" as const,
  },
  {
    name: "Phone",
    label: "+86 131 1574 7950",
    href: "tel:+8613115747950",
    icon: <Phone className="size-[18px]" />,
    action: "link" as const,
  },
  {
    name: "Save",
    label: "Save Contact",
    href: "#save",
    icon: <Download className="size-[18px]" />,
    action: "save" as const,
  },
]

function saveContact() {
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Tymothy Sabii",
    "N:Sabii;Tymothy;;;",
    "NICKNAME:蒂穆飞",
    "ORG:STEEZ Digital",
    "TITLE:CMO",
    "TEL;TYPE=CELL,VOICE:+8613115747950",
    "EMAIL;TYPE=WORK:steez.workspace@gmail.com",
    "URL:https://steez.digital",
    "ADR;TYPE=WORK:;;浙江省杭州市上城区赞成中心西楼1005室-01;Hangzhou;Zhejiang;;China",
    "NOTE:WeChat: tim_sab | Website: steez.digital",
    "END:VCARD",
  ].join("\r\n")

  const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "Tymothy_Sabii.vcf"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

interface CardContactBarProps {
  onWechatOpen?: () => void
}

export function CardContactBar({ onWechatOpen }: CardContactBarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleClick = (
    e: React.MouseEvent,
    action: (typeof contacts)[number]["action"],
    href: string,
  ) => {
    if (action === "wechat") {
      e.preventDefault()
      onWechatOpen?.()
    } else if (action === "save") {
      e.preventDefault()
      saveContact()
    }
    // "link" falls through to native href
  }

  return (
    <div className="relative flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl bg-neutral-950 border border-white/[0.08]">
      {/* Subtle inner highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      {contacts.map((contact, index) => (
        <a
          key={contact.name}
          href={contact.href}
          onClick={(e) => handleClick(e, contact.action, contact.href)}
          className="group relative flex items-center justify-center size-10 rounded-xl transition-colors duration-200 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={contact.name}
        >
          {/* Hover background */}
          <span
            className={`absolute inset-1 rounded-lg bg-white/[0.08] transition-all duration-300 ease-out ${
              hoveredIndex === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          />

          {/* Icon */}
          <span
            className={`relative z-10 transition-all duration-300 ease-out ${
              hoveredIndex === index
                ? "text-white scale-110"
                : "text-neutral-500"
            }`}
          >
            {contact.icon}
          </span>

          {/* Bottom bar indicator */}
          <span
            className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-white transition-all duration-300 ease-out ${
              hoveredIndex === index ? "w-3 opacity-100" : "w-0 opacity-0"
            }`}
          />

          {/* Tooltip */}
          <span
            className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-white text-neutral-950 text-[11px] font-medium whitespace-nowrap transition-all duration-300 ease-out ${
              hoveredIndex === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-1 pointer-events-none"
            }`}
          >
            {contact.name}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-white" />
          </span>
        </a>
      ))}
    </div>
  )
}

// Generic version — pass your own social links
interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

interface SocialIconsProps {
  socials?: SocialLink[]
}

export function SocialIcons({ socials: customSocials }: SocialIconsProps = {}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const items = customSocials ?? []

  return (
    <div className="relative flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl bg-neutral-950 border border-white/[0.08]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      {items.map((social, index) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center size-10 rounded-xl transition-colors duration-200"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={social.name}
        >
          <span
            className={`absolute inset-1 rounded-lg bg-white/[0.08] transition-all duration-300 ease-out ${
              hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
          <span
            className={`relative z-10 transition-all duration-300 ease-out ${
              hoveredIndex === index ? "text-white scale-110" : "text-neutral-500"
            }`}
          >
            {social.icon}
          </span>
          <span
            className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-white transition-all duration-300 ease-out ${
              hoveredIndex === index ? "w-3 opacity-100" : "w-0 opacity-0"
            }`}
          />
          <span
            className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-white text-neutral-950 text-[11px] font-medium whitespace-nowrap transition-all duration-300 ease-out ${
              hoveredIndex === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-1 pointer-events-none"
            }`}
          >
            {social.name}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-white" />
          </span>
        </a>
      ))}
    </div>
  )
}
