import React, { useState, useEffect } from 'react';
import { 
  Grid3X3, LayoutGrid, Maximize2, ArrowLeft, Instagram, Twitter, 
  Facebook, Youtube, ExternalLink, Sparkles, ArrowUp, 
  Loader2, Mail, Phone, Handshake, Cpu, Users, Edit, 
  Download, RotateCcw, Plus, Trash2, X, Type, AtSign, Music, Globe, Share2, Play
} from 'lucide-react';

/* ==========================================================================
   PHẦN 1: DỮ LIỆU CẤU HÌNH & NỘI DUNG (ĐƯỢC XUẤT TỪ CMS)
   ========================================================================== */

const INITIAL_CONFIG = {
  "common": {
    "siteName": "Lin",
    "role": "AI INFLUENCER",
    "footerCredit": "BASE IN HANOI, BY SONCREATIVESTUDIO",
    "contact": {
      "email": "soncreativevn@gmail.com",
      "phone": "086.868.9912",
      "facebookLink": "https://www.facebook.com/soncgvn/"
    },
    "socials": {
      "facebook": "https://www.facebook.com/soncgvn/",
      "x": "#",
      "instagram": "https://www.instagram.com/linh.aiart/",
      "threads": "https://threads.net/@linh.aiart",
      "youtube": "#",
      "tiktok": "https://tiktok.com/@linh.aiart"
    },
    "partners": [
      "Vogue Vietnam",
      "L'Officiel",
      "Elle Decor",
      "Panasonic",
      "Sony Alpha",
      "Adobe Creative"
    ]
  },
  "vi": {
    "tagline": "Truyền thống & Tương lai & AI Visual Art",
    "aboutTitle": "Về Lin.",
    "aboutQuote": "\"Tôi không chỉ là những dòng lệnh. Tôi là lăng kính hội tụ giữa văn hóa ngàn năm và kỷ nguyên số.\"",
    "aboutDesc": "Lin là một thực thể AI Influencer được phát triển bởi SonCreativeStudio, sinh ra tại Hà Nội. Sứ mệnh của Lin là bảo tồn và tái hiện văn hóa Việt Nam thông qua ngôn ngữ của Generative Art.",
    "techStackTitle": "Công nghệ sử dụng",
    "techStack": [
      "Stable Diffusion XL",
      "Midjourney v6",
      "Lora Training",
      "ControlNet",
      "Runway Gen-2"
    ],
    "collabTitle": "Hợp tác",
    "collabIntro": "Chúng tôi luôn tìm kiếm cơ hội hợp tác với:",
    "collabList": [
      "Các nghệ sĩ Visual Art truyền thống & kỹ thuật số.",
      "Nhãn hàng thời trang & Lifestyle muốn kể chuyện qua AI.",
      "Nhà tài trợ cho các dự án triển lãm văn hóa số."
    ],
    "partnersTitle": "Đối tác & Khách hàng",
    "connectTitle": "Kết nối",
    "bookBtn": "Liên hệ dự án",
    "viewProject": "Xem dự án",
    "backToGallery": "Quay lại thư viện",
    "view": "Chế độ xem",
    "loading": "Đang tải",
    "endOf": "Hết danh mục",
    "copyright": "BẢN QUYỀN",
    "designedBy": "THIẾT KẾ BỞI SONCREATIVESTUDIO",
    "facebookPage": "Fanpage Facebook"
  },
  "en": {
    "tagline": "Tradition & Future & AI Visual Art",
    "aboutTitle": "About Lin.",
    "aboutQuote": "\"I am not just lines of code. I am the prism where millennial culture meets the digital era.\"",
    "aboutDesc": "Lin is an AI Influencer entity developed by SonCreativeStudio, born in Hanoi. Lin's mission is to preserve and reimagine Vietnamese culture through the language of Generative Art.",
    "techStackTitle": "Technology Stack",
    "techStack": [
      "Stable Diffusion XL",
      "Midjourney v6",
      "Lora Training",
      "ControlNet",
      "Runway Gen-2"
    ],
    "collabTitle": "Collaboration",
    "collabIntro": "We are always looking for collaboration opportunities with:",
    "collabList": [
      "Traditional & Digital Visual Artists.",
      "Fashion & Lifestyle brands seeking AI storytelling.",
      "Sponsors for digital cultural exhibitions."
    ],
    "partnersTitle": "Trusted Partners & Clients",
    "connectTitle": "Connect",
    "bookBtn": "Book a Project",
    "viewProject": "View Project",
    "backToGallery": "Back to Gallery",
    "view": "View",
    "loading": "Loading",
    "endOf": "End of",
    "copyright": "COPYRIGHT",
    "designedBy": "DESIGNED BY SONCREATIVESTUDIO",
    "facebookPage": "Facebook Fanpage"
  }
};
const INITIAL_ALBUMS = [
  {
    "id": 1,
    "title": "Fashion Inspiration",
    "category": "FUTURISTIC",
    "thumbnail": "https://drive.google.com/file/d/1Skpw22CIpXZv47LzJFbUUhQ2ncXwJstl/view?usp=drive_link",
    "embedUrl": "https://www.canva.com/design/DAG6cdv_dck/Pon110mVtFsN0m5FF8Uk6w/view?embed",
    "embedPadding": "150%",
    "embedTitle": "Photo Collage - Fashion Inspiration"
  },
  {
    "id": 2,
    "title": "Cyber Áo Dài 2077",
    "category": "CULTURE",
    "thumbnail": "https://images.unsplash.com/photo-1678726514781-80a905868205?q=80&w=2070&auto=format&fit=crop",
    "embedUrl": "https://www.canva.com/design/DAG6cdv_dck/Pon110mVtFsN0m5FF8Uk6w/view?embed",
    "embedPadding": "56.25%",
    "embedTitle": "Cyber Ao Dai Collection"
  },
  {
    "id": 3,
    "title": "Old Quarter Vibes",
    "category": "STREET",
    "thumbnail": "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=1000&auto=format&fit=crop",
    "embedUrl": "",
    "embedPadding": "100%",
    "embedTitle": ""
  },
  {
    "id": 4,
    "title": "Neural Architecture 5",
    "category": "CONCEPT",
    "thumbnail": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop",
    "embedUrl": "",
    "embedPadding": "100%",
    "embedTitle": ""
  },
  {
    "id": 5,
    "title": "Red Dragon",
    "category": "CULTURE",
    "thumbnail": "https://images.unsplash.com/photo-1512413345388-9d588fa5802a?q=80&w=1000&auto=format&fit=crop",
    "embedUrl": "",
    "embedPadding": "133%",
    "embedTitle": ""
  },
  {
    "id": 6,
    "title": "Morning Coffee",
    "category": "LIFESTYLE",
    "thumbnail": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
    "embedUrl": "",
    "embedPadding": "100%",
    "embedTitle": ""
  }
];
const INITIAL_FONTS = {};

