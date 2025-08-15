import Image from "next/image";
import { FeatureTab } from "@/types/featureTab";

interface FeaturesTabItemProps {
  feature: FeatureTab;
}

const FeaturesTabItem = ({ feature }: FeaturesTabItemProps) => {
  const { title, subtitle, description, features, image, link } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="group relative overflow-hidden rounded-xl card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
          <div className="relative aspect-[370/278] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <h4 className="text-lg font-semibold text-orange-400 mb-3">
              {subtitle}
            </h4>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              {description}
            </p>
            
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-neutral-300">
                  <span className="mr-2 text-green-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={feature.title === "ESH" ? "https://esh.elevensoft.dev/" : feature.link}
              target={feature.title === "ESH" ? "_blank" : "_self"}
              rel={feature.title === "ESH" ? "noopener noreferrer" : ""}
              className="inline-flex items-center justify-center rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 px-6 py-2 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTabItem;
