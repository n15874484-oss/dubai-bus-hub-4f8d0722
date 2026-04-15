import { Phone, Mail, MapPin } from "lucide-react";
import amplitudeLogo from "@/assets/amplitude-logo.png";

export function Footer() {
  return (
    <footer className="border-t bg-card mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={amplitudeLogo}
              alt="Amplitude Services"
              className="h-10 w-auto dark:brightness-150 dark:contrast-125"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Amplitude Services General Contracting Est. — one of the leading service providers
              established in the year of 1996 to meet the continuous complex demands of
              Engineering Industrial Sector.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://www.amplitudeksa.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Company Website
                </a>
              </li>
              <li>
                <a href="https://www.amplitudeksa.com/services-1.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="https://www.amplitudeksa.com/who-we-are.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Who We Are
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>00966558872734 / 00966506750314</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@amplitudeksa.com" className="hover:text-primary transition-colors">
                  info@amplitudeksa.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Eastern Province, Saudi Arabia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Amplitude Services General Contracting Est. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
