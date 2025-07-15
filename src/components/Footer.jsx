import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Payment", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact US", href: "#" },
    { name: "Payment Info", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Nepal Airport", href: "#" },
    { name: "Nepal Embassy", href: "#" },
  ];

  const adventureActivities = [
    { name: "Tour", href: "#" },
    { name: "Trekking", href: "#" },
    { name: "Adventure Holidays", href: "#" },
  ];

  const affiliationLogos = [
    {
      name: "Trekking Agencies Association",
      logo: "https://images.unsplash.com/photo-1588466585717-f8041aec7875?w=60&h=60&fit=crop&auto=format&q=80",
    },
    {
      name: "Nepal Mountaineering Association",
      logo: "https://images.unsplash.com/photo-1464822759844-d150baec4738?w=60&h=60&fit=crop&auto=format&q=80",
    },
    {
      name: "Government of Nepal",
      logo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=60&h=60&fit=crop&auto=format&q=80",
    },
    {
      name: "Tourism Board Nepal",
      logo: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=60&h=60&fit=crop&auto=format&q=80",
    },
    {
      name: "Safe Travel Nepal",
      logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=60&h=60&fit=crop&auto=format&q=80",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
      color: "hover:text-red-500",
    },
  ];

  const paymentMethods = [
    {
      name: "MasterCard",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png",
    },
    {
      name: "Visa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png",
    },
    {
      name: "Bank Transfer",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=40&fit=crop&auto=format&q=80",
    },
  ];

  return (
    <footer className='relative min-h-[15vh] bg-gradient-to-br from-emerald-800 to-green-900 text-white'>
      {/* Background Pattern */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-emerald-900/20 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.1)_1px,_transparent_0)] bg-[length:20px_20px]'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-6'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-bold mb-3 text-emerald-100'>
              Quick Links
            </h3>
            <ul className='space-y-1'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-emerald-200 hover:text-white transition-colors duration-300 text-sm'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Adventure Activity */}
          <div>
            <h3 className='text-lg font-bold mb-3 text-emerald-100'>
              Adventure Activity
            </h3>
            <ul className='space-y-1'>
              {adventureActivities.map((activity, index) => (
                <li key={index}>
                  <a
                    href={activity.href}
                    className='text-emerald-200 hover:text-white transition-colors duration-300 text-sm'>
                    {activity.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Affiliation */}
          <div>
            <h3 className='text-lg font-bold mb-3 text-emerald-100'>
              Our Affiliation
            </h3>
            <div className='grid grid-cols-5 gap-2'>
              {affiliationLogos.map((org, index) => (
                <div
                  key={index}
                  className='bg-white/10 backdrop-blur-sm p-1 rounded hover:bg-white/20 transition-all duration-300'>
                  <img
                    src={org.logo}
                    alt={org.name}
                    className='w-full h-8 object-cover rounded'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className='text-lg font-bold mb-3 text-emerald-100'>
              Stay Connected
            </h3>

            {/* Newsletter */}
            <div className='mb-3'>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Your Email address'
                  className='flex-1 px-3 py-2 bg-white/10 backdrop-blur-sm border border-emerald-600 rounded-l-full text-white placeholder-emerald-200 focus:outline-none focus:ring-1 focus:ring-emerald-400 text-sm'
                />
                <button className='bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2 rounded-r-full hover:from-emerald-600 hover:to-green-600 transition-all duration-300 font-semibold text-sm'>
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className='bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-emerald-600'>
              <div className='flex items-center gap-2'>
                <div className='bg-gradient-to-r from-emerald-500 to-green-500 p-2 rounded-full'>
                  <Phone className='w-4 h-4 text-white' />
                </div>
                <div>
                  <div className='font-bold text-sm'>+977 9805868705</div>
                  <div className='text-emerald-200 text-xs'>
                    24/7 Support [Viber & WhatsApp]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Payment */}
        <div className='border-t border-emerald-700 pt-4'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
            {/* Social Media */}
            <div>
              <h4 className='text-base font-bold mb-2 text-emerald-100'>
                Social Media
              </h4>
              <div className='flex gap-2'>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all duration-300 ${social.color}`}>
                      <IconComponent className='w-4 h-4' />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className='text-base font-bold mb-2 text-emerald-100'>
                Payment Method
              </h4>
              <div className='flex gap-2'>
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className='bg-white/90 backdrop-blur-sm p-2 rounded hover:bg-white transition-all duration-300'>
                    <img
                      src={method.logo}
                      alt={method.name}
                      className='h-6 object-contain'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-emerald-700 mt-4 pt-4 text-center'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-2'>
            <div className='text-emerald-200 text-sm'>
              © 2025 ZoomingNaturekking Agency. All rights reserved.
            </div>
            <div className='flex items-center gap-3 text-emerald-200 text-sm'>
              <span>Made with ❤️ in Nepal</span>
              <div className='flex items-center gap-1'>
                <MapPin className='w-3 h-3' />
                <span>Pokhara, Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
