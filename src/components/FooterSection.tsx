import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/brioni-logo.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Контакт</p>
          <h2 className="heading-section font-display text-foreground mb-4">
            Резервирајте го вашиот момент
          </h2>
          <p className="text-body text-muted-foreground mx-auto">
            Ве очекуваме да создадеме незаборавно доживување заедно.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-up">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-medium">Адреса</p>
                <p className="text-sm text-muted-foreground">
                  Дисанска 2, Парк „Љупчо Шкартов“, 1430 Кавадарци, Северна Македонија
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-medium">Телефон</p>
                <a href="tel:+38978218900" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +389 78 218 900
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-medium">Е-пошта</p>
                <a href="mailto:brionipark@yahoo.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  brionipark@yahoo.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-medium">Работно време</p>
                <p className="text-sm text-muted-foreground">Недела – Четврток: 08:00 – 00:00</p>
                <p className="text-sm text-muted-foreground">Петок – Сабота: 08:00 – 01:00</p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Restoran+Brioni+Kavadarci"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden outline outline-1 outline-border -outline-offset-1 aspect-[4/3] group relative animate-fade-up [animation-delay:200ms]"
            aria-label="Отвори ја локацијата на Ресторан Бриони во Google Maps"
          >
            <iframe
              src="https://www.google.com/maps?q=Restoran+Brioni+Kavadarci&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Локација на Ресторан Бриони, Кавадарци"
              className="pointer-events-none"
            />
          </a>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Бриони" className="h-8 w-auto opacity-60" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ресторан Бриони. Сите права задржани.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61558766519655"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/brionirestaurant/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;