import { Feature } from "@/types/feature";

interface SingleFeatureProps {
  feature: Feature;
}

const SingleFeature = ({ feature }: SingleFeatureProps) => {
  const { icon, title, description } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-xl dark:bg-neutral-800/50 light:bg-neutral-100/50 backdrop-blur-sm text-4xl dark:border-neutral-700/50 light:border-neutral-300/50 border hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold dark:text-white light:text-neutral-900">
          {title}
        </h3>
        <p className="dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
