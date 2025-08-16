"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";

const FeaturesTab = () => {
  return (
    <>
      {/* Features Tab Section */}
      <section className="section-elegant bg-neutral-950">
        <div className="container-elegant">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="title-section text-center">
              Os Pilares da{" "}
              <span className="gradient-text-hero">Soberania Digital</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed text-center">
              Por que montar um exército de mercenários desorganizados quando você pode ter as legiões unificadas e disciplinadas da Elevensoft?
            </p>
          </div>

          {/* Features Tab Grid */}
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-12">
              {featuresTabData.map((feature) => (
                <FeaturesTabItem key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesTab;
