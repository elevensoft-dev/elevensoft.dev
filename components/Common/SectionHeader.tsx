"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: "default" | "warning" | "danger" | "success";
  level?: 2 | 3 | 4 | 5 | 6;
}

const SectionHeader = ({ title, subtitle, className = "", variant = "default", level = 2 }: SectionHeaderProps) => {
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

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <div className={`text-center ${className}`}>
      <HeadingTag className={`mb-4 text-3xl font-bold xl:text-sectiontitle2 ${getVariantStyles()}`}>
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="text-lg dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
