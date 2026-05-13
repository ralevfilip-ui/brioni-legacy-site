import { motion } from "framer-motion";
import exteriorImg from "@/assets/heritage-exterior.jpg";
import parkImg from "@/assets/heritage-park.jpg";
import interiorImg from "@/assets/heritage-interior.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const HeritageSection = () => {
  return (
    <section id="heritage" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div {...fadeInUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">За нас</p>
            <h2 className="heading-section font-display text-foreground mb-8">
              Традиција што се чувствува во секој залак
            </h2>
            <div className="space-y-5 text-body text-muted-foreground">
              <p>
                Бриони е познат ресторан сместен во срцето на градскиот парк во Кавадарци — едно од ретките
                места каде природата е вистински дел од трпезата. Традицијата ја носиме од 1956 година, а
                гостите сè уште доаѓаат поради истата причина: добра храна, добра атмосфера, добро друштво.
              </p>
              <p>
                Нашата тераса е отворена за сите кои сакаат да избегаат од темпото на градот — за ручек во
                сенка, за кафе со поглед на зеленило, или за вечера кога паркот ќе се смири. Четирите сезони
                ја менуваат сликата, но доживувањето останува исто.
              </p>
              <p>
                Нашата кујна е инспирирана од македонската традиција, збогатена со модерни техники и
                секогаш подготвена со најсвежи сезонски состојки од локалните производители.
              </p>
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2">
              <img
                src={exteriorImg}
                alt="Ентериер на ресторан Бриони"
                className="w-full aspect-[16/9] object-cover rounded-2xl outline outline-1 outline-border -outline-offset-1"
              />
            </div>
            <img
              src={parkImg}
              alt="Градски парк со спомен-костурницата во Кавадарци"
              className="w-full aspect-[4/3] object-cover rounded-2xl outline outline-1 outline-border -outline-offset-1"
            />
            <img
              src={interiorImg}
              alt="Ентериер на ресторан Бриони"
              className="w-full aspect-[4/3] object-cover rounded-2xl outline outline-1 outline-border -outline-offset-1"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
