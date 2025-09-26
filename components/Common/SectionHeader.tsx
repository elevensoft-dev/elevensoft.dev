"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: "default" | "warning" | "danger" | "success";
}

const SectionHeader = ({ title, subtitle, className = "", variant = "default" }: SectionHeaderProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "warning":
        return "text-orange-400";
      case "danger":
        return "text-orange-400";
      case "success":
        return "text-green-400";
      default:
        return "dark:text-white light:text-neutral-900";
    }
  };

  return (
    <div className={`text-center ${className}`}>
      <h2 className={`mb-4 text-3xl font-bold xl:text-sectiontitle2 ${getVariantStyles()}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
