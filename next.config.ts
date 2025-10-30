import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["fr", "en", "ar"],
    defaultLocale: "fr",
    localeDetection: true,
  },
};

export default nextConfig;
