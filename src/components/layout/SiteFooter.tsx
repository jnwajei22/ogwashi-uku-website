import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Chapters", path: "/chapters" },
    { name: "Events", path: "/events" },
    { name: "Impact", path: "/impact" },
  ],
  resources: [
    { name: "Member Portal", path: "/portal" },
    { name: "Constitution", path: "/about#constitution" },
    { name: "Donate", path: "/donate" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container-wide mx-auto px-4 md:px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Stay Connected</h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter for updates on events, community news, and ways to get involved.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-display font-bold text-lg">O</span>
              </div>
              <span className="font-display font-bold text-lg">Ogwashi-Uku USA</span>
            </div>

            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Uniting Ogwashi-Uku indigenes in America to preserve our heritage, support our homeland, and empower our community.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    href={l.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((l) => (
                <li key={l.path}>
                  <Link
                    href={l.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">
                  P.O. Box 12345
                  <br />
                  Houston, TX 77001
                </span>
              </li>

              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>

              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a
                  href="mailto:info@ogwashiukuusa.org"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  info@ogwashiukuusa.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-wide mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {year} Ogwashi-Uku USA Association. All rights reserved.</p>
            <p>501(c)(3) Nonprofit Organization</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
