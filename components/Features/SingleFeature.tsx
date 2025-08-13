import { Feature } from "@/types/feature";

interface SingleFeatureProps {
  feature: Feature;
}

const SingleFeature = ({ feature }: SingleFeatureProps) => {
  const { icon, title, description } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-neutral-800 text-4xl border border-neutral-700">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-white">
          {title}
        </h3>
        <p className="text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
