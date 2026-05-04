import React from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

const groomImages = [
  { url: "/images/groom/groom1.jpg", caption: "The Groom" },
  { url: "/images/groom/groom2.jpg", caption: "Haldi Celebrations" },
  { url: "/images/groom/groom3.jpg", caption: "Haldi Swag" },
];

const brideImages = [
  { url: "/images/bride/bride1.jpg", caption: "Golden Blessings", position: "object-center" },
  { url: "/images/bride/bride2.jpg", caption: "Mehendi Swag", position: "object-top" },
  { url: "/images/bride/bride3.jpg", caption: "Bridal Grace", position: "object-top" },
];

const coupleImages = [
  { url: "/images/couple/couple1.png", caption: "Vintage Love" },
  { url: "/images/couple/couple2.jpg", caption: "The Sacred Bond" },
  { url: "/images/couple/couple3.jpg", caption: "Together Forever" },
];

const ImageCard = ({ image, direction = "up", index }) => {
  const getInitial = () => {
    if (direction === "left") return { opacity: 0, x: -60, scale: 0.95 };
    if (direction === "right") return { opacity: 0, x: 60, scale: 0.95 };
    return { opacity: 0, y: 60, scale: 0.95 };
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="group w-full"
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
        {/* Soft border glow */}
        <div className="absolute -inset-px bg-gradient-to-br from-primary/30 via-primary/5 to-primary/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative m-[1px] rounded-xl overflow-hidden bg-background">
          <motion.img
            src={image.url}
            alt={image.caption}
            className={`w-full h-64 md:h-80 object-cover ${image.position || 'object-center'}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function GallerySection() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-[#FFFDD0]/5">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cormorant text-primary/80 text-xs md:text-sm tracking-[0.4em] uppercase mb-3">
            Memories Gallery
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-4">
            A Journey of Love
          </h2>
          <SectionDivider />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
          {/* Groom's Memories - order-2 on mobile so Bride is on top */}
          <div className="flex flex-col items-center space-y-8 order-2 md:order-1">
            <div className="w-full space-y-8">
              {groomImages.map((img, idx) => (
                <ImageCard key={`groom-${idx}`} image={img} direction="left" index={idx} />
              ))}
            </div>
          </div>

          {/* Bride's Memories - order-1 on mobile so Bride is on top */}
          <div className="flex flex-col items-center space-y-8 order-1 md:order-2">
            <div className="w-full space-y-8">
              {brideImages.map((img, idx) => (
                <ImageCard key={`bride-${idx}`} image={img} direction="right" index={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Together Section */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="font-playfair text-3xl md:text-4xl text-primary mb-2">
              Our Beautiful Moments
            </h3>
            <div className="h-0.5 w-24 bg-primary/30 mx-auto rounded-full mt-4" />
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
            {coupleImages.map((img, idx) => (
              <div key={`couple-${idx}`} className={coupleImages.length % 2 !== 0 && idx === coupleImages.length - 1 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto w-full' : 'w-full'}>
                <ImageCard image={img} direction="up" index={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}