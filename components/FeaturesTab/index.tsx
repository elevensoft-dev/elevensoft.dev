"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";

const FeaturesTab = () => {
  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            title="Os Pilares da Soberania Digital"
            subtitle="Por que montar um exército de mercenários desorganizados quando você pode ter as legiões unificadas e disciplinadas da Elevensoft?"
            className="mb-15"
          />
          {/* <!-- Section Title End --> */}

          {/* <!-- Features Tab Start --> */}
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-12">
              {featuresTabData.map((feature) => (
                <FeaturesTabItem key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
          {/* <!-- Features Tab End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;
