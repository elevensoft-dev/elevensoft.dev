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
      <section className="py-20 lg:py-25 xl:py-30 dark:bg-neutral-950 light:bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl mb-6">
              Blog da{" "}
              <span className="gradient-text-primary">
                Soberania Digital
              </span>
            </h1>
            <p className="text-xl dark:text-neutral-300 light:text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              Insights, tendências e estratégias para recuperar o controle total da sua infraestrutura
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
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
