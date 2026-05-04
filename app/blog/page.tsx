"use client";

import { useState } from "react";
import { ArrowUpRight, Search, ChevronLeft, ChevronRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  summary: string;
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
    href: "#",
    category: "Technical",
    thumbnailUrl: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2070&auto=format&fit=crop",
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
    href: "#",
    category: "Investment",
    thumbnailUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1926&auto=format&fit=crop",
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
    href: "#",
    category: "Sourcing",
    thumbnailUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887&auto=format&fit=crop",
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
    href: "#",
    category: "Technical",
    thumbnailUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
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
        <div className="relative group mb-32">
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
             <article key={article.id} className="group cursor-pointer">
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

        {/* Pagination */}
        <div className="flex justify-between items-center border-t border-white/5 pt-12">
           <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">
              <ChevronLeft className="w-4 h-4" /> Previous
           </button>
           <div className="flex gap-4">
              {[1, 2, 3].map(p => (
                <button key={p} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${p === 1 ? 'bg-primary text-black' : 'hover:bg-white/5 text-white/40'}`}>
                  {p}
                </button>
              ))}
           </div>
           <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">
              Next <ChevronRight className="w-4 h-4" />
           </button>
        </div>
      </section>
    </div>
  );
}
