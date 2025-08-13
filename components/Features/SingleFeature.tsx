import { Feature } from "@/types/feature";

interface SingleFeatureProps {
  feature: Feature;
}

const SingleFeature = ({ feature }: SingleFeatureProps) => {
  const { icon, title, description } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-xl bg-neutral-800/50 backdrop-blur-sm text-4xl border border-neutral-700/50 hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-white">
          {title}
        </h3>
        <p className="text-neutral-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
