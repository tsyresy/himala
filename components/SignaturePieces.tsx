import Image from "next/image";

const pieces = [
  {
    id: 1,
    title: "AURORA DIAMOND RING",
    image: "https://i.pinimg.com/736x/40/ba/42/40ba429be53236c5c600868594ea2c13.jpg",
  },
  {
    id: 2,
    title: "CELESTIA NECKLACE",
    image: "https://i.pinimg.com/1200x/03/ac/d6/03acd6074474ddcfb748476096e4764f.jpg",
  },
  {
    id: 3,
    title: "ECLIPTIC EARRINGS",
    image: "https://i.pinimg.com/736x/27/83/c4/2783c444174a6215fde1f011a5cd7f2d.jpg",
  },
  {
    id: 4,
    title: "NOCTURNE BRACELET",
    // Reusing the first image as a placeholder for the 4th item since only 3 were provided
    image: "https://i.pinimg.com/736x/40/ba/42/40ba429be53236c5c600868594ea2c13.jpg",
  },
];

export default function SignaturePieces() {
  return (
    <section id="collections" className="w-full bg-black py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-16 tracking-wide drop-shadow-md">
          Signature Pieces
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {pieces.map((piece) => (
            <div 
              key={piece.id} 
              className="group relative bg-[#0a0a0a] rounded-xl overflow-hidden flex flex-col border border-white/5 hover:border-primary/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
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
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
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
