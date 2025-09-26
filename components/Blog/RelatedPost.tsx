import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = async () => {
  return (
    <>
      <div className="card-modern p-9">
        <h4 className="title-feature mb-7.5">
          Posts relacionados
        </h4>

        <div>
          {BlogData.slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="max-w-45 relative h-18 w-45">
                {post.mainImage ? (
                  <Image fill src={post.mainImage} alt={`Imagem do artigo relacionado: ${post.title}`} className="object-contain" />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-white transition-all duration-300 hover:text-orange-400">
                <Link href={`/blog/${post?._id}`}>
                  {" "}
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
