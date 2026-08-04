import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Server, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const CLIENT_WORKS = [
  {
    id: '01',
    title: 'Green Apple Realty',
    category: 'Client Website',
    categoryType: 'website',
    url: 'https://greenapplerealty.in/',
    subtitle: 'Real Estate Platform',
    image: '/assets/Client-works/greenapple.jpg',
  },
  {
    id: '02',
    title: 'RR Bike Rental',
    category: 'Custom Software & Admin Panel',
    categoryType: 'software',
    url: 'https://rrbikerental.com/',
    subtitle: 'Fleet & Rental Management',
    image: '/assets/Client-works/rrbikerental.png',
  },
  {
    id: '03',
    title: "D'Chica Store",
    category: 'Shopify Store',
    categoryType: 'shopify',
    url: 'https://www.dchica.in/',
    subtitle: 'Teen Apparel & Fashion Brand',
    image: '/assets/Client-works/dchica.png',
  },
  {
    id: '04',
    title: 'CRM Rajyatayat',
    category: 'Custom Software & Admin Panel',
    categoryType: 'software',
    url: 'https://crmrajyatayat.vtsinfinite.com/',
    subtitle: 'Logistics CRM & Admin Suite',
    image: '/assets/Client-works/rajyatayat.png',
  },
  {
    id: '05',
    title: 'Baazar Kolkata',
    category: 'Client Website',
    categoryType: 'website',
    url: 'https://baazarkolkata.com/',
    subtitle: 'Retail & E-Commerce Chain',
    image: '/assets/Client-works/baazarkolkata.jpg',
  },
  {
    id: '06',
    title: 'Zedd Enterprise System',
    category: 'Custom Software & Admin Panel',
    categoryType: 'software',
    url: 'https://zedd.vtsinfinite.com/',
    subtitle: 'Operations ERP Platform',
    image: '/assets/Client-works/zedd.png',
  },
  {
    id: '07',
    title: 'Shivara Jewels',
    category: 'Shopify Store',
    categoryType: 'shopify',
    url: 'https://shivarajewels.in/',
    subtitle: 'Fine Jewelry Storefront',
    image: '/assets/Client-works/shivara.png',
  },
  {
    id: '08',
    title: 'Tower Infrastructure',
    category: 'Custom Software & Admin Panel',
    categoryType: 'software',
    url: 'https://tower.vtsinfinite.com/',
    subtitle: 'Telemetry & Billing Admin',
    image: '/assets/Client-works/tower.png',
  },
  {
    id: '09',
    title: 'Primarc Advika',
    category: 'Client Website',
    categoryType: 'website',
    url: 'https://primarcaadvika.com',
    subtitle: 'Luxury Housing Showcase',
    image: '/assets/Client-works/primarc.jpg',
  },
  {
    id: '10',
    title: 'Asana Furniture Portal',
    category: 'Custom Software & Admin Panel',
    categoryType: 'software',
    url: 'https://asanafurniture.com/',
    subtitle: 'Order Pipeline & Inventory Admin',
    image: '/assets/Client-works/asana.png',
  },
  {
    id: '11',
    title: 'Awenest',
    category: 'Shopify Store',
    categoryType: 'shopify',
    url: 'https://awenest.in/',
    subtitle: 'Eco-Friendly Lifestyle Store',
    image: '/assets/Client-works/awenest.png',
  },
  {
    id: '12',
    title: 'Divine Resort Kolkata',
    category: 'Client Website',
    categoryType: 'website',
    url: 'https://divineresortkol.com/',
    subtitle: 'Resort & Hospitality Portal',
    image: '/assets/Client-works/divine.png',
  },
  {
    id: '13',
    title: 'Dr. Relaxo',
    category: 'Shopify Store',
    categoryType: 'shopify',
    url: 'https://drrelaxo.in/',
    subtitle: 'Footwear & Wellness Brand',
    image: '/assets/Client-works/drrelaxo.png',
  },
  {
    id: '14',
    title: 'JHR Groups',
    category: 'Client Website',
    categoryType: 'website',
    url: 'https://jhrgroups.in/',
    subtitle: 'Corporate Enterprise Portal',
    image: '/assets/Client-works/jhr.png',
  },
  {
    id: '15',
    title: 'Fashion City',
    category: 'Client Website',
    categoryType: 'website',
    url: 'https://fashioncity.in/',
    subtitle: 'Apparel Storefront',
    image: '/assets/Client-works/fashioncity.jpg',
  },
  {
    id: '16',
    title: 'Oviyas Global',
    category: 'Shopify Store',
    categoryType: 'shopify',
    url: 'https://oviyasglobal.com/',
    subtitle: 'International E-Commerce Brand',
    image: '/assets/Client-works/oviyas.png',
  },
  {
    id: '17',
    title: 'Jhanak Dance Academy',
    category: 'Client Website',
    categoryType: 'website',
    url: 'https://jhanakdanceacademy.com/',
    subtitle: 'Arts & Event Platform',
    image: '/assets/Client-works/jhanak.png',
  },
  {
    id: '18',
    title: 'Falguni Paints',
    category: 'Client Website',
    categoryType: 'website',
    url: 'https://falgunipaints.com/',
    subtitle: 'Paint Brand Catalog',
    image: '/assets/Client-works/falgunipaints.png',
  },
  {
    id: '19',
    title: 'Mado Bazaar',
    category: 'Client Website',
    categoryType: 'website',
    url: 'https://madobazaar.co.in/',
    subtitle: 'Hyperlocal E-Commerce',
    image: '/assets/Client-works/madobazaar.png',
  },
  {
    id: '20',
    title: 'Fullfilled4u',
    category: 'Client Website',
    categoryType: 'website',
    url: 'https://fullfilled4u.in/',
    subtitle: 'Lifestyle & Gift Store',
    image: '/assets/Client-works/fullfilled4u.png',
  },
];

