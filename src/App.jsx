import React, { useState, useEffect } from 'react';
import { 
  Grid3X3, LayoutGrid, Maximize2, ArrowLeft, Instagram, Twitter, 
  Facebook, Youtube, ExternalLink, Sparkles, ArrowUp, 
  Loader2, Mail, Phone, Handshake, Cpu, Users, Edit, 
  Download, RotateCcw, Plus, Trash2, X, Type, AtSign, Music, Globe, Save
} from 'lucide-react';

/* ==========================================================================
   PHẦN 1: DỮ LIỆU CẤU HÌNH & NỘI DUNG (EDITABLE)
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
    "tagline": "Truyền thống & Tương lai & Nghệ thuật trí tuệ nhân tạo",
    "about": {
      "title": "Về Lin.",
      "quote": "\"Tôi không chỉ là những dòng lệnh. Tôi là lăng kính hội tụ giữa văn hóa ngàn năm và kỷ nguyên số.\"",
      "description": "Linh là một thực thể AI Influencer được phát triển bởi SonCreativeStudio, sinh ra tại Hà Nội. Sứ mệnh của Linh là bảo tồn và tái hiện văn hóa Việt Nam thông qua ngôn ngữ của Generative Art.",
      "techStackTitle": "Công nghệ sử dụng",
      "techStack": [
        "Google DeepMind",
        "Bytedance",
        "Stable Diffusion",
        "Adobe Suite",
        "RunwayML",
        "ComfyUI",
        "Unreal Engine"
      ],
      "collabTitle": "Hợp tác",
      "collabIntro": "Chúng tôi luôn tìm kiếm cơ hội hợp tác với:",
      "collabList": [
        "Các nghệ sĩ Visual Art truyền thống & kỹ thuật số.",
        "Nhãn hàng thời trang & Lifestyle muốn kể chuyện qua AI.",
        "Nhà tài trợ cho các dự án triển lãm văn hóa số.",
        "Nhà tài trợ về tài chính."
      ],
      "partnersTitle": "Đối tác & Khách hàng",
      "connectTitle": "Kết nối",
      "bookBtn": "Liên hệ dự án"
    }
  },
  "en": {
    "tagline": "Tradition & Future & AI Visual Art",
    "about": {
      "title": "About Lin.",
      "quote": "\"I am not just lines of code. I am the prism where millennial culture meets the digital era.\"",
      "description": "Lin is an AI Influencer entity developed by SonCreativeStudio, born in Hanoi. Lin's mission is to preserve and reimagine Vietnamese culture through the language of Generative Art.",
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
      "bookBtn": "Book a Project"
    }
  }
};

const INITIAL_ALBUMS = [
  {
    "id": 1,
    "title": "Fashion Inspiration",
    "category": "FUTURISTIC",
    "thumbnail": "https://drive.google.com/file/d/1Skpw22CIpXZv47LzJFbUUhQ2ncXwJstl/view?usp=sharing",
    "embedUrl": "https://www.canva.com/design/DAG6cdv_dck/Pon110mVtFsN0m5FF8Uk6w/view?embed",
    "embedPadding": "56.25%",
    "embedTitle": "Photo Collage - Fashion Inspiration"
  },
  {
    "id": 2,
    "title": "Cyber Áo Dài 2077",
    "category": "CULTURE",
    "thumbnail": "https://drive.google.com/file/d/1Vcrt65-M4iM4Krllqlm_7_KG9sToBjBY/view?usp=drive_link",
    "embedUrl": "https://www.canva.com/design/DAG6cdv_dck/Pon110mVtFsN0m5FF8Uk6w/view?embed",
    "embedPadding": "56.25%",
    "embedTitle": "Cyber Ao Dai Collection"
  },
  {
    "id": 3,
    "title": "Old Quarter Vibes",
    "category": "STREET",
    "thumbnail": "https://drive.google.com/file/d/1QAKs-MdN0AHHR3cr8ualICaqHEUSBSJL/view?usp=drive_link",
    "embedUrl": "",
    "embedPadding": "100%",
    "embedTitle": ""
  },
  {
    "id": 4,
    "title": "Neural Architecture 5",
    "category": "CONCEPT",
    "thumbnail": "https://drive.google.com/file/d/1mw28agpWosgl3TutXeiV5YIf5xKDWe9e/view?usp=drive_link",
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

// Font data (Base64)
const INITIAL_FONTS = {};

/* ==========================================================================
   PHẦN 2: LOGIC ỨNG DỤNG (CORE LOGIC)
   ========================================================================== */

