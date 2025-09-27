import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Image from "next/image";
import BlogData from "@/components/Blog/blogData";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const blogPost = BlogData.find((blog) => blog._id === Number(resolvedParams.id));
  
  if (!blogPost) {
    return {
      title: "Post não encontrado - Elevensoft",
      description: "O post solicitado não foi encontrado.",
    };
  }

  const dateMatch = blogPost.content.match(/Publicado em: (\d{2}\/\d{2}\/\d{4})/);
  const publishedDate = dateMatch ? dateMatch[1] : "2024-01-01";
  
  const [day, month, year] = publishedDate.split('/');
  const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

  const keywords = [
    "soberania digital",
    "segurança de infraestrutura", 
    "controle de acesso",
    "auditoria de sistemas",
    "ESH", "ESUT", "KEYRING", "EL GUARDIAN",
    "plataforma de segurança unificada",
    "infraestrutura crítica",
    "acesso remoto seguro"
  ];

  return {
    title: `${blogPost.title} - Elevensoft Blog`,
    description: blogPost.metadata || `Descubra insights sobre ${blogPost.title} na Elevensoft. Especialistas em Soberania Digital e segurança de infraestrutura crítica.`,
    keywords: keywords.join(", "),
    authors: [{ name: "Elevensoft" }],
    creator: "Elevensoft",
    publisher: "Elevensoft",
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: `https://elevensoft.dev/blog/${resolvedParams.id}`,
      title: blogPost.title,
      description: blogPost.metadata || `Insights sobre ${blogPost.title} da Elevensoft.`,
      siteName: "Elevensoft",
      images: [
        {
          url: `https://elevensoft.dev${blogPost.mainImage}`,
          width: 1200,
          height: 630,
          alt: blogPost.title,
        },
      ],
      publishedTime: isoDate,
      modifiedTime: isoDate,
      authors: ["Elevensoft"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@elevensoft",
      creator: "@elevensoft",
      title: blogPost.title,
      description: blogPost.metadata || `Insights sobre ${blogPost.title} da Elevensoft.`,
      images: [`https://elevensoft.dev${blogPost.mainImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://elevensoft.dev/blog/${resolvedParams.id}`,
    },
  };
}

const SingleBlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  const blogMetadata = BlogData.find((blog) => blog._id === Number(resolvedParams.id));
  // Blog metadata loaded

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div> */}

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden rounded-2xl">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44] overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={blogMetadata?.mainImage || "/images/blog/blog-01.png"}
                      alt={blogMetadata?.title || "Artigo do blog Elevensoft sobre Soberania Digital"}
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    {/* Subtle overlay for modern look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                  </div>
                </div>

                <div
                  dangerouslySetInnerHTML={{
                    __html: blogMetadata?.content ?? "",
                  }}
                ></div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
