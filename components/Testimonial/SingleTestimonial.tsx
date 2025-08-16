import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="card-modern p-9 pt-7.5 hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
      <div className="mb-7.5 flex justify-between border-b border-neutral-800/50 pb-6">
        <div>
          <h3 className="title-feature mb-1.5">
            {name}
          </h3>
          <p className="text-neutral-300">{designation}</p>
        </div>
        <Image width={60} height={50} className="rounded-lg" src={image} alt={name} />
      </div>

      <p className="text-neutral-300 leading-relaxed">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