const UI_LABELS = {
  vi: { view: "Chế độ xem", loading: "Đang tải", endOf: "Hết danh mục", viewProject: "Xem dự án", backToGallery: "Quay lại thư viện", copyright: "BẢN QUYỀN", designedBy: "THIẾT KẾ BỞI SONCREATIVESTUDIO", viewOriginal: "Xem thiết kế gốc", by: "bởi", facebookPage: "Fanpage Facebook" },
  en: { view: "View", loading: "Loading", endOf: "End of", viewProject: "View Project", backToGallery: "Back to Gallery", copyright: "COPYRIGHT", designedBy: "DESIGNED BY SONCREATIVESTUDIO", viewOriginal: "View Original Design", by: "by", facebookPage: "Facebook Fanpage" }
};

const optimizeGoogleDriveLink = (url) => {
  if (!url || typeof url !== 'string' || !url.includes('drive.google.com')) return url;
  const idMatch = url.match(/\/d\/(.+?)\/|id=(.+?)(&|$)/);
  const id = idMatch ? (idMatch[1] || idMatch[2]) : null;
  if (id) return `https://lh3.googleusercontent.com/d/${id}=s1000?authuser=0`;
  return url;
};

const EditorInput = ({ label, value, onChange, type = "text", placeholder = "", fontKey, currentFont, onFontUpload, helpText }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-1">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500">{label}</label>
        {onFontUpload && (
          <div className="relative group">
            <input 
              type="file" 
              accept=".ttf,.otf,.woff,.woff2" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) onFontUpload(fontKey, file);
              }}
            />
            <button className="text-[9px] flex items-center gap-1 text-stone-400 hover:text-orange-600 bg-stone-100 hover:bg-orange-50 px-2 py-0.5 rounded transition-colors" title="Tải Font chữ (.ttf, .otf)">
              <Type size={10} /> {currentFont ? "Đã đổi Font" : "Đổi Font"}
            </button>
          </div>
        )}
      </div>
      {type === "textarea" ? (
        <textarea className="w-full bg-white border border-stone-300 rounded p-2 text-sm focus:border-orange-500 focus:outline-none" rows={3} value={value || ""} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      ) : (
        <input type={type} className="w-full bg-white border border-stone-300 rounded p-2 text-sm focus:border-orange-500 focus:outline-none" value={value || ""} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      )}
      {helpText && (
        <div className="mt-1 text-[10px] text-stone-500 bg-stone-100 p-2 rounded">
          {helpText}
        </div>
      )}
    </div>
  );
};

