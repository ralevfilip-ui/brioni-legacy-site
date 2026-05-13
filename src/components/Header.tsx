import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/brioni-logo.png";
import ReservationModal from "@/components/ReservationModal";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  action?: "reservation";
};

const navLinks: NavLink[] = [
  { label: "Почетна", href: "#hero" },
  { label: "За нас", href: "#heritage" },
  { label: "Мени", href: `${import.meta.env.BASE_URL}Meni_Brioni.pdf`, external: true },
  { label: "Парк", href: "#park" },
  { label: "Резервации", href: "#", action: "reservation" },
  { label: "Контакт", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (link: NavLink, className: string, onClickExtra?: () => void) => {
    if (link.action === "reservation") {
      return (
        <button
          type="button"
          onClick={() => {
            setReservationOpen(true);
            onClickExtra?.();
          }}
          className={className}
        >
          {link.label}
        </button>
      );
    }
    return (
      <a
        href={link.href}
        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={className}
        onClick={onClickExtra}
      >
        {link.label}
      </a>
    );
  };

  const desktopLinkClass =
    "text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200";
  const mobileLinkClass =
    "text-lg text-muted-foreground hover:text-foreground transition-colors";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-12 pb-6 lg:py-6 lg:px-8 relative">
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 3).map((link) => (
            <li key={link.label}>{renderLink(link, desktopLinkClass)}</li>
          ))}
        </ul>

        <div className="w-10 lg:hidden" />

        <a href="#hero" className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <img src={logo} alt="Бриони лого" className="h-48 lg:h-44 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.slice(3).map((link) => (
            <li key={link.label}>{renderLink(link, desktopLinkClass)}</li>
          ))}
        </ul>

        <button
          className="lg:hidden text-foreground z-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                {renderLink(link, mobileLinkClass, () => setMobileOpen(false))}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ReservationModal open={reservationOpen} onOpenChange={setReservationOpen} />
    </header>
  );
};

export default Header;
