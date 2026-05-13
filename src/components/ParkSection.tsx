import parkImg from "@/assets/park-kosturnica.jpg";

const ParkSection = () => {
  return (
    <section id="park" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <img
              src={parkImg}
              alt="Спомен-костурницата во Градскиот парк во Кавадарци"
              className="w-full h-auto object-contain rounded-2xl outline outline-1 outline-border -outline-offset-1"
            />
          </div>

          <div className="animate-fade-up [animation-delay:200ms]">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Паркот</p>
            <h2 className="heading-section font-display text-foreground mb-8">
              Зеленило, историја и мир
            </h2>
            <div className="space-y-5 text-body text-muted-foreground">
              <p>
                Бриони е сместен во Градскиот парк „Љупчо Шкартов" — 85.000 квадратни метри
                зеленило во срцето на Кавадарци, еден од најубавите и највредни градски паркови
                во Македонија. Уредени патеки, вековни дрвја и чист воздух — ова е местото каде
                градот диши.
              </p>
              <p>
                На највисоката точка на паркот се издига Спомен-костурницата — монументален
                споменик кој симболизира стара македонска куќа, вечен дом на паднатите борци
                од Кавадарци. Од неа се открива неверојатен панорамски поглед кон целиот град
                и Тиквешијата. Паркот не е само природа — тој носи историја и памет.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block mt-8 bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-full text-base transition-transform duration-200 hover:scale-105 active:scale-100"
            >
              Резервирајте
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkSection;