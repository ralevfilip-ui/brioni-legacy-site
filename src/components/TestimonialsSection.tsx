import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Прекрасно место во самиот парк, со одличен амбиент и пријатен персонал. Храната е секогаш свежа, а кафето одлично. Идеално за семејни ручеци и дружби со пријатели.",
    author: "Стефан Ј.",
    role: "Google рецензија",
  },
  {
    quote: "Едно од најубавите катчиња во Кавадарци. Зеленило, мир и одлична услуга. Скарата е врвна, а десертите домашни. Секогаш се враќаме повторно.",
    author: "Билјана М.",
    role: "Google рецензија",
  },
  {
    quote: "Совршена локација во Парк „Љупчо Шкартов“. Убава тераса, брза послуга и квалитетна храна по разумна цена. Препорачувам за секого што посетува Кавадарци.",
    author: "Дејан П.",
    role: "Google рецензија",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Впечатоци</p>
          <h2 className="heading-section font-display text-foreground mb-16">
            Зборовите на нашите гости
          </h2>
        </motion.div>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="font-display text-2xl sm:text-3xl text-foreground leading-relaxed mb-8">
                „{testimonials[current].quote}"
              </blockquote>
              <p className="text-foreground font-medium">{testimonials[current].author}</p>
              <p className="text-sm text-muted-foreground mt-1">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Претходно"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Слајд ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Следно"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
