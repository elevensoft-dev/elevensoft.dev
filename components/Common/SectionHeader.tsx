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
        return "text-orange-600 dark:text-orange-400";
      case "danger":
        return "text-red-600 dark:text-red-400";
      case "success":
        return "text-green-600 dark:text-green-400";
      default:
        return "text-black dark:text-white";
    }
  };

  return (
    <div className={`text-center ${className}`}>
      <h2 className={`mb-4 text-3xl font-bold xl:text-sectiontitle2 ${getVariantStyles()}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-body-color dark:text-body-color-dark">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
