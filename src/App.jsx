import React, { useState, useEffect } from 'react';
import { 
  Grid3X3, LayoutGrid, Maximize2, ArrowLeft, Instagram, Twitter, 
  Facebook, Youtube, ExternalLink, Sparkles, ArrowUp, 
  Loader2, Mail, Phone, Handshake, Cpu, Users, Edit, 
  Download, RotateCcw, Plus, Trash2, X, Type, AtSign, Music, Globe
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
    "tagline": "Truyền thống & Tương lai & AI Visual Art",
    "about": {
      "title": "Về Lin.",
      "quote": "\"Tôi không chỉ là những dòng lệnh. Tôi là lăng kính hội tụ giữa văn hóa ngàn năm và kỷ nguyên số.\"",
      "description": "Lin là một thực thể AI Influencer được phát triển bởi SonCreativeStudio, sinh ra tại Hà Nội. Sứ mệnh của Lin là bảo tồn và tái hiện văn hóa Việt Nam thông qua ngôn ngữ của Generative Art.",
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
  },
  {
    "id": 1764779499151,
    "title": "New Album",
    "category": "NEW",
    "thumbnail": "",
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

// Từ điển giao diện tĩnh (Static UI Labels)
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

// Component Input nâng cấp
const EditorInput = ({ label, value, onChange, type = "text", placeholder = "", fontKey, currentFont, onFontUpload }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-1">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500">{label}</label>
        {onFontUpload && fontKey && (
          <div className="relative group">
            <input 
              type="file" 
              accept=".ttf,.otf,.woff,.woff2" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={(e) => {
                const file = e.target.files?.[0];
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
    </div>
  );
};

const EditorArrayInput = ({ label, items, onChange }) => (
  <div className="mb-4">
    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">{label}</label>
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
  const [config, setConfig] = useState(INITIAL_CONFIG);
  const [albums, setAlbums] = useState(INITIAL_ALBUMS);
  const [customFonts, setCustomFonts] = useState(INITIAL_FONTS);

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('common'); // common, vi, en, albums
  const [columns, setColumns] = useState(3);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [lang, setLang] = useState('vi');
  const [activeCategory, setActiveCategory] = useState("ALL");
  
  const ui = UI_LABELS[lang];
  const content = config[lang] || config.vi; 
  
  // Logic Masonry Grid (No Infinite Scroll - Fixed Loop)
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

  const handleFontUpload = (key, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fontData = e.target?.result;
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

  const handleDownloadCode = () => {
    const fileContent = `import React, { useState, useEffect } from 'react';
import { 
  Grid3X3, LayoutGrid, Maximize2, ArrowLeft, Instagram, Twitter, 
  Facebook, Youtube, ExternalLink, Sparkles, ArrowUp, 
  Loader2, Mail, Phone, Handshake, Cpu, Users, Edit, 
  Download, RotateCcw, Plus, Trash2, X, Type, AtSign, Music, Globe
} from 'lucide-react';

/* ==========================================================================
   PHẦN 1: DỮ LIỆU CẤU HÌNH & NỘI DUNG (EDITABLE)
   ========================================================================== */

const INITIAL_CONFIG = ${JSON.stringify(config, null, 2)};

const INITIAL_ALBUMS = ${JSON.stringify(albums, null, 2)};

// Font data (Base64)
const INITIAL_FONTS = ${JSON.stringify(customFonts, null, 2)};

/* ==========================================================================
   PHẦN 2: LOGIC ỨNG DỤNG (CORE LOGIC)
   ========================================================================== */
${STATIC_LOGIC_CODE}`;

    const blob = new Blob([fileContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'App.jsx';
    a.click();
    alert("Đã lưu file App.jsx mới! \nHãy copy đè lên file cũ.");
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

      {/* BACKGROUND TRỐNG ĐỒNG (Fixed Link) */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Using a reliable Wikimedia Commons link for Dong Son Drum rubbing as a placeholder pattern */}
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dong_Son_drum_tympanum_rubbing.jpg/1024px-Dong_Son_drum_tympanum_rubbing.jpg" 
            alt="Trong Dong Background" 
            className="w-[120vw] md:w-[80vw] max-w-[900px] animate-spin-slow opacity-10 mix-blend-multiply" 
        />
      </div>

      {/* EDITOR BUTTON */}
      <button onClick={() => setIsEditorOpen(!isEditorOpen)} className="fixed bottom-8 left-8 z-50 bg-stone-900 text-white p-3 rounded-full shadow-2xl hover:bg-orange-600 transition-all hover:rotate-90" title="Chỉnh sửa nội dung">
        {isEditorOpen ? <RotateCcw size={20}/> : <Edit size={20}/>}
      </button>

      {/* EDITOR PANEL */}
      {isEditorOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-full md:w-[450px] bg-white z-40 shadow-2xl border-r border-stone-200 overflow-y-auto animate-in slide-in-from-left duration-300 font-sans">
          <div className="p-4 bg-stone-900 text-white sticky top-0 z-10 flex justify-between items-center">
            <h2 className="font-bold uppercase tracking-widest flex items-center gap-2"><Edit size={16}/> CMS Editor</h2>
            <button onClick={handleDownloadCode} className="bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-xs font-bold flex items-center gap-1 animate-pulse"><Download size={12}/> TẢI CODE APP.JSX</button>
          </div>
          <div className="flex border-b border-stone-200 sticky top-14 bg-white z-10 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            <button onClick={() => setActiveTab('common')} className={`flex-1 py-3 hover:text-orange-600 ${activeTab === 'common' ? 'text-orange-600 border-b-2 border-orange-600' : ''}`}>CHUNG</button>
            <button onClick={() => setActiveTab('vi')} className={`flex-1 py-3 hover:text-orange-600 ${activeTab === 'vi' ? 'text-orange-600 border-b-2 border-orange-600' : ''}`}>VIỆT</button>
            <button onClick={() => setActiveTab('en')} className={`flex-1 py-3 hover:text-orange-600 ${activeTab === 'en' ? 'text-orange-600 border-b-2 border-orange-600' : ''}`}>ANH</button>
            <button onClick={() => setActiveTab('albums')} className={`flex-1 py-3 hover:text-orange-600 ${activeTab === 'albums' ? 'text-orange-600 border-b-2 border-orange-600' : ''}`}>ALBUMS</button>
          </div>
          
          <div className="p-6 pb-20 space-y-6">
            {activeTab === 'common' && (
              <>
                <h3 className="text-xs font-bold uppercase mb-4 text-orange-600">Thông tin chung (Dùng cho cả 2 ngôn ngữ)</h3>
                <EditorInput label="Tên Web" value={config.common.siteName} onChange={(v) => setConfig({...config, common: {...config.common, siteName: v}})} fontKey="siteName" currentFont={customFonts['CustomFont_siteName']} onFontUpload={handleFontUpload}/>
                <EditorInput label="Vai trò" value={config.common.role} onChange={(v) => setConfig({...config, common: {...config.common, role: v}})} fontKey="role" currentFont={customFonts['CustomFont_role']} onFontUpload={handleFontUpload}/>
                <EditorInput label="Footer Credit" value={config.common.footerCredit} onChange={(v) => setConfig({...config, common: {...config.common, footerCredit: v}})} fontKey="footerCredit" currentFont={customFonts['CustomFont_footerCredit']} onFontUpload={handleFontUpload}/>
                
                <div className="border-t pt-4">
                  <h3 className="text-xs font-bold uppercase mb-4 text-orange-600">Liên hệ & Mạng xã hội</h3>
                  <EditorInput label="Email" value={config.common.contact.email} onChange={(v) => setConfig({...config, common: {...config.common, contact: {...config.common.contact, email: v}}})} />
                  <EditorInput label="Phone" value={config.common.contact.phone} onChange={(v) => setConfig({...config, common: {...config.common, contact: {...config.common.contact, phone: v}}})} />
                  <EditorInput label="Facebook Cá nhân" value={config.common.contact.facebookLink} onChange={(v) => setConfig({...config, common: {...config.common, contact: {...config.common.contact, facebookLink: v}}})} />
                  
                  <div className="grid grid-cols-2 gap-2 bg-stone-50 p-3 rounded">
                     {Object.keys(config.common.socials).map(k => (
                       <EditorInput key={k} label={k.toUpperCase()} value={config.common.socials[k]} onChange={(v) => setConfig({...config, common: {...config.common, socials: {...config.common.socials, [k]: v}}})} />
                     ))}
                  </div>
                  <div className="mt-4">
                    <EditorArrayInput label="Danh sách Đối tác (Partners)" items={config.common.partners} onChange={(v) => setConfig({...config, common: {...config.common, partners: v}})} />
                  </div>
                </div>
              </>
            )}

            {/* TAB EDITOR CHO TIẾNG VIỆT */}
            {activeTab === 'vi' && (
              <>
                <h3 className="text-xs font-bold uppercase mb-4 text-orange-600">Nội dung Tiếng Việt</h3>
                <EditorInput label="Slogan (Tagline)" value={config.vi.tagline} onChange={(v) => setConfig({...config, vi: {...config.vi, tagline: v}})} type="textarea" fontKey="tagline" currentFont={customFonts['CustomFont_tagline']} onFontUpload={handleFontUpload}/>
                <EditorInput label="Tiêu đề Giới thiệu" value={config.vi.about.title} onChange={(v) => setConfig({...config, vi: {...config.vi, about: {...config.vi.about, title: v}}})} />
                <EditorInput label="Trích dẫn (Quote)" value={config.vi.about.quote} onChange={(v) => setConfig({...config, vi: {...config.vi, about: {...config.vi.about, quote: v}}})} type="textarea" fontKey="aboutQuote" currentFont={customFonts['CustomFont_aboutQuote']} onFontUpload={handleFontUpload}/>
                <EditorInput label="Mô tả chi tiết" value={config.vi.about.description} onChange={(v) => setConfig({...config, vi: {...config.vi, about: {...config.vi.about, description: v}}})} type="textarea" fontKey="aboutDesc" currentFont={customFonts['CustomFont_aboutDesc']} onFontUpload={handleFontUpload}/>
                <EditorInput label="Tiêu đề Tech Stack" value={config.vi.about.techStackTitle} onChange={(v) => setConfig({...config, vi: {...config.vi, about: {...config.vi.about, techStackTitle: v}}})} />
                <EditorArrayInput label="Danh sách Tech" items={config.vi.about.techStack} onChange={(v) => setConfig({...config, vi: {...config.vi, about: {...config.vi.about, techStack: v}}})} />
                <EditorInput label="Tiêu đề Hợp tác" value={config.vi.about.collabTitle} onChange={(v) => setConfig({...config, vi: {...config.vi, about: {...config.vi.about, collabTitle: v}}})} />
                <EditorInput label="Intro Hợp tác" value={config.vi.about.collabIntro} onChange={(v) => setConfig({...config, vi: {...config.vi, about: {...config.vi.about, collabIntro: v}}})} />
                <EditorArrayInput label="Mục Hợp tác" items={config.vi.about.collabList} onChange={(v) => setConfig({...config, vi: {...config.vi, about: {...config.vi.about, collabList: v}}})} />
                <EditorInput label="Nút Liên hệ" value={config.vi.about.bookBtn} onChange={(v) => setConfig({...config, vi: {...config.vi, about: {...config.vi.about, bookBtn: v}}})} />
              </>
            )}

            {/* TAB EDITOR CHO TIẾNG ANH */}
            {activeTab === 'en' && (
              <>
                <h3 className="text-xs font-bold uppercase mb-4 text-orange-600">English Content</h3>
                <EditorInput label="Tagline" value={config.en.tagline} onChange={(v) => setConfig({...config, en: {...config.en, tagline: v}})} type="textarea" fontKey="tagline" currentFont={customFonts['CustomFont_tagline']} onFontUpload={handleFontUpload}/>
                <EditorInput label="About Title" value={config.en.about.title} onChange={(v) => setConfig({...config, en: {...config.en, about: {...config.en.about, title: v}}})} />
                <EditorInput label="Quote" value={config.en.about.quote} onChange={(v) => setConfig({...config, en: {...config.en, about: {...config.en.about, quote: v}}})} type="textarea" fontKey="aboutQuote" currentFont={customFonts['CustomFont_aboutQuote']} onFontUpload={handleFontUpload}/>
                <EditorInput label="Description" value={config.en.about.description} onChange={(v) => setConfig({...config, en: {...config.en, about: {...config.en.about, description: v}}})} type="textarea" fontKey="aboutDesc" currentFont={customFonts['CustomFont_aboutDesc']} onFontUpload={handleFontUpload}/>
                <EditorInput label="Tech Stack Title" value={config.en.about.techStackTitle} onChange={(v) => setConfig({...config, en: {...config.en, about: {...config.en.about, techStackTitle: v}}})} />
                <EditorArrayInput label="Tech List" items={config.en.about.techStack} onChange={(v) => setConfig({...config, en: {...config.en, about: {...config.en.about, techStack: v}}})} />
                <EditorInput label="Collab Title" value={config.en.about.collabTitle} onChange={(v) => setConfig({...config, en: {...config.en, about: {...config.en.about, collabTitle: v}}})} />
                <EditorInput label="Collab Intro" value={config.en.about.collabIntro} onChange={(v) => setConfig({...config, en: {...config.en, about: {...config.en.about, collabIntro: v}}})} />
                <EditorArrayInput label="Collab List" items={config.en.about.collabList} onChange={(v) => setConfig({...config, en: {...config.en, about: {...config.en.about, collabList: v}}})} />
                <EditorInput label="Book Button" value={config.en.about.bookBtn} onChange={(v) => setConfig({...config, en: {...config.en, about: {...config.en.about, bookBtn: v}}})} />
              </>
            )}

            {activeTab === 'albums' && (
              <div className="space-y-6">
                {albums.map((album, idx) => (
                  <div key={album.id} className="bg-stone-50 p-3 rounded border border-stone-200 relative">
                    <button onClick={() => setAlbums(albums.filter((_, i) => i !== idx))} className="absolute top-2 right-2 text-stone-300 hover:text-red-500"><Trash2 size={16}/></button>
                    <span className="text-[9px] font-bold text-stone-400 uppercase mb-2 block">Album #{idx + 1}</span>
                    <EditorInput label="Tiêu đề" value={album.title} onChange={(v) => { const newA = [...albums]; newA[idx].title = v; setAlbums(newA); }} />
                    <EditorInput label="Danh mục" value={album.category} onChange={(v) => { const newA = [...albums]; newA[idx].category = v; setAlbums(newA); }} />
                    <EditorInput label="Thumbnail Link" value={album.thumbnail} onChange={(v) => { const newA = [...albums]; newA[idx].thumbnail = v; setAlbums(newA); }} />
                    <div className="p-2 bg-orange-50 rounded border border-orange-100 mt-2">
                        <EditorInput label="Canva Embed URL" value={album.embedUrl} placeholder="Link view?embed..." onChange={(v) => { const newA = [...albums]; newA[idx].embedUrl = v; setAlbums(newA); }} />
                        <div className="flex gap-2">
                           <div className="w-1/2"><EditorInput label="Tỷ lệ (VD: 150%)" value={album.embedPadding} onChange={(v) => { const newA = [...albums]; newA[idx].embedPadding = v; setAlbums(newA); }} /></div>
                           <div className="w-1/2"><EditorInput label="Title Frame" value={album.embedTitle} onChange={(v) => { const newA = [...albums]; newA[idx].embedTitle = v; setAlbums(newA); }} /></div>
                        </div>
                    </div>
                  </div>
                ))}
                <button onClick={() => setAlbums([...albums, { id: Date.now(), title: "New Album", category: "NEW", thumbnail: "", embedUrl: "", embedPadding: "100%", embedTitle: "" }])} className="w-full py-3 border-2 border-dashed border-stone-300 text-stone-400 font-bold text-xs uppercase hover:border-orange-500 hover:text-orange-600 rounded transition-colors">+ Thêm Album</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MAIN UI */}
      <div className={`transition-all duration-300 ${isEditorOpen ? 'md:pl-[450px]' : ''}`}>
        <header className="pt-10 pb-6 px-4 text-center">
           <div className="absolute top-6 right-6 flex items-center gap-2">
              <button onClick={() => setLang('vi')} className={`text-[10px] font-bold px-2 py-1 rounded ${lang === 'vi' ? 'bg-orange-600 text-white' : 'text-stone-400'}`}>VI</button>
              <div className="h-3 w-px bg-stone-300"></div>
              <button onClick={() => setLang('en')} className={`text-[10px] font-bold px-2 py-1 rounded ${lang === 'en' ? 'bg-orange-600 text-white' : 'text-stone-400'}`}>EN</button>
           </div>
           <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-200 bg-white/60 backdrop-blur mb-6">
             <Sparkles size={12} className="text-orange-500" />
             <span className="text-[10px] font-bold tracking-widest text-orange-600 uppercase font-sans" style={getFontStyle('role')}>{config.common.siteName} - {config.common.role}</span>
           </div>
           
           <h1 className="text-6xl md:text-7xl font-serif font-medium tracking-tight mb-3 text-orange-700" style={getFontStyle('siteName')}>{config.common.siteName}</h1>
           <p className="text-lg md:text-xl font-serif italic text-stone-600 mb-4 font-light" style={getFontStyle('tagline')}>{content.tagline}</p>
           <p className="text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] text-orange-700 uppercase mb-8" style={getFontStyle('footerCredit')}>{config.common.footerCredit}</p>
           
           <div className="flex justify-center items-center gap-6 mb-4">
             {Object.keys(config.common.socials).map(key => (
               <SocialIcon key={key} type={key} href={config.common.socials[key]} />
             ))}
           </div>
        </header>

        <div className="sticky top-0 z-30 bg-stone-50/90 backdrop-blur-md border-y border-stone-200 py-3 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide pb-2 md:pb-0">
             {categories.map(cat => (
               <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase whitespace-nowrap ${activeCategory === cat ? 'bg-orange-600 text-white' : 'bg-white text-stone-500 hover:text-orange-600'}`}>{cat}</button>
             ))}
           </div>
           <div className="flex items-center bg-white p-1 rounded border border-stone-200">
              {[2,3,4].map(c => <button key={c} onClick={() => setColumns(c)} className={`p-1.5 rounded ${columns === c ? 'text-orange-600 bg-orange-50' : 'text-stone-300'}`}><LayoutGrid size={16}/></button>)}
           </div>
        </div>

        <main className="px-4 md:px-12 py-10 min-h-[60vh]">
          {/* MASONRY GRID SYSTEM */}
          <div className={`gap-8 space-y-8 columns-1 sm:columns-2 lg:columns-${columns}`}>
             {visibleAlbums.map((album) => (
               <div key={album.id} onClick={() => setSelectedAlbum(album)} className="group break-inside-avoid cursor-pointer mb-8 animate-in fade-in duration-700">
                 <div className="overflow-hidden rounded-sm mb-3 bg-stone-200 relative">
                   <img src={optimizeGoogleDriveLink(album.thumbnail)} alt={album.title} loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"/>
                   <div className="absolute top-2 right-2 bg-black/50 text-white text-[9px] px-2 py-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity">{ui.viewProject}</div>
                 </div>
                 <h3 className="text-lg font-serif text-stone-900 group-hover:text-orange-700 transition-colors leading-tight">{album.title}</h3>
                 <p className="text-[10px] font-sans font-bold tracking-widest text-orange-600 uppercase">{album.category}</p>
               </div>
             ))}
          </div>
          <div className="py-12 text-center text-stone-400">
             <span className="text-[10px] tracking-widest uppercase">{ui.endOf} {activeCategory}</span>
          </div>
        </main>

        <section className="bg-white border-t border-stone-200 py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-serif mb-6 text-stone-900">{content.about.title}</h2>
                <p className="text-lg text-stone-600 font-serif italic" style={getFontStyle('aboutQuote')}>{content.about.quote}</p>
                <p className="mt-4 text-stone-500 font-serif font-light text-sm leading-relaxed" style={getFontStyle('aboutDesc')}>{content.about.description}</p>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-600 mb-4"><Cpu size={16}/> {content.about.techStackTitle}</h3>
                <div className="flex flex-wrap gap-2">{content.about.techStack.map(tk => <span key={tk} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full border">{tk}</span>)}</div>
              </div>
              <div>
                 <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-600 mb-4"><Handshake size={16}/> {content.about.collabTitle}</h3>
                 <p className="text-stone-500 font-serif font-light mb-2">{content.about.collabIntro}</p>
                 <ul className="list-disc list-inside text-stone-600 font-serif text-sm pl-2 space-y-1">{content.about.collabList.map((c, i) => <li key={i}>{c}</li>)}</ul>
              </div>
            </div>
            <div className="space-y-10">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-600 mb-6"><Users size={16}/> {content.about.partnersTitle}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{config.common.partners.map((p, i) => (<div key={i} className="h-16 flex items-center justify-center bg-stone-50 border border-stone-100 text-center p-2 text-xs font-serif font-bold text-stone-400 uppercase">{p}</div>))}</div>
              </div>
              <div className="bg-stone-900 text-white p-8 rounded relative overflow-hidden">
                <Sparkles className="absolute top-0 right-0 p-4 opacity-10" size={100}/>
                <h3 className="text-2xl font-serif mb-6">{content.about.connectTitle}</h3>
                <div className="space-y-4 font-serif font-light text-sm">
                  <div className="flex items-center gap-3"><Mail size={16} className="text-orange-500"/><a href={`mailto:${config.common.contact.email}`}>{config.common.contact.email}</a></div>
                  <div className="flex items-center gap-3"><Phone size={16} className="text-orange-500"/><span>{config.common.contact.phone}</span></div>
                  <div className="flex items-center gap-3"><Facebook size={16} className="text-orange-500"/><a href={config.common.contact.facebookLink} target="_blank" rel="noopener noreferrer">{ui.facebookPage}</a></div>
                </div>
                <button className="mt-8 w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-widest">{content.about.bookBtn}</button>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-stone-950 text-stone-500 py-12 text-center border-t border-stone-900 text-[10px] font-sans tracking-widest uppercase">
          <p className="mb-2">© {new Date().getFullYear()} {config.common.siteName} - {ui.copyright}</p>
          <p className="opacity-50">{ui.designedBy}</p>
        </footer>
      </div>

      {/* MODAL ALBUM */}
      {selectedAlbum && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white animate-in fade-in zoom-in-95 duration-300">
           <div className="flex-none px-6 py-4 border-b flex justify-between items-center bg-white/95 backdrop-blur z-50">
             <button onClick={() => setSelectedAlbum(null)} className="flex items-center gap-2 text-stone-600 hover:text-orange-600 group bg-stone-100 px-4 py-2 rounded-full">
               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform"/> <span className="text-xs font-bold uppercase tracking-widest">{ui.backToGallery}</span>
             </button>
             <div className="text-right hidden sm:block"><h4 className="text-sm font-bold">{selectedAlbum.title}</h4><p className="text-[10px] text-stone-400 uppercase tracking-widest">{selectedAlbum.category}</p></div>
           </div>
           <div className="flex-1 overflow-y-auto bg-stone-50 pt-10">
             {selectedAlbum.embedUrl ? (
               <EmbedAlbumFrame url={selectedAlbum.embedUrl} paddingInfo={selectedAlbum.embedPadding} title={selectedAlbum.embedTitle} siteName={config.common.siteName} />
             ) : (
               <div className="h-[50vh] flex flex-col items-center justify-center text-stone-400"><Sparkles size={48} className="mb-4 opacity-20"/><p className="italic">Nội dung đang cập nhật...</p></div>
             )}
           </div>
        </div>
      )}
    </div>
  );
}

const LOGIC_CODE_TEMPLATE = `${STATIC_LOGIC_CODE}`;
