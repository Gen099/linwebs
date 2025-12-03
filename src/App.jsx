import React, { useState, useEffect, useMemo } from 'react';
import { 
  Grid3X3, 
  LayoutGrid, 
  Maximize2, 
  ArrowLeft, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Share2, 
  ExternalLink,
  X,
  Sparkles,
  Play,
  ArrowUp,
  Loader2,
  Mail,
  Phone,
  Handshake,
  Cpu,
  Users,
  Globe
} from 'lucide-react';

/**
 * TRANSLATIONS
 * Bộ từ điển đa ngôn ngữ
 */
const TRANSLATIONS = {
  vi: {
    role: "AI INFLUENCER",
    tagline: "Truyền thống & Tương lai & AI Visual Art",
    footerCredit: "BASE IN HANOI, BY SONCREATIVESTUDIO",
    selectedWorks: "Tác phẩm tiêu biểu",
    view: "Chế độ xem",
    loading: "Đang tải",
    endOf: "Hết danh mục",
    viewProject: "Xem dự án",
    aboutTitle: "Về Lin.",
    aboutQuote: "\"Tôi không chỉ là những dòng lệnh. Tôi là lăng kính hội tụ giữa văn hóa ngàn năm và kỷ nguyên số.\"",
    aboutDesc: "Lin là một thực thể AI Influencer được phát triển bởi SonCreativeStudio, sinh ra tại Hà Nội. Sứ mệnh của Lin là bảo tồn và tái hiện văn hóa Việt Nam thông qua ngôn ngữ của Generative Art.",
    techStack: "Công nghệ sử dụng",
    collab: "Hợp tác",
    collabIntro: "Chúng tôi luôn tìm kiếm cơ hội hợp tác với:",
    collabList: [
      "Các nghệ sĩ Visual Art truyền thống & kỹ thuật số.",
      "Nhãn hàng thời trang & Lifestyle muốn kể chuyện qua AI.",
      "Nhà tài trợ cho các dự án triển lãm văn hóa số."
    ],
    partners: "Đối tác & Khách hàng",
    connect: "Kết nối với SonCreativeStudio",
    facebookPage: "Fanpage Facebook",
    bookBtn: "Liên hệ dự án",
    backToGallery: "Quay lại thư viện",
    copyright: "BẢN QUYỀN",
    designedBy: "THIẾT KẾ BỞI SONCREATIVESTUDIO"
  },
  en: {
    role: "AI INFLUENCER",
    tagline: "Tradition & Future & AI Visual Art",
    footerCredit: "BASE IN HANOI, BY SONCREATIVESTUDIO",
    selectedWorks: "Selected Works",
    view: "View",
    loading: "Loading",
    endOf: "End of",
    viewProject: "View Project",
    aboutTitle: "About Lin.",
    aboutQuote: "\"I am not just lines of code. I am the prism where millennial culture meets the digital era.\"",
    aboutDesc: "Lin is an AI Influencer entity developed by SonCreativeStudio, born in Hanoi. Lin's mission is to preserve and reimagine Vietnamese culture through the language of Generative Art.",
    techStack: "Technology Stack",
    collab: "Collaboration",
    collabIntro: "We are always looking for collaboration opportunities with:",
    collabList: [
      "Traditional & Digital Visual Artists.",
      "Fashion & Lifestyle brands seeking AI storytelling.",
      "Sponsors for digital cultural exhibitions."
    ],
    partners: "Trusted Partners & Clients",
    connect: "Connect with SonCreativeStudio",
    facebookPage: "Facebook Fanpage",
    bookBtn: "Book a Project",
    backToGallery: "Back to Gallery",
    copyright: "COPYRIGHT",
    designedBy: "DESIGNED BY SONCREATIVESTUDIO"
  }
};

/**
 * CUSTOM CURSOR COMPONENT
 * Đã giảm kích thước 50% (w-5 h-5)
 */
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ 
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        willChange: 'transform'
      }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <img 
          src="https://i.ibb.co/PzskMtYr/Anhpng-com-TR-NG-NG-02-Custom.png" 
          alt="Custom Cursor" 
          className="w-5 h-5 animate-spin-slow opacity-80 drop-shadow-md" 
        />
      </div>
    </div>
  );
};

/**
 * CONFIGURATION
 */