const EditorArrayInput = ({ label, items, onChange, fontKey, currentFont, onFontUpload }) => (
  <div className="mb-4">
    <div className="flex justify-between items-end mb-2">
       <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500">{label}</label>
       {onFontUpload && (
          <div className="relative group">
            <input 
              type="file" 
              accept=".ttf,.otf,.woff,.woff2" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) onFontUpload(fontKey, file);
              }}
            />
            <button className="text-[9px] flex items-center gap-1 text-stone-400 hover:text-orange-600 bg-stone-100 hover:bg-orange-50 px-2 py-0.5 rounded transition-colors" title="Tải Font chữ cho danh sách này">
              <Type size={10} /> {currentFont ? "Đã đổi Font" : "Đổi Font List"}
            </button>
          </div>
        )}
    </div>
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <input className="flex-1 bg-white border border-stone-300 rounded p-1.5 text-sm focus:border-orange-500 focus:outline-none" value={item} onChange={(e) => { const newItems = [...items]; newItems[index] = e.target.value; onChange(newItems); }} />
          <button onClick={() => onChange(items.filter((_, i) => i !== index))} className="text-red-400 hover:text-red-600 p-1"><Trash2 size={16}/></button>
        </div>
      ))}
      <button onClick={() => onChange([...items, "New Item"])} className="text-[10px] font-bold text-orange-600 flex items-center gap-1 hover:underline"><Plus size={12}/> THÊM MỤC</button>
    </div>
  </div>
);

const EmbedAlbumFrame = ({ url, paddingInfo, title, siteName }) => (
  <div className="w-full max-w-6xl mx-auto py-8 px-4 animate-in fade-in duration-700">
    <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: paddingInfo || '150.0000%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', overflow: 'hidden', borderRadius: '8px' }}>
      <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }} src={url} allowFullScreen="allowfullscreen" allow="fullscreen" title={title} />
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
  const [config, setConfig] = useState(INITIAL_CONFIG);
  const [albums, setAlbums] = useState(INITIAL_ALBUMS);
  const [customFonts, setCustomFonts] = useState(INITIAL_FONTS);

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('common');
  const [columns, setColumns] = useState(3);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [lang, setLang] = useState('vi');
  const [visibleAlbums, setVisibleAlbums] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const ui = UI_LABELS[lang];
  const content = config[lang] || config.vi;
  
  const fullAlbumsList = albums; 
  const categories = ["ALL", ...new Set(albums.map(a => a.category))];

  useEffect(() => {
    Object.keys(customFonts).forEach(key => {
      loadFontToDocument(key, customFonts[key]);
    });
  }, []);

  const loadFontToDocument = async (fontName, fontData) => {
    try {
      const fontFace = new FontFace(fontName, `url(${fontData})`);
      await fontFace.load();
      document.fonts.add(fontFace);
    } catch (e) {
      console.error("Font load error:", e);
    }
  };

  const handleFontUpload = (key, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fontData = e.target.result;
      const fontName = `CustomFont_${key}`;
      setCustomFonts(prev => ({ ...prev, [fontName]: fontData }));
      loadFontToDocument(fontName, fontData);
    };
    reader.readAsDataURL(file);
  };

  const getFontStyle = (key) => {
    const fontName = `CustomFont_${key}`;
    return customFonts[fontName] ? { fontFamily: fontName } : {};
  };

  useEffect(() => {
    const filtered = activeCategory === "ALL" ? fullAlbumsList : fullAlbumsList.filter(a => a.category === activeCategory);
    setVisibleAlbums(filtered);
    setHasMore(false);
  }, [activeCategory, albums]);

  const handleDownloadCode = () => {
    // Trong file tải xuống, chúng ta vô hiệu hóa khả năng tải xuống tiếp để tránh code quá phức tạp
    alert("Đây là phiên bản đã tải xuống. Bạn hãy sử dụng code này cho website của mình.");
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-serif selection:bg-orange-200 relative overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 35s linear infinite; }
      `}</style>

      {/* BACKGROUND TRỐNG ĐỒNG */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Ngoc_Lu_drum_surface.svg/1024px-Ngoc_Lu_drum_surface.svg.png" alt="Trong Dong Background" className="w-[120vw] md:w-[80vw] max-w-[900px] animate-spin-slow opacity-15 mix-blend-multiply" />
      </div>

      {/* EDITOR BUTTON - Chỉ hiện nếu isEditorOpen true hoặc để ẩn trong bản build */}
      {/* Chúng ta giữ lại UI này nhưng trong bản tải xuống nó sẽ không hoạt động đầy đủ tính năng CMS */}
    </div>
  );
}
