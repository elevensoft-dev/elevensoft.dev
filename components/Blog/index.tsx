import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = async () => {
  return (
    <section className="section-elegant dark:bg-neutral-950 light:bg-neutral-50">
      <div className="container-elegant">
        {/* Section Title */}
        <div className="mx-auto text-center mb-16">
          <h2 className="title-section text-center">
            <span className="gradient-text-hero">Notícias & Blog</span>
          </h2>
          <p className="text-xl dark:text-neutral-300 light:text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Posts e novidades sobre segurança digital e soberania tecnológica
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {BlogData.slice(0, 3).map((blog, key) => (
              <BlogItem blog={blog} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
