"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  const { footer } = t;

  return (
    <footer className="bg-espresso text-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-bold text-cream mb-1 tracking-wider uppercase">
              {footer.brandName}
            </h3>
            <div className="w-8 h-[1px] bg-bronze mb-4" />
            <p className="text-xs font-sans text-cream/40 leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-bronze mb-5">
              {footer.categories}
            </h4>
            <ul className="space-y-2.5">
              {footer.categoryLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#catalogue"
                    className="text-sm font-sans text-cream/45 hover:text-cream transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-bronze mb-5">
              {footer.services}
            </h4>
            <ul className="space-y-2.5">
              {footer.serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#oem"
                    className="text-sm font-sans text-cream/45 hover:text-cream transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-bronze mb-5">
              {footer.contact}
            </h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-2.5">
                <Mail size={13} className="text-bronze mt-0.5 shrink-0" />
                <span className="text-sm font-sans text-cream/45">
                  {footer.contactInfo.email}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={13} className="text-bronze mt-0.5 shrink-0" />
                <span className="text-sm font-sans text-cream/45">
                  {footer.contactInfo.whatsapp}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-bronze mt-0.5 shrink-0" />
                <span className="text-sm font-sans text-cream/45">
                  {footer.contactInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-sans text-cream/28">{footer.copyright}</p>
          <p className="text-[11px] font-sans text-bronze/55 tracking-wider">
            {footer.madeBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
