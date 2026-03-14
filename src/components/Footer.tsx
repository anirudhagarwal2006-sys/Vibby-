import { motion } from "framer-motion";
import { Phone, Mail, Heart, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="w-full mt-auto"
    >
      <div className="border-t border-border/50 bg-gradient-to-t from-muted/30 to-transparent">
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Brand */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gradient mb-1">VIBBY</h3>
            <p className="text-sm text-muted-foreground">Your Mood, Your Spot ✨</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:9451019668"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border gradient-card hover:border-primary/40 hover:shadow-glow transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">9451019668</span>
            </a>
            <a
              href="mailto:vibby832@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border gradient-card hover:border-primary/40 hover:shadow-glow transition-all duration-300 text-sm"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">vibby832@gmail.com</span>
            </a>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-accent fill-accent" /> for Gen-Z explorers
            </p>
            <p className="text-xs text-muted-foreground/50 mt-1">© 2025 VIBBY. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
