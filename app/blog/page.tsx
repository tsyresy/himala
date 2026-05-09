"use client";

import { useState } from "react";
import { ArrowUpRight, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Article {
  id: string;
  title: string;
  summary: string;
  content: string[];
  href: string;
  category: string;
  thumbnailUrl: string;
  publishedAt: string;
  readingTime: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}

const articles: Article[] = [
  {
    id: "article-1",
    title: "The Physics of Brilliance: Why Cut Outshines Carat",
    summary: "Understanding the technical precision required to achieve VVS1+ brilliance in Moissanite and Diamonds.",
    content: [
      "When evaluating a diamond or premium moissanite, many are instinctively drawn to carat weight, assuming that sheer size is the ultimate metric of a gemstone's value. However, the true connoisseur understands that it is the cut—the precise architectural geometry of the stone—that dictates its true fire, brilliance, and overall optical performance.",
      "At Maison Himala, our master cutters follow exacting proportions to ensure optimal light return. A perfectly cut stone acts as a miniature prism, capturing ambient light from all surrounding angles and reflecting it upwards toward the observer's eye. If a stone is cut too deep or too shallow, light escapes through the sides or the bottom, resulting in a dull, lifeless appearance regardless of its clarity or color grade.",
      "The meticulous craftsmanship required to achieve our VVS1+ brilliance standard is nothing short of miraculous. Each facet must be polished to microscopic perfection, aligning flawlessly with its counterparts to create a symmetrical dance of light. This level of technical precision transforms a raw, unrefined crystal into a mesmerizing luxury asset that commands attention across any room.",
      "Ultimately, investing in a superior cut means investing in the stone's legacy. While carat weight might impress on paper, it is the undeniable, fiery sparkle of a meticulously cut gem that captures the heart. As you embark on your journey to acquire a piece of high-investment jewelry, remember that brilliance cannot be weighed—it must be engineered."
    ],
    href: "#",
    category: "Technical",
    thumbnailUrl: "/blog/blog_diamond_cut_1778363335603.png",
    publishedAt: "24 April 2024",
    readingTime: "12 min read",
    author: {
      name: "Maison Himala",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder",
    },
  },
  {
    id: "article-2",
    title: "Investing in Lab-Grown Diamonds: A Curator's Guide",
    summary: "How to treat high-investment lab-grown pieces as luxury assets and what to look for in laboratory reports.",
    content: [
      "The landscape of luxury jewelry is undergoing a profound and fascinating evolution, with high-investment lab-grown diamonds representing the pinnacle of modern curation and technological achievement. Possessing identical chemical, physical, and optical properties to their mined counterparts, lab-grown diamonds offer unprecedented clarity, color options, and an impeccable ethical pedigree.",
      "In this comprehensive guide, we delve deep into the nuances of treating lab-grown pieces as serious luxury assets. The first step for any discerning curator is understanding the growth process itself. Whether cultivated via Chemical Vapor Deposition (CVD) or High-Pressure High-Temperature (HPHT) methods, the genesis of these stones in a controlled environment ensures a purity that is often impossible to find in nature.",
      "Interpreting laboratory grading reports from respected institutions like the IGI or GIA is paramount. A true luxury asset is defined not just by its beauty, but by its documented specifications. We advise our clients to scrutinize the cut, color, clarity, and carat with the same rigor they would apply to traditional investments. Look for 'Excellent' or 'Ideal' cut grades, as these are the true drivers of a diamond's value and visual impact.",
      "As the market continues to embrace sustainable luxury, the stigma once associated with lab-grown stones has entirely dissolved among elite circles. Today, they are celebrated as a triumph of human ingenuity. Recognizing the hallmarks of a premium lab-grown diamond ensures that your investment not only sparkles brilliantly today but maintains its prestige and allure for generations to come."
    ],
    href: "#",
    category: "Investment",
    thumbnailUrl: "/blog/blog_lab_grown_1778363352817.png",
    publishedAt: "20 April 2024",
    readingTime: "10 min read",
    author: {
      name: "Maison Himala",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder",
    },
  },
  {
    id: "article-3",
    title: "The Origin of Fire: Sourcing Rare Gemstones",
    summary: "A journey through our boutique suppliers and how we hand-select stones based on color saturation.",
    content: [
      "True luxury cannot simply be mass-produced in a factory; it must be discovered, unearthed, and carefully brought to life. At Maison Himala, our journey begins far from the glamorous showrooms. We work exclusively with a tightly vetted, highly secretive network of boutique suppliers located in some of the most remote and resource-rich regions of the world.",
      "From the mesmerizing, velvety deep blue hues of Ceylon sapphires to the vibrant, electric greens of Colombian emeralds, the art of sourcing is as complex as the stones themselves. Our curation process is an obsessive pursuit of perfection. We evaluate thousands of raw crystals, searching for that elusive combination of natural color saturation, internal flawlessness, and exceptional potential for brilliance.",
      "A critical aspect of our philosophy is a strict adherence to minimal treatments. While the broader industry often relies on heavy heat or chemical interventions to enhance a stone's appearance, we believe that true rarity lies in natural beauty. We seek out stones that speak for themselves, requiring nothing more than a master cutter's touch to reveal their inherent fire.",
      "Furthermore, ethical provenance is not an afterthought—it is the foundation of our sourcing model. We ensure that every gemstone we acquire supports local artisanal communities and adheres to the strictest environmental standards. When you hold a Maison Himala piece, you are not just holding a jewel; you are holding a story of authentic rarity, ethical discovery, and unparalleled natural beauty."
    ],
    href: "#",
    category: "Sourcing",
    thumbnailUrl: "/blog/blog_sourcing_gems_1778363366305.png",
    publishedAt: "15 April 2024",
    readingTime: "15 min read",
    author: {
      name: "Maison Himala",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder",
    },
  },
  {
    id: "article-4",
    title: "Structural Integrity: The Architecture of Fine Settings",
    summary: "Beyond the stone—inspecting hallmarks and chemical composition for long-term value.",
    content: [
      "A masterpiece, no matter how brilliantly cut or exceptionally sourced the central stone may be, requires a flawless foundation to truly shine. The architectural integrity of a setting is the silent, unsung hero of fine jewelry. It is the crucial element that elevates a piece from a mere accessory to a timeless heirloom, capable of withstanding the rigors of daily wear across generations.",
      "We place immense importance on the metallurgy of our creations. The use of premium 18K solid gold and specialized platinum alloys is non-negotiable. These metals offer the perfect equilibrium between malleability for intricate design work and sheer tensile strength for secure stone mounting. The chemical composition is continuously tested to prevent tarnishing and ensure a lasting, luxurious luster.",
      "The engineering behind our settings is a marvel of microscopic precision. Consider the placement of a single prong: it must be robust enough to hold a priceless gem with absolute security, yet delicate enough to allow maximum light to enter the stone. Our master jewelers employ advanced CAD modeling and centuries-old hand-forging techniques to achieve this delicate balance, ensuring that the stone remains the undisputed focal point.",
      "Before any piece leaves our atelier, it undergoes a rigorous series of structural inspections. From ultrasonic stress tests to microscopic evaluations of every solder joint, we leave absolutely nothing to chance. This unwavering commitment to technical perfection is what guarantees that your Maison Himala jewelry will remain as secure, radiant, and structurally sound decades from now as it is the moment you first put it on."
    ],
    href: "#",
    category: "Technical",
    thumbnailUrl: "/blog/blog_fine_settings_1778363382052.png",
    publishedAt: "10 April 2024",
    readingTime: "8 min read",
    author: {
      name: "Maison Himala",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder",
    },
  }
];

const categories = ["All", "Technical", "Investment", "Sourcing", "Heritage"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const featuredArticle = articles[0];

  return (
    <div className="bg-black min-h-screen">
      <section className="py-24 container mx-auto px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Our Journal</span>
          <h1 className="text-6xl font-luxury text-gold-gradient mt-4 mb-6">Resources and Insights</h1>
          <p className="text-white/50 text-lg font-light leading-relaxed">
            The latest industry news, technical deep-dives, and curator insights into the world of high-investment luxury assets.
          </p>
        </div>

        {/* Featured Article */}
        <div className="relative group mb-32 cursor-pointer" onClick={() => setSelectedArticle(featuredArticle)}>
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden glass-panel border-white/5">
            <img 
              src={featuredArticle.thumbnailUrl} 
              alt={featuredArticle.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12 space-y-6">
              <div className="flex gap-4 items-center">
                 <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                   Featured Article
                 </span>
                 <span className="text-white/40 text-sm">{featuredArticle.publishedAt}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-luxury text-white max-w-3xl leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-white/60 text-lg max-w-2xl font-light line-clamp-2">
                {featuredArticle.summary}
              </p>
              <div className="flex items-center gap-6 pt-4">
                 <div className="flex items-center gap-3">
                    <img src={featuredArticle.author.avatarUrl} alt={featuredArticle.author.name} className="w-10 h-10 rounded-full border border-primary/20" />
                    <span className="text-white font-medium">{featuredArticle.author.name}</span>
                 </div>
                 <div className="h-4 w-[1px] bg-white/20" />
                 <span className="text-white/40 text-sm uppercase tracking-widest">{featuredArticle.readingTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 border-b border-white/5 pb-8">
           <div className="flex gap-8 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm uppercase tracking-widest font-bold whitespace-nowrap transition-colors ${activeCategory === cat ? 'text-primary' : 'text-white/30 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
           </div>
           <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-primary transition-all font-light"
              />
           </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
           {filteredArticles.map(article => (
             <article key={article.id} className="group cursor-pointer" onClick={() => setSelectedArticle(article)}>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden glass-panel border-white/5 mb-6 relative">
                   <img 
                    src={article.thumbnailUrl} 
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest">{article.category}</span>
                      <span className="text-white/30 text-xs">{article.publishedAt}</span>
                   </div>
                   <h3 className="text-2xl font-luxury text-white group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                   </h3>
                   <p className="text-white/50 text-sm font-light leading-relaxed line-clamp-3">
                      {article.summary}
                   </p>
                   <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest pt-2 group-hover:gap-4 transition-all">
                      Read Article <ArrowUpRight className="w-4 h-4" />
                   </div>
                </div>
             </article>
           ))}
        </div>

      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden my-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors border border-white/10 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full h-[40vh] relative">
                <img 
                  src={selectedArticle.thumbnailUrl} 
                  alt={selectedArticle.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>

              <div className="p-8 md:p-12 -mt-20 relative z-10">
                <div className="flex gap-4 items-center mb-6">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{selectedArticle.category}</span>
                  <span className="text-white/40 text-xs">{selectedArticle.publishedAt}</span>
                  <span className="text-white/40 text-xs flex items-center gap-2">
                    <span className="w-1 h-1 bg-white/20 rounded-full" /> {selectedArticle.readingTime}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-luxury text-white mb-8 leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/5">
                  <img src={selectedArticle.author.avatarUrl} alt={selectedArticle.author.name} className="w-12 h-12 rounded-full border border-primary/20" />
                  <div>
                    <div className="text-white font-medium">{selectedArticle.author.name}</div>
                    <div className="text-white/40 text-sm font-light">Curator</div>
                  </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-white/70 font-light leading-relaxed">
                  <p className="text-xl text-white/90 mb-8 font-medium">
                    {selectedArticle.summary}
                  </p>
                  {selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
