import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import ReservationModal from "@/components/ReservationModal";

const HeroSection = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  return (
    <>
    <section id="hero" className="relative min-h-svh grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="heading-hero font-display text-foreground mb-6 animate-fade-up [animation-delay:200ms]">
          Бриони: Наследство на вкусот од 1956 година.
        </h1>

        <p className="text-body text-muted-foreground mx-auto mb-10 max-w-2xl animate-fade-up [animation-delay:400ms]">
          Традиција што се чувствува, квалитет што се памети.
        </p>

        <div className="flex items-center justify-center gap-4 animate-fade-up [animation-delay:600ms]">
          <a
            href={`${import.meta.env.BASE_URL}Meni_Brioni.pdf`}
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
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up [animation-delay:1000ms]">
        <div className="w-px h-12 bg-muted-foreground/40 animate-pulse" />
      </div>
    </section>
    <ReservationModal open={reservationOpen} onOpenChange={setReservationOpen} />
    </>
  );
};

export default HeroSection;
