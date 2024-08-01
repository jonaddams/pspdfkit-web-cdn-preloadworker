"use client";

import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Script from "next/script";

export default function Viewer({ document }) {
  // CDN URL for PSPDFKit for Web
  // could store these in .env. files
  const cdnUrl = "https://cdn.cloud.pspdfkit.com";
  const pspdfkitBaseUrl = `${cdnUrl}/pspdfkit-web@2024.4.0/`;
  const src = `${pspdfkitBaseUrl}pspdfkit.js`;
  ReactDOM.preconnect(cdnUrl);

  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.PSPDFKit) {
      const PSPDFKit = window.PSPDFKit;
      const container = containerRef.current;

      const pspdfkitConfig = {
        container,
        baseUrl: pspdfkitBaseUrl,
        styleSheets: ["/pspdfkit.css"],
      };

      PSPDFKit.unload(container);

      if (!document) {
        console.time("preloadWorker");
        PSPDFKit.preloadWorker(pspdfkitConfig);
        console.timeEnd("preloadWorker");
      } else {
        console.time(document + " loading time");
        PSPDFKit.load({
          ...pspdfkitConfig,
          document: document,
        }).then((instance) => {
          // Use PSPDFKit SDK instance
          // Add event listeners, etc.
          console.timeEnd(document + " loading time");
        });
      }
    }
  }, [document, pspdfkitBaseUrl]);

  return (
    <div>
      <Script src={src} strategy="beforeInteractive" />
      <div ref={containerRef} className="h-screen" />
    </div>
  );
}
