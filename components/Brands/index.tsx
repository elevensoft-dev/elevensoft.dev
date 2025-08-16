"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* Clients Section */}
      <section className="border border-x-0 border-y-neutral-800/50 bg-neutral-950 py-11">
        <div className="container-elegant">
          <div className="grid grid-cols-3 items-center justify-center gap-8 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
