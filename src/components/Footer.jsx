import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
    { name: "RESEARCH", href: "/research" },
    { name: "SOLUTIONS", href: "/solutions" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="w-6 h-6" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="w-6 h-6" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-6 h-6" />, href: "#" },
  ];

  return (
    <footer className="text-white py-12 px-4 md:px-8 rounded-3xl">
      <div className="bg-black w-full h-auto mx-auto p-6 md:p-12 rounded-3xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {"Let's climb the stairs of "}
              <span className="text-green-400">AWARENESS</span>
            </h2>
            <p className="text-2xl md:text-3xl">
              with <span className="text-green-400">Dyslexia Companion</span>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:shrmsujal786@gmail.com"
                className="flex items-center gap-3 hover:text-green-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5" />
                <span>shrmsujal786@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+918130492327"
                className="flex items-center gap-3 hover:text-green-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5" />
                <span>+918130492327</span>
              </motion.a>
              <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <MapPin className="w-5 h-5" />
                <span>Chandigarh, India</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ x: 5 }}>
                  <a href={link.href} className="block hover:text-green-400 transition-colors">
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Dyslexia Companion. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
