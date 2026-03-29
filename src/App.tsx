/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Sun, 
  BookOpen, 
  Users, 
  Palette, 
  User, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight,
  Play,
  Download,
  Calendar,
  Instagram,
  Mail
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "每日光语", id: "daily-light" },
    { name: "能量课程", id: "courses" },
    { name: "共读时光", id: "reading" },
    { name: "能量社群", id: "community" },
    { name: "创作馆", id: "gallery" },
    { name: "关于我", id: "about" },
    { name: "连接我", id: "connect" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-serif font-bold tracking-widest text-accent-gold"
        >
          启慧·爱的能量屋
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="text-sm font-medium text-soft-black hover:text-accent-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-soft-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center space-y-4 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-soft-black hover:text-accent-gold"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-soft-white to-white">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-gold/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-accent-gold font-serif italic text-2xl mb-4"
      >
        你好，宇宙伙伴
      </motion.h2>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl font-serif text-soft-black leading-tight mb-8"
      >
        一起活出爱与自由、<br />喜乐与富足
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-soft-gray text-lg md:text-xl max-w-2xl mx-auto mb-12"
      >
        我是启慧，中国美院艺术史论专业｜爱的能量屋理事长｜光的创造者 · 生活美学家。用喜欢的方式度过这一生。
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a href="#daily-light" className="btn-gold-fill">每日光语</a>
        <a href="#connect" className="btn-gold">连接我</a>
      </motion.div>
    </div>
  </section>
);