const SITE_CONFIG = {
  name: "Lin",
  contact: {
    email: "contact@soncreativestudio.vn",
    phone: "09x.xxx.xxxx",
    facebook: "https://facebook.com/SonCreativeStudio"
  },
  socials: {
    facebook: "#",
    x: "#", 
    instagram: "#",
    threads: "#",
    youtube: "#",
    tiktok: "#"
  }
};

/**
 * Dữ liệu Albums Gốc
 */
const ORIGINAL_ALBUMS = [
  {
    id: 1,
    title: "Cyber Áo Dài 2077",
    category: "FUTURISTIC",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "aspect-[3/4]", 
    content: (
      <div className="bg-stone-50 w-full">
        <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1678726514781-80a905868205?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Banner"
          />
          <div className="absolute inset-0 bg-stone-900/20"></div>
          <div className="absolute bottom-10 left-6 md:bottom-20 md:left-20 text-white p-4 max-w-xl">
             <span className="block text-orange-400 tracking-[0.3em] text-xs font-bold uppercase mb-2 font-sans">Hanoi • 2077</span>
             <h1 className="text-5xl md:text-7xl font-serif font-medium italic mb-2">Neon Dreams</h1>
             {/* Changed to font-serif */}
             <p className="text-sm md:text-base font-serif font-light opacity-90 border-l-2 border-orange-500 pl-4">
               A cyberpunk re-imagining of the Old Quarter.
             </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto py-20 px-6">
          <p className="text-xl md:text-2xl font-serif text-stone-800 leading-relaxed text-center md:text-left">
            <span className="float-left text-7xl font-serif text-orange-600 leading-[0.8] mr-3 pt-2">T</span>
            his collection explores the boundaries between the organic and the synthetic. 
            Through a series of visual experiments, we attempt to capture the fleeting soul 
            of a moment that may or may not have ever existed.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 pb-20 space-y-4 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
               <div className="space-y-2">
                 <img src="https://images.unsplash.com/photo-1620614136471-1a3b118742d1?q=80&w=1000&auto=format&fit=crop" className="w-full h-auto" alt="Detail 1" />
                 {/* Changed to font-serif */}
                 <p className="text-[10px] text-stone-400 uppercase tracking-widest text-center font-serif">Fig 01. Cyber Interface</p>
               </div>
               <div className="space-y-2 mt-0 md:mt-20">
                 <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" className="w-full h-auto" alt="Detail 2" />
                 {/* Changed to font-serif */}
                 <p className="text-[10px] text-stone-400 uppercase tracking-widest text-center font-serif">Fig 02. The Signal</p>
               </div>
            </div>
        </div>
        <div className="py-20 text-center">
            <div className="w-px h-16 bg-orange-600 mx-auto mb-4"></div>
            {/* Changed to font-serif */}
            <p className="text-[10px] font-serif font-bold tracking-[0.3em] uppercase text-stone-400">End of Collection</p>
            <p className="text-xs font-serif italic text-stone-300 mt-2">Hanoi: 2077</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Virtual Muse",
    category: "PORTRAIT",
    thumbnail: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "aspect-[16/9]",
    content: <div className="p-20 text-center font-serif text-stone-400 italic">Nội dung đang cập nhật...</div>
  },
  {
    id: 3,
    title: "Old Quarter Vibes",
    category: "STREET",
    thumbnail: "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    content: <div className="p-20 text-center font-serif text-stone-400 italic">Nội dung đang cập nhật...</div>
  },
  {
    id: 4,
    title: "Neural Architecture 5",
    category: "CONCEPT",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "aspect-[3/5]",
    content: <div className="p-20 text-center font-serif text-stone-400 italic">Nội dung đang cập nhật...</div>
  },
  {
    id: 5,
    title: "Red Dragon",
    category: "CULTURE",
    thumbnail: "https://images.unsplash.com/photo-1512413345388-9d588fa5802a?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "aspect-[4/3]",
    content: <div className="p-20 text-center font-serif text-stone-400 italic">Nội dung đang cập nhật...</div>
  },
  {
    id: 6,
    title: "Morning Coffee",
    category: "LIFESTYLE",
    thumbnail: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    content: <div className="p-20 text-center font-serif text-stone-400 italic">Nội dung đang cập nhật...</div>
  },
];

const FULL_DATABASE_ALBUMS = Array.from({ length: 30 }).map((_, index) => {
  const original = ORIGINAL_ALBUMS[index % ORIGINAL_ALBUMS.length];
  return {
    ...original,
    id: index + 1,
    title: `${original.title} ${index >= 6 ? `(Vol. ${Math.floor(index / 6) + 1})` : ''}`
  };
});

const CATEGORIES = ["ALL", ...new Set(ORIGINAL_ALBUMS.map(a => a.category))];

const PARTNERS = [
  "Vogue Vietnam", "L'Officiel", "Elle Decor", "Panasonic", "Sony Alpha", "Adobe Creative"
];

const SocialIcon = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-orange-600 transition-colors">
    <Icon size={18} strokeWidth={1.5} />
  </a>
);

