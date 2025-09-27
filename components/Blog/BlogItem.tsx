"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-xl card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300"
      >
        <Link href={`/blog/${blog._id}`} className="relative block w-full h-48 sm:h-52 lg:h-56 overflow-hidden rounded-t-xl">
          <Image 
            src={mainImage} 
            alt={`Imagem do artigo: ${title}`} 
            fill 
            className="object-cover transition-transform duration-500 hover:scale-105" 
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </Link>

        <div className="px-4">
          <h3 className="title-feature mb-3.5 mt-7.5 line-clamp-2 inline-block duration-300 hover:text-orange-400 transition-colors">
            <Link href={`/blog/${blog._id}`}>
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">{metadata}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
