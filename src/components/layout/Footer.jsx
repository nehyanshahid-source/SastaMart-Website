import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // 📋 Footer Link Sections
  const sections = [
    {
      title: "Customer Support",
      links: [
        { name: "My Account", href: "/account" },
        { name: "Track Order", href: "/track-order" },
        { name: "Returns & Exchanges", href: "/returns" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Payment Methods", href: "/payment" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Shop By Category",
      links: [
        { name: "Perfumes", href: "/category/perfumes" },
        { name: "Jewelry", href: "/category/jewelry" },
        { name: "Skincare", href: "/category/skincare" },
        { name: "Ladies Bags", href: "/category/bags" },
        { name: "New Arrivals", href: "/new-arrivals" },
        { name: "Sale Items", href: "/sale" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
      ],
    },
  ];

  // 📱 Real Social Media Icons (Inline SVG)
  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      color: "hover:bg-[#1877F2]",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      color:
        "hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "#",
      color: "hover:bg-[#25D366]",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "#",
      color: "hover:bg-black",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      color: "hover:bg-[#FF0000]",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  // 💳 Real Payment Method Icons (Inline SVG)
  const paymentMethods = [
    {
      name: "Visa",
      svg: (
        <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="32" rx="4" fill="#1434CB" />
          <path
            d="M20.5 20.5h-2.7l1.7-10.4h2.7l-1.7 10.4zm12.5-10.1c-.5-.2-1.4-.5-2.4-.5-2.7 0-4.5 1.4-4.6 3.3 0 1.5 1.3 2.3 2.4 2.8 1.1.5 1.4.8 1.4 1.3 0 .7-.8 1-1.6 1-1.1 0-1.6-.2-2.5-.6l-.4-.2-.4 2.4c.6.3 1.8.5 3 .5 2.9 0 4.7-1.4 4.8-3.5 0-1.2-.7-2-2.3-2.8-1-.5-1.6-.8-1.6-1.3 0-.4.5-.9 1.6-.9.9 0 1.6.2 2.1.4l.3.1.3-2.1zM39.6 10.1h-2c-.6 0-1.1.4-1.4 1l-4 9.5h2.8l.6-1.5h3.4l.3 1.5h2.5l-2.2-10.5zm-3.3 6.8l1-2.8.6 2.8h-1.6zm-9.5-6.8l-2.3 7.1-.2-1.2c-.4-1.5-1.8-3-3.4-3.7l2.1 7.6h2.9l4.3-9.8h-2.8-.6z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "MasterCard",
      svg: (
        <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="32" rx="4" fill="#F7F7F7" />
          <circle cx="19" cy="16" r="8" fill="#EB001B" />
          <circle cx="29" cy="16" r="8" fill="#F79E1B" />
          <path
            d="M24 9.8c-1.4 1.3-2.3 3.6-2.3 6.2s.9 4.9 2.3 6.2c1.4-1.3 2.3-3.6 2.3-6.2s-.9-4.9-2.3-6.2z"
            fill="#FF5F00"
          />
        </svg>
      ),
    },
    {
      name: "American Express",
      svg: (
        <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="32" rx="4" fill="#006FCF" />
          <path
            d="M9 12h3l1 2h1l1-2h3v8h-2v-5l-1 2h-1l-1-2v5H9v-8zm11 0h5v1.5h-3v1h3v1.5h-3v1h3v1.5h-5v-8zm6 0h2l2 4v-4h2v8h-2l-2-4v4h-2v-8zm7 0h5v1.5h-3v1h3v1.5h-3v1h3v1.5h-5v-8z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Discover",
      svg: (
        <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="32" rx="4" fill="#F7F7F7" />
          <path
            d="M6 16c0-2 1-3.5 3-3.5 1.5 0 2.5.8 2.8 2l-1.5.5c-.2-.8-.7-1.2-1.4-1.2-1 0-1.5.8-1.5 2.2s.5 2.2 1.5 2.2c.7 0 1.2-.4 1.4-1.2l1.5.5c-.3 1.2-1.3 2-2.8 2-2 0-3-1.5-3-3.5zm7 3.5V12.5h1.5v7H13zm3 0V12.5h2c2 0 3.5 1.2 3.5 3.5s-1.5 3.5-3.5 3.5h-2zm1.5-1.5h.5c1.2 0 2-.7 2-2s-.8-2-2-2H17.5v4zm6.5 1.5V12.5h1.5v7H24zm3 0V12.5h2c2 0 3.5 1.2 3.5 3.5s-1.5 3.5-3.5 3.5h-2zm1.5-1.5h.5c1.2 0 2-.7 2-2s-.8-2-2-2h-.5v4zm6.5-5.5h1.5v7h-1.5l-2-4v4H31v-7h1.5l2 4v-4z"
            fill="#231F20"
          />
          <circle cx="42" cy="14" r="3" fill="#F58220" />
        </svg>
      ),
    },
    {
      name: "Cash on Delivery",
      svg: (
        <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="32" rx="4" fill="#16A34A" />
          <text
            x="24"
            y="21"
            textAnchor="middle"
            fill="white"
            fontSize="10"
            fontWeight="bold"
            fontFamily="Arial"
          >
            COD
          </text>
        </svg>
      ),
    },
    {
      name: "Bank Transfer",
      svg: (
        <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="32" rx="4" fill="#374151" />
          <path
            d="M24 8l-12 6v2h24v-2l-12-6zm-8 10v8h3v-8h-3zm6 0v8h3v-8h-3zm6 0v8h3v-8h-3zm-14 10v2h20v-2H14z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#faf7f2] border-t border-gray-200">
      <PageContainer>
        {/* 🔝 Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 🏷️ Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-white font-heading text-xl font-bold">
                  S
                </span>
              </div>
              <div className="leading-none">
                <h2 className="text-2xl font-heading font-bold text-secondary-900">
                  SastaMart
                </h2>
                <p className="text-[10px] text-primary-600 font-semibold tracking-widest uppercase">
                  Wholesale
                </p>
              </div>
            </Link>

            <p className="text-secondary-600 mb-6 leading-relaxed text-sm">
              Pakistan's trusted online store for premium perfumes, jewelry,
              skincare products, and ladies bags. Quality you can trust, prices
              you'll love.
            </p>

            <div className="space-y-3">
              <p className="font-bold text-secondary-900 mb-3">Need Help?</p>
              <div className="flex items-center gap-3 text-secondary-600 text-sm">
                <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-600 text-sm">
                <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>support@sastamart.pk</span>
              </div>
              <div className="flex items-start gap-3 text-secondary-600 text-sm">
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>

            <div className="mt-5">
              <p className="font-bold text-secondary-900 mb-2">
                Call Center Hours
              </p>
              <p className="text-secondary-600 text-sm">
                Mon-Sun: 09:00 AM - 09:00 PM
              </p>
            </div>
          </div>

          {/* 📋 Footer Link Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-heading font-bold text-secondary-900 mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-secondary-600 hover:text-primary-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 💳 Payment + Social */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Payment Methods */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-sm text-secondary-600 font-medium">
              We Accept:
            </span>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  title={method.name}
                  className="w-12 h-8 rounded overflow-hidden shadow-sm hover:scale-110 transition-transform cursor-pointer"
                >
                  {method.svg}
                </div>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-secondary-600 font-medium">
              Follow Us:
            </span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-full bg-secondary-900 text-white flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 🔻 Copyright */}
        <div className="border-t border-gray-200 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-secondary-500 text-sm">
            © {currentYear} SastaMart.pk. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm">
            <Link
              href="/privacy"
              className="text-secondary-500 hover:text-primary-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-secondary-500 hover:text-primary-500 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;