export default function App() {
  const [columns, setColumns] = useState(3);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  
  // Language State
  const [lang, setLang] = useState('vi'); // 'vi' or 'en'
  const t = TRANSLATIONS[lang]; // Shortcut for translation

  // Filter, Infinite Scroll & Back to Top States
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleAlbums, setVisibleAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    setVisibleAlbums([]);
    loadAlbums(1, activeCategory, true); 
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowScrollTop(true);
      else setShowScrollTop(false);

      if (!isLoading && hasMore && !selectedAlbum) {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 600) {
          loadAlbums(page + 1, activeCategory);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore, selectedAlbum, page, activeCategory]);

  useEffect(() => {
    if (selectedAlbum) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedAlbum]);

  const loadAlbums = (currentPage, category, isReset = false) => {
    setIsLoading(true);
    const filteredList = category === "ALL" 
      ? FULL_DATABASE_ALBUMS 
      : FULL_DATABASE_ALBUMS.filter(item => item.category === category);

    setTimeout(() => {
      const nextItems = filteredList.slice(0, currentPage * ITEMS_PER_PAGE);
      setVisibleAlbums(nextItems);
      if (nextItems.length >= filteredList.length) {
        setHasMore(false);
      } else {
        setPage(currentPage);
      }
      setIsLoading(false);
    }, 600);
  };

  const openAlbum = (album) => setSelectedAlbum(album);
  const closeAlbum = () => setSelectedAlbum(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getGridClass = () => {
    switch(columns) {
      case 2: return "columns-1 sm:columns-2";
      case 3: return "columns-1 sm:columns-2 lg:columns-3";
      case 4: return "columns-1 sm:columns-2 lg:columns-4";
      default: return "columns-1 sm:columns-2 lg:columns-3";
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-serif selection:bg-orange-200 relative overflow-x-hidden cursor-none">
      
      {/* GLOBAL STYLES & FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        
        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Lato', sans-serif;
          --font-montserrat: 'Montserrat', sans-serif;
        }
        .font-serif { font-family: var(--font-serif) !important; }
        .font-sans { font-family: var(--font-sans) !important; }
        .font-montserrat { font-family: var(--font-montserrat) !important; }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #fafaf9; }
        ::-webkit-scrollbar-thumb { background: #d6d3d1; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #a8a29e; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }
      `}</style>

      {/* CUSTOM CURSOR */}
      <CustomCursor />

      {/* BACKGROUND ANIMATION: TRỐNG ĐỒNG - Opacity 15% */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img 
          src="https://i.ibb.co/PzskMtYr/Anhpng-com-TR-NG-NG-02-Custom.png" 
          alt="Trong Dong Background" 
          className="w-[120vw] md:w-[80vw] max-w-[900px] animate-spin-slow opacity-15 mix-blend-multiply" 
        />
      </div>

      {/* HEADER */}
      <header className="relative z-10 pt-10 pb-6 px-4 flex flex-col items-center justify-center text-center">
        
        {/* LANGUAGE SWITCHER */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
           <button 
              onClick={() => setLang('vi')}
              className={`text-[10px] font-sans font-bold tracking-widest px-2 py-1 rounded transition-colors ${lang === 'vi' ? 'bg-orange-600 text-white' : 'text-stone-400 hover:text-stone-600'}`}
           >
             VI
           </button>
           <div className="h-3 w-px bg-stone-300"></div>
           <button 
              onClick={() => setLang('en')}
              className={`text-[10px] font-sans font-bold tracking-widest px-2 py-1 rounded transition-colors ${lang === 'en' ? 'bg-orange-600 text-white' : 'text-stone-400 hover:text-stone-600'}`}
           >
             EN
           </button>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-200 bg-white/60 backdrop-blur mb-6">
          <Sparkles size={12} className="text-orange-500" />
          <span className="text-[10px] font-bold tracking-widest text-orange-600 uppercase font-sans">
            {t.role}
          </span>
        </div>
        
        {/* Changed text-stone-900 to text-orange-700 */}
        <h1 className="text-6xl md:text-7xl font-serif font-medium tracking-tight mb-3 text-orange-700 cursor-pointer hover:text-orange-800 transition-colors" onClick={scrollToTop}>
          {SITE_CONFIG.name}
        </h1>
        
        <p className="text-lg md:text-xl font-serif italic text-stone-600 mb-4 font-light">
          {t.tagline}
        </p>
        <p className="text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] text-orange-700 uppercase mb-8">
          {t.footerCredit}
        </p>
        <div className="flex items-center gap-6 mb-4">
           <SocialIcon Icon={Facebook} href={SITE_CONFIG.socials.facebook} />
           <SocialIcon Icon={Twitter} href={SITE_CONFIG.socials.x} />
           <SocialIcon Icon={Instagram} href={SITE_CONFIG.socials.instagram} />
           <SocialIcon Icon={Youtube} href={SITE_CONFIG.socials.youtube} />
           <a href="#" className="text-stone-400 hover:text-orange-600 font-sans text-xs font-bold">TikTok</a>
        </div>
      </header>

      {/* FILTER & CONTROL BAR (STICKY) */}
      <div className="sticky top-0 z-30 bg-stone-50/90 backdrop-blur-md border-b border-t border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-[10px] font-sans font-bold tracking-widest uppercase transition-all whitespace-nowrap
                  ${activeCategory === cat 
                    ? 'bg-orange-600 text-white shadow-md' 
                    : 'bg-white text-stone-500 hover:bg-orange-50 hover:text-orange-600 border border-stone-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-3">
             <span className="hidden md:block text-[10px] font-sans font-bold tracking-widest text-stone-400 uppercase">
               {t.view}:
             </span>
             <div className="flex items-center bg-white p-1 rounded-lg border border-stone-200">
               <button onClick={() => setColumns(2)} className={`p-1.5 rounded ${columns === 2 ? 'text-orange-600 bg-orange-50' : 'text-stone-300 hover:text-stone-500'}`}><Maximize2 size={16}/></button>
               <button onClick={() => setColumns(3)} className={`p-1.5 rounded ${columns === 3 ? 'text-orange-600 bg-orange-50' : 'text-stone-300 hover:text-stone-500'}`}><Grid3X3 size={16}/></button>
               <button onClick={() => setColumns(4)} className={`p-1.5 rounded ${columns === 4 ? 'text-orange-600 bg-orange-50' : 'text-stone-300 hover:text-stone-500'}`}><LayoutGrid size={16}/></button>
             </div>
          </div>
        </div>
      </div>

      {/* MAIN GALLERY */}
      <main className="relative z-10 px-4 md:px-12 py-10 min-h-[60vh]">
        <div className={`gap-8 space-y-8 ${getGridClass()}`}>
          {visibleAlbums.map((album) => (
            <div 
              key={album.id} 
              onClick={() => openAlbum(album)}
              className="group break-inside-avoid cursor-pointer mb-12 animate-in fade-in duration-700 slide-in-from-bottom-4"
            >
              <div className="overflow-hidden rounded-sm mb-4 bg-stone-200 relative shadow-sm hover:shadow-xl transition-shadow duration-500">
                 <img 
                  src={album.thumbnail} 
                  alt={album.title} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur text-white text-[9px] px-2 py-1 rounded-sm font-sans tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.viewProject}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-serif text-stone-900 group-hover:text-orange-700 transition-colors leading-tight">
                  {album.title}
                </h3>
                <p className="text-[10px] font-sans font-bold tracking-widest text-orange-600 uppercase">
                  {album.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LOADING STATE */}
        <div className="py-12 text-center">
          {isLoading && (
            <div className="flex justify-center items-center gap-2 text-orange-600">
               <Loader2 className="animate-spin" size={20} />
               <span className="text-xs font-sans tracking-widest uppercase">{t.loading} {activeCategory}...</span>
            </div>
          )}
          {!hasMore && !isLoading && visibleAlbums.length > 0 && (
             <div className="text-stone-400">
                <span className="block w-2 h-2 bg-orange-200 rounded-full mx-auto mb-2"></span>
                <span className="text-[10px] font-sans tracking-widest uppercase">{t.endOf} {activeCategory}</span>
             </div>
          )}
        </div>
      </main>

      {/* ABOUT & CONTACT SECTION */}
      <section className="relative z-10 bg-white border-t border-stone-200 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column: Intro & Tech */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-stone-900">{t.aboutTitle}</h2>
              <p className="text-lg text-stone-600 font-serif leading-relaxed italic">
                {t.aboutQuote}
              </p>
              {/* Changed font-montserrat to font-serif */}
              <p className="mt-4 text-stone-500 font-serif font-light leading-relaxed text-sm md:text-base">
                {t.aboutDesc}
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold font-sans tracking-widest text-orange-600 uppercase mb-4">
                <Cpu size={16}/> {t.techStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Stable Diffusion XL", "Midjourney v6", "Lora Training", "ControlNet", "Runway Gen-2", "Adobe Firefly"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-sans rounded-full border border-stone-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold font-sans tracking-widest text-orange-600 uppercase mb-4">
                <Handshake size={16}/> {t.collab}
              </h3>
              {/* Changed to font-serif */}
              <p className="text-stone-500 font-serif font-light mb-4">
                {t.collabIntro}
              </p>
              <ul className="list-disc list-inside text-stone-600 font-serif space-y-2 pl-2">
                {t.collabList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Partners & Contact */}
          <div className="space-y-10">
            
            {/* Partners Grid */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold font-sans tracking-widest text-orange-600 uppercase mb-6">
                <Users size={16}/> {t.partners}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {PARTNERS.map((partner, idx) => (
                  <div key={idx} className="h-20 flex items-center justify-center bg-stone-50 border border-stone-100 hover:border-orange-200 transition-colors text-center p-2">
                    <span className="text-xs font-serif text-stone-400 font-bold uppercase">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-stone-900 text-white p-8 md:p-10 rounded-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Sparkles size={100} />
               </div>
               <h3 className="text-2xl font-serif mb-6">{t.connect}</h3>
               {/* Changed to font-serif */}
               <div className="space-y-4 font-serif font-light">
                 <div className="flex items-center gap-3">
                   <Mail size={18} className="text-orange-500"/>
                   <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-orange-400 transition-colors">
                     {SITE_CONFIG.contact.email}
                   </a>
                 </div>
                 <div className="flex items-center gap-3">
                   <Phone size={18} className="text-orange-500"/>
                   <span>{SITE_CONFIG.contact.phone}</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <Facebook size={18} className="text-orange-500"/>
                   <a href={SITE_CONFIG.contact.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                     {t.facebookPage}
                   </a>
                 </div>
               </div>
               <button className="mt-8 w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-widest transition-colors">
                 {t.bookBtn}
               </button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-stone-950 text-stone-500 py-12 text-center border-t border-stone-900">
        <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-2">
          © {new Date().getFullYear()} {SITE_CONFIG.name} - {t.copyright}
        </p>
        <p className="text-[9px] font-sans tracking-widest uppercase opacity-50">
          {t.designedBy}
        </p>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-3 bg-stone-900 text-white rounded-full shadow-xl hover:bg-orange-600 transition-all duration-500 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* ALBUM DETAIL OVERLAY */}
      {selectedAlbum && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          <div className="flex-none px-6 py-4 border-b flex justify-between items-center bg-white/95 backdrop-blur z-50 absolute top-0 left-0 right-0 border-stone-100">
            <button 
              onClick={closeAlbum} 
              className="flex items-center gap-2 text-white drop-shadow-md hover:text-orange-400 transition-colors group font-sans bg-black/20 hover:bg-black/40 px-3 py-1.5 rounded-full backdrop-blur"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">{t.backToGallery}</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-stone-50">
            <div className="animate-in slide-in-from-bottom-10 duration-500 delay-100">
               {selectedAlbum.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}