export default function MyWorkSection() {
  const [filter, setFilter] = useState('all');
  const scrollContainerRef = useRef(null);

  const filteredWorks = CLIENT_WORKS.filter((work) => {
    if (filter === 'website') return work.categoryType === 'website';
    if (filter === 'shopify') return work.categoryType === 'shopify';
    if (filter === 'software') return work.categoryType === 'software';
    return true;
  });

  // Convert mouse wheel vertical scroll into smooth horizontal scroll when scrolling over the carousel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // Check if horizontal scroll is possible
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      const isAtStart = container.scrollLeft <= 0 && e.deltaY < 0;
      const isAtEnd = container.scrollLeft >= maxScroll - 5 && e.deltaY > 0;

      // Smoothly scroll horizontally if within boundaries
      if (!isAtStart && !isAtEnd) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY * 1.5,
          behavior: 'smooth',
        });
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [filteredWorks]);

  // Arrow button click handler
  const scrollManual = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="my-work" className="relative flex items-center justify-center py-12 sm:py-16 px-6">
      <div className="w-[90%] mx-auto space-y-8">
        {/* Header & Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-5"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold glass-panel border border-[#10B981]/40 text-[#10B981]">
              <Globe className="w-3.5 h-3.5" />
              <span>Zone 04 — Production Client Platforms</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              My <span className="gradient-text-cyan">Work</span>
            </h2>
          </div>

          {/* Filter Tabs & Nav Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 w-full md:w-auto">
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-white/10 text-xs font-semibold overflow-x-auto max-w-full scrollbar-none whitespace-nowrap">
              {[
                { id: 'all', label: `All (${CLIENT_WORKS.length})` },
                { id: 'website', label: 'Websites (10)' },
                { id: 'shopify', label: 'Shopify (5)' },
                { id: 'software', label: 'Software (5)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                    filter === tab.id
                      ? 'bg-[#10B981] text-slate-950 font-extrabold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Slider Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollManual('left')}
                className="p-3 rounded-2xl glass-panel text-white hover:text-[#10B981] hover:border-[#10B981]/50 transition-all cursor-pointer active:scale-95 shadow-md"
                title="Scroll Left"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollManual('right')}
                className="p-3 rounded-2xl glass-panel text-white hover:text-[#10B981] hover:border-[#10B981]/50 transition-all cursor-pointer active:scale-95 shadow-md"
                title="Scroll Right"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Silky Smooth Native Wheel & Button Scrollable Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none py-3 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredWorks.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start glass-panel p-4 rounded-3xl border border-white/10 hover:border-[#10B981]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-3">
                {/* Image Frame with Direct Link */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block relative w-full h-56 sm:h-60 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group-hover:border-[#10B981]/50 transition-all cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge Top Left */}
                  <div className="absolute top-3 left-3">
                    {item.categoryType === 'software' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-600 text-slate-950 shadow-md">
                        <Server className="w-3 h-3" />
                        Software
                      </span>
                    ) : item.categoryType === 'shopify' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-teal-400 text-slate-950 shadow-md">
                        <ShoppingBag className="w-3 h-3" />
                        Shopify
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#10B981] text-slate-950 shadow-md">
                        <Globe className="w-3 h-3" />
                        Website
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle Overlay Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                    <h3 className="text-base font-extrabold text-white group-hover:text-[#10B981] transition-colors truncate">
                      {item.title}
                    </h3>
                  </div>
                </a>
              </div>

              {/* Direct Website Link Button */}
              <div className="pt-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#10B981] via-[#34d399] to-[#059669] text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#10B981]/30 transition-all"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
