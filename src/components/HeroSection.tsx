import { useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import ReservationModal from "@/components/ReservationModal";

const HeroSection = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  return (
    <>
    <section id="hero" className="relative min-h-svh grid place-items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="heading-hero font-display text-foreground mb-6"
        >
          Бриони: Наследство на вкусот од 1956 година.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-body text-muted-foreground mx-auto mb-10 max-w-2xl"
        >
          Традиција што се чувствува, квалитет што се памети.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="/Meni_Brioni.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-full text-base transition-transform duration-200 ease-in-out hover:scale-105 active:scale-100"
          >
            Мени
          </a>
          <button
            type="button"
            onClick={() => setReservationOpen(true)}
            className="inline-block bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-full text-base transition-transform duration-200 ease-in-out hover:scale-105 active:scale-100"
          >
            Резервација
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-muted-foreground/40 animate-pulse" />
      </motion.div>
    </section>
    <ReservationModal open={reservationOpen} onOpenChange={setReservationOpen} />
    </>
  );
};

export default HeroSection;
