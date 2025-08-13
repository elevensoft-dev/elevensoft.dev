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
        <Link href={`/blog/`} className="relative block w-full h-32">
          <Image src={mainImage} alt={title} fill className="object-contain rounded-t-xl" />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-white duration-300 hover:text-orange-400 transition-colors xl:text-itemtitle2">
            <Link href={`/blog/${blog._id}`}>
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3 text-neutral-300 leading-relaxed">{metadata}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
