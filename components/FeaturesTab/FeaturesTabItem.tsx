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
        <div className="group relative overflow-hidden rounded-lg bg-neutral-900 border border-neutral-700 shadow-lg">
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
            <p className="text-neutral-300 mb-6">
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
              href={link}
              className="inline-flex items-center justify-center rounded-md bg-orange-400 px-6 py-2 text-black font-medium hover:bg-orange-500 transition-colors"
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
