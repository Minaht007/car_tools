"use client"

export const GA_TRACKING_ID = "G-Q2DR93620Q";

// export const pageview = (url: string) => {
//   window.gtag("config", GA_TRACKING_ID, {
//     page_path: url,
//   });
// };

export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
