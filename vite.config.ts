import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern:
              /^https:\/\/fm-galleria-slideshow-site\.netlify\.app\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 día
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
        additionalManifestEntries: [
          { url: "/assets/starry-night/hero-small.jpg", revision: "1" },
          { url: "/assets/starry-night/hero-large.jpg", revision: "1" },

          {
            url: "/assets/girl-with-pearl-earring/hero-small.jpg",
            revision: "1",
          },
          {
            url: "/assets/girl-with-pearl-earring/hero-large.jpg",
            revision: "1",
          },

          { url: "/assets/guernica/hero-small.jpg", revision: "1" },
          { url: "/assets/guernica/hero-large.jpg", revision: "1" },

          { url: "/assets/penitent-magdalene/hero-small.jpg", revision: "1" },
          { url: "/assets/penitent-magdalene/hero-large.jpg", revision: "1" },

          {
            url: "/assets/the-storm-on-the-sea-of-galilee/hero-small.jpg",
            revision: "1",
          },
          {
            url: "/assets/the-storm-on-the-sea-of-galilee/hero-large.jpg",
            revision: "1",
          },

          {
            url: "/assets/the-great-wave-off-kanagawa/hero-small.jpg",
            revision: "1",
          },
          {
            url: "/assets/the-great-wave-off-kanagawa/hero-large.jpg",
            revision: "1",
          },

          {
            url: "/assets/van-gogh-self-portrait/hero-small.jpg",
            revision: "1",
          },
          {
            url: "/assets/van-gogh-self-portrait/hero-large.jpg",
            revision: "1",
          },

          { url: "/assets/the-sleeping-gypsy/hero-small.jpg", revision: "1" },
          { url: "/assets/the-sleeping-gypsy/hero-large.jpg", revision: "1" },

          { url: "/assets/lady-with-an-ermine/hero-small.jpg", revision: "1" },
          { url: "/assets/lady-with-an-ermine/hero-large.jpg", revision: "1" },

          { url: "/assets/the-night-cafe/hero-small.jpg", revision: "1" },
          { url: "/assets/the-night-cafe/hero-large.jpg", revision: "1" },

          { url: "/assets/the-basket-of-apples/hero-small.jpg", revision: "1" },
          { url: "/assets/the-basket-of-apples/hero-large.jpg", revision: "1" },

          {
            url: "/assets/the-boy-in-the-red-vest/hero-small.jpg",
            revision: "1",
          },
          {
            url: "/assets/the-boy-in-the-red-vest/hero-large.jpg",
            revision: "1",
          },

          { url: "/assets/arnolfini-portrait/hero-small.jpg", revision: "1" },
          { url: "/assets/arnolfini-portrait/hero-large.jpg", revision: "1" },

          { url: "/assets/mona-lisa/hero-small.jpg", revision: "1" },
          { url: "/assets/mona-lisa/hero-large.jpg", revision: "1" },

          { url: "/assets/the-swing/hero-small.jpg", revision: "1" },
          { url: "/assets/the-swing/hero-large.jpg", revision: "1" },
        ],
      },
      manifest: {
        name: "Gallery",
        short_name: "Gallery",
        theme_color: "#ffffff",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
});
