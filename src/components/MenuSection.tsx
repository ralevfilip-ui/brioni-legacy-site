import specialtiesImg from "@/assets/menu-specialties.jpg";
import winesImg from "@/assets/menu-wines.jpg";
import dessertsImg from "@/assets/menu-desserts.jpg";

const categories = [
  {
    title: "Специјалитети",
    description: "Премиум стекови и врвни специјалитети од скара, припремени со прецизност и страст за секој вкус.",
    image: specialtiesImg,
  },
  {
    title: "Вина",
    description: "Внимателно курирана колекција на најдобрите македонски и меѓународни вина.",
    image: winesImg,
  },
  {
    title: "Десерти",
    description: "Слатки завршници инспирирани од домашната традиција и неодоливи светски класици.",
    image: dessertsImg,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="border border-border rounded-2xl overflow-hidden transition-colors hover:bg-secondary/50 animate-fade-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className={`w-full aspect-[4/3] bg-secondary/30 ${cat.title === "Вина" ? "object-cover object-top" : "object-contain"}`}
              />
              <div className="p-8">
                <h3 className="font-display text-xl text-foreground mb-3">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-12 animate-fade-up"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href={`${import.meta.env.BASE_URL}Meni_Brioni.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-primary text-primary px-8 py-3 text-sm tracking-wide hover:bg-primary/10 transition-colors"
          >
            Погледни го менито
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
