"use client";
import React from "react";
import Image from "next/image";

interface PreferencesSectionProps {
  imagePosition?: "left" | "right";
  title: string;
  subtitle: string;
  imageSrc: string;
}

const PreferencesSection: React.FC<PreferencesSectionProps> = ({
  imagePosition = "right",
  title,
  subtitle,
  imageSrc,
}) => {
  return (
    <section className="w-full py-2 md:py-5 px-2 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${
            imagePosition === "left"
              ? "lg:flex-row-reverse"
              : "lg:flex-row"
          } items-center gap-12 lg:gap-20`}
        >
          <div className="flex-1 flex items-start justify-start">
  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-10">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-tight mb-4">
      {title}
    </h2>

    <p className="text-lg md:text-lg text-gray-600 leading-relaxed max-w-md">
      {subtitle}
    </p>
  </div>
</div>

         <div className="flex-1 w-full lg:max-w-none flex justify-center">
          <div className="relative w-full max-w-xl">

    
              <Image
                src={imageSrc}
                alt="Section Illustration"
                width={300}
                height={300}
                className="w-full h-auto select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PreferencesSection;
