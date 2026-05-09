import Image from "next/image";

const pieces = [
  {
    id: 1,
    title: "MIRACLE TAPER",
    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778291194/683864758_18095328457921277_3517292132804060953_n_vpxlee.jpg",
  },
  {
    id: 2,
    title: "MIRACLE BAGUETTE",
    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778291194/683294603_18095323675921277_1870812999067198597_n_cvesma.jpg",
  },
  {
    id: 3,
    title: "MIRACLE SQUARE",
    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778291194/684499171_18095322943921277_2014456254279680972_n_zgqbrl.jpg",
  },
  {
    id: 4,
    title: "ETERNAL WONDER",

    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778291194/675445925_18094756141921277_3130584809583555391_n_uj6baz.jpg",
  },
];

export default function SignaturePieces() {
  return (
    <section id="collections" className="w-full bg-black py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-16 tracking-wide drop-shadow-md">
          Shop Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {pieces.map((piece) => (
            <div
              key={piece.id}
              className="group relative bg-[#0a0a0a] rounded-xl overflow-hidden flex flex-col border border-white/5 hover:border-primary/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-black">
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized // Because we are using external URLs
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col items-center text-center z-10 bg-gradient-to-t from-black via-[#0a0a0a] to-transparent -mt-12 pt-16">
                <h3 className="text-lg tracking-widest text-white/90 mb-6">
                  {piece.title}
                </h3>

                {/* Buttons overlay/highlighted elements */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href="https://maisonhimala.etsy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gold-gradient text-black text-sm font-semibold rounded-full hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  >
                    View the Item
                  </a>
                  <a
                    href="https://maisonhimala.etsy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-[#BF953F] text-gold-gradient text-sm font-semibold rounded-full hover:bg-white/5 transition-colors"
                  >
                    Visit the Store
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