const DailyLight = () => {
  const quotes = [
    { date: "2026.03.29", title: "今日光语", content: "爱自己是一切治愈的开始。当你开始温柔地对待自己，整个世界都会变得柔软。" },
    { date: "2026.03.28", title: "昨日觉察", content: "自由不是随心所欲，而是内心不再有任何束缚。轻盈地生活，本身就是一种艺术。" },
    { date: "2026.03.27", title: "能量记录", content: "每一个当下的喜悦，都是通往未来富足的种子。播种爱，收获光。" },
  ];

  return (
    <section id="daily-light" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif text-accent-gold flex items-center gap-2">
            <Sun className="w-8 h-8" /> 每日光语
          </h2>
          <button className="text-soft-gray hover:text-accent-gold flex items-center gap-1 text-sm">
            <Download className="w-4 h-4" /> 下载月度PDF
          </button>
        </div>
        
        <div className="space-y-12">
          {quotes.map((quote, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-light-gold pl-8 py-2"
            >
              <span className="text-xs font-mono text-soft-gray uppercase tracking-widest">{quote.date}</span>
              <h3 className="text-xl font-serif text-accent-gold mt-1 mb-4">{quote.title}</h3>
              <p className="text-soft-black text-lg leading-relaxed italic">"{quote.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    { title: "沟通与表达系列", price: "5999", desc: "500强企业讲师亲自授课，探索深度连接的艺术。", tag: "热门" },
    { title: "认识自己与他人", price: "5999", desc: "从艺术史论到心理觉察，找回内在的宁静与力量。", tag: "新课" },
  ];

  return (
    <section id="courses" className="py-24 px-6 bg-soft-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-accent-gold mb-12 text-center">能量课程</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-accent-gold text-white px-4 py-1 text-xs rounded-bl-xl">
                {course.tag}
              </div>
              <h3 className="text-2xl font-serif mb-4">{course.title}</h3>
              <p className="text-soft-gray mb-6">{course.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif text-accent-gold">¥{course.price}</span>
                <button className="btn-gold">立即报名</button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-4 bg-white/50 rounded-full border border-light-gold">
            <Calendar className="text-accent-gold" />
            <span className="text-sm text-soft-black">下期预告：3月31日 线上沟通力工作坊</span>
            <ChevronRight className="w-4 h-4 text-accent-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ReadingTime = () => (
  <section id="reading" className="py-24 px-6 bg-white">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-serif text-accent-gold mb-6 flex items-center gap-2">
          <BookOpen className="w-8 h-8" /> 共读时光
        </h2>
        <p className="text-soft-black text-lg leading-relaxed mb-8">
          两周一期，沉浸式阅读。我们一起研读《通向人生自由之路》与《魔力》，在文字中重获新生。
        </p>
        <div className="bg-light-gold/20 p-6 rounded-2xl border border-light-gold/30 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white">
              <Play className="fill-current" />
            </div>
            <div>
              <h4 className="font-medium">往期音频回顾</h4>
              <p className="text-xs text-soft-gray">《魔力》第12章：感恩的力量</p>
            </div>
          </div>
          <div className="h-1 bg-accent-gold/20 rounded-full overflow-hidden">
            <div className="h-full bg-accent-gold w-1/3" />
          </div>
        </div>
        <button className="btn-gold-fill">加入共读会 (¥99/次)</button>
      </div>
      <div className="flex-1 relative">
        <div className="w-full aspect-[3/4] bg-light-gold rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://picsum.photos/seed/reading/600/800" 
            alt="Reading" 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 glass-card p-4 max-w-[200px]">
          <p className="text-xs italic text-soft-black">"文字是灵魂的呼吸，共读是能量的共振。"</p>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const categories = ["爱自己", "爱他人", "爱世界"];
  const [active, setActive] = useState("爱自己");

  return (
    <section id="gallery" className="py-24 px-6 bg-soft-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-accent-gold mb-12 text-center">创作馆</h2>
        
        <div className="flex justify-center gap-8 mb-16">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActive(cat)}
              className={`pb-2 transition-all ${active === cat ? "text-accent-gold border-b-2 border-accent-gold" : "text-soft-gray"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <motion.div 
              key={i}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-white rounded-2xl overflow-hidden shadow-sm group relative"
            >
              <img 
                src={`https://picsum.photos/seed/${active}-${i}/600/600`} 
                alt="Art" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif">{active} · 作品 {i}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-serif text-accent-gold mb-12">关于我</h2>
      <div className="mb-12">
        <img 
          src="https://picsum.photos/seed/profile/200/200" 
          alt="Profile" 
          className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-light-gold p-1"
          referrerPolicy="no-referrer"
        />
        <p className="text-lg text-soft-black leading-relaxed max-w-2xl mx-auto">
          我是启慧，中国美院艺术史论专业，爱的能量屋理事长，500强企业讲师，光的创造者、生活美学家。曾走出抑郁与暴食，因《通向人生自由之路》《魔力》获得重生，如今希望用自己的力量，陪伴更多人活出爱与自由、喜乐与富足。
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <div className="p-8 bg-light-gold/10 rounded-3xl">
          <h4 className="font-serif text-accent-gold text-xl mb-4">核心信念</h4>
          <p className="text-soft-black italic">"我是无限的，我是神明，神明也是我；快乐是非常重要的；自爱，是一切的开始。"</p>
        </div>
        <div className="p-8 bg-blue-50/30 rounded-3xl">
          <h4 className="font-serif text-accent-gold text-xl mb-4">灵魂底色</h4>
          <p className="text-soft-black italic">"我就是生命，我就是自由本身，我就是智慧。用艺术的眼光看世界，用爱的心灵感受生活。"</p>
        </div>
      </div>
    </div>
  </section>
);

const Connect = () => (
  <section id="connect" className="py-24 px-6 bg-soft-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-serif text-accent-gold mb-8">连接我</h2>
      <p className="text-soft-gray mb-12">在这里，遇见同频的灵魂，一起成长、富足、快乐、自由。</p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
        <div className="glass-card p-6 w-64">
          <div className="aspect-square bg-light-gold/20 rounded-xl mb-4 flex items-center justify-center">
            <Instagram className="w-12 h-12 text-accent-gold" />
          </div>
          <p className="text-sm font-medium">公众号：爱的能量屋</p>
        </div>
        <div className="glass-card p-6 w-64">
          <div className="aspect-square bg-light-gold/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=lovenergyroom" 
              alt="WeChat QR Code" 
              className="w-full h-full object-cover p-2"
            />
          </div>
          <p className="text-sm font-medium">添加微信：lovenergyroom</p>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:text-accent-gold transition-colors"><Mail /></a>
        <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:text-accent-gold transition-colors"><Users /></a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 bg-white border-t border-light-gold/20 text-center">
    <p className="text-xs text-soft-gray tracking-widest uppercase">
      © 2026 启慧·爱的能量屋 | 活出爱与自由
    </p>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DailyLight />
        <Courses />
        <ReadingTime />
        <Gallery />
        <About />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

