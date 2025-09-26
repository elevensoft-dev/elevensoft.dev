import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Elevensoft",
  description: "Notícias, tendências e insights sobre Soberania Digital da Elevensoft",
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 dark:bg-neutral-950 light:bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Blog da{" "}
              <span className="gradient-text-primary">
                Soberania Digital
              </span>
            </h1>
            <p className="text-lg sm:text-xl dark:text-neutral-300 light:text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              Insights, tendências e estratégias para recuperar o controle total da sua infraestrutura
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