/* ==========================================================================
   PHẦN 2: LOGIC ỨNG DỤNG (PROTOTYPE VERSION - NO INFINITE SCROLL)
   ========================================================================== */

/**
 * CUSTOM CURSOR COMPONENT
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

const optimizeGoogleDriveLink = (url) => {
  if (!url || typeof url !== 'string' || !url.includes('drive.google.com')) return url;
  const idMatch = url.match(/\/d\/(.+?)\/|id=(.+?)(&|$)/);
  const id = idMatch ? (idMatch[1] || idMatch[2]) : null;
  if (id) return `https://lh3.googleusercontent.com/d/${id}=s1000?authuser=0`;
  return url;
};

const EmbedAlbumFrame = ({ url, paddingInfo, title, siteName }) => (
  <div className="w-full max-w-6xl mx-auto py-8 px-4 animate-in fade-in duration-700">
    <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: paddingInfo || '150.0000%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', overflow: 'hidden', borderRadius: '8px' }}>
      <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }} src={url} allowFullScreen title={title} />
    </div>
    <div className="text-center mt-2">
      <a href={url?.replace('?embed', '')} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-orange-600 font-sans text-sm font-bold inline-flex items-center gap-1">
        {title || "View Original"} <ExternalLink size={12}/>
      </a>
      <span className="text-stone-400 text-xs ml-2">by {siteName}</span>
    </div>
  </div>
);

const getSocialIcon = (key) => {
  switch(key.toLowerCase()) {
    case 'facebook': return Facebook;
    case 'instagram': return Instagram;
    case 'twitter': return Twitter;
    case 'x': return Twitter;
    case 'youtube': return Youtube;
    case 'threads': return AtSign;
    case 'tiktok': return Music;
    default: return Globe;
  }
};

const SocialIcon = ({ type, href }) => {
  if (!href || href === "#" || href === "") return null;
  const Icon = getSocialIcon(type);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-orange-600 transition-colors">
      <Icon size={18} strokeWidth={1.5} />
    </a>
  );
};

export default function App() {
  const [columns, setColumns] = useState(3);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [lang, setLang] = useState('vi');
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [customFonts, setCustomFonts] = useState(INITIAL_FONTS);

  // MAPPING DATA FROM CMS TO PROTOTYPE
  const config = INITIAL_CONFIG;
  const content = config[lang] || config.vi;
  const siteName = config.common.siteName;
  const albums = INITIAL_ALBUMS;
  
  // Logic Masonry Grid (FIXED: NO INFINITE SCROLL)
  const categories = ["ALL", ...new Set(albums.map(a => a.category))];
  const visibleAlbums = activeCategory === "ALL" ? albums : albums.filter(a => a.category === activeCategory);

  useEffect(() => {
    Object.keys(customFonts).forEach(key => {
      loadFontToDocument(key, customFonts[key]);
    });
  }, [customFonts]);

  const loadFontToDocument = async (fontName, fontData) => {
    try {
      const fontFace = new FontFace(fontName, `url(${fontData})`);
      await fontFace.load();
      document.fonts.add(fontFace);
    } catch (e) {
      console.error("Font load error:", e);
    }
  };

  const getFontStyle = (key) => {
    const fontName = `CustomFont_${key}`;
    return customFonts[fontName] ? { fontFamily: fontName } : {};
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    document.body.style.overflow = 'hidden';
  };
  
  const closeAlbum = () => {
    setSelectedAlbum(null);
    document.body.style.overflow = 'unset';
  };

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
        }
        .font-serif { font-family: var(--font-serif) !important; }
        .font-sans { font-family: var(--font-sans) !important; }

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
          <span className="text-[10px] font-bold tracking-widest text-orange-600 uppercase font-sans" style={getFontStyle('role')}>
            {config.common.role}
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-serif font-medium tracking-tight mb-3 text-orange-700 cursor-pointer hover:text-orange-800 transition-colors" onClick={scrollToTop} style={getFontStyle('siteName')}>
          {siteName}
        </h1>
        
        <p className="text-lg md:text-xl font-serif italic text-stone-600 mb-4 font-light" style={getFontStyle('tagline')}>
          {content.tagline}
        </p>
        <p className="text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] text-orange-700 uppercase mb-8" style={getFontStyle('footerCredit')}>
          {config.common.footerCredit}
        </p>
        <div className="flex items-center gap-6 mb-4">
             {Object.keys(config.common.socials).map(key => (
               <SocialIcon key={key} type={key} href={config.common.socials[key]} />
             ))}
        </div>
      </header>

      {/* FILTER & CONTROL BAR (STICKY) */}
      <div className="sticky top-0 z-30 bg-stone-50/90 backdrop-blur-md border-b border-t border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map(cat => (
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
               {content.view}:
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
                  src={optimizeGoogleDriveLink(album.thumbnail)} 
                  alt={album.title} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur text-white text-[9px] px-2 py-1 rounded-sm font-sans tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {content.viewProject}
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

        {/* LOADING STATE - STATIC */}
        <div className="py-12 text-center">
          {visibleAlbums.length > 0 && (
             <div className="text-stone-400">
                <span className="block w-2 h-2 bg-orange-200 rounded-full mx-auto mb-2"></span>
                <span className="text-[10px] font-sans tracking-widest uppercase">{content.endOf} {activeCategory}</span>
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
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-stone-900">{content.aboutTitle}</h2>
              <p className="text-lg text-stone-600 font-serif leading-relaxed italic" style={getFontStyle('aboutQuote')}>
                {content.aboutQuote}
              </p>
              <p className="mt-4 text-stone-500 font-serif font-light leading-relaxed text-sm md:text-base" style={getFontStyle('aboutDesc')}>
                {content.aboutDesc}
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold font-sans tracking-widest text-orange-600 uppercase mb-4">
                <Cpu size={16}/> {content.techStackTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-sans rounded-full border border-stone-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold font-sans tracking-widest text-orange-600 uppercase mb-4">
                <Handshake size={16}/> {content.collabTitle}
              </h3>
              <p className="text-stone-500 font-serif font-light mb-4">
                {content.collabIntro}
              </p>
              <ul className="list-disc list-inside text-stone-600 font-serif space-y-2 pl-2">
                {content.collabList.map((item, index) => (
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
                <Users size={16}/> {content.partnersTitle}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {config.common.partners.map((partner, idx) => (
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
               <h3 className="text-2xl font-serif mb-6">{content.connectTitle}</h3>
               <div className="space-y-4 font-serif font-light">
                 <div className="flex items-center gap-3">
                   <Mail size={18} className="text-orange-500"/>
                   <a href={`mailto:${config.common.contact.email}`} className="hover:text-orange-400 transition-colors">
                     {config.common.contact.email}
                   </a>
                 </div>
                 <div className="flex items-center gap-3">
                   <Phone size={18} className="text-orange-500"/>
                   <span>{config.common.contact.phone}</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <Facebook size={18} className="text-orange-500"/>
                   <a href={config.common.contact.facebookLink} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                     {content.facebookPage}
                   </a>
                 </div>
               </div>
               <button className="mt-8 w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-widest transition-colors">
                 {content.bookBtn}
               </button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-stone-950 text-stone-500 py-12 text-center border-t border-stone-900">
        <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-2">
          © {new Date().getFullYear()} {siteName} - {content.copyright}
        </p>
        <p className="text-[9px] font-sans tracking-widest uppercase opacity-50">
          {content.designedBy}
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
              <span className="text-xs font-bold uppercase tracking-widest">{content.backToGallery}</span>
            </button>
            <div className="text-right hidden sm:block bg-black/20 backdrop-blur px-3 py-1 rounded text-white">
               <h4 className="text-sm font-bold">{selectedAlbum.title}</h4>
               <p className="text-[10px] uppercase tracking-widest opacity-80">{selectedAlbum.category}</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto bg-stone-50">
             <div className="pt-20 pb-10 min-h-screen flex flex-col">
               {selectedAlbum.embedUrl ? (
                 <EmbedAlbumFrame url={selectedAlbum.embedUrl} paddingInfo={selectedAlbum.embedPadding} title={selectedAlbum.embedTitle} siteName={siteName} />
               ) : (
                 <div className="flex-1 flex flex-col items-center justify-center text-stone-400">
                    <Sparkles size={48} className="mb-4 opacity-20"/>
                    <p className="italic font-serif">Nội dung đang cập nhật...</p>
                 </div>
               )}
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
