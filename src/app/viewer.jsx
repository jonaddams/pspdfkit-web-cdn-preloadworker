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
        licenseKey:
          "sdERXsKZP49pNIWD061LXpZFWHJVkjmffvHHNDb-ruCYovkLg7irqylmzYpLB5fmPM8wVXOnQPRWG-TNUhMrNbaJ1bhYF4WeY2vv7MqmWZkf_k_taO-Vf_S4E5LVIU7b23OMZWGIO0nIiTzmtLSemMZwjnyAdDx2itDmaVzFSXQy0UHu4IfZK-xPBAIGuIkTFgsnlIOdb6Vk0hXo8kzkwilCyHrZegVgRPBsU7gVWlCRxhRUIB-TuWns8EL6jRknEmTVyXCdCNt6pEsONRbvuBMzzXzqwFY8JImuhcfrBEsiVkQToevRDtYps58bQUNVp101OEfa_hMtkgvyeWEDAFd9BWuh9Aqly0KOae3mYkRDbvdX2r4GwTWYY8FqG2oZXryGU3aJD3_KMrOooo-d0nEfP1-7BU0AJl_XY0_00vd5VadhxPSKC8lhW-ADdLNLY4DqG4g6pcMc47y_g0TbUGa_GO6po6SOcs4HgzSeQvqFPvhCTrstuTSpr4GTPDJRlIVf32M_bn0P51DixISn5jqX_D-umIAlmf7Nmo0xZNAQbnaSh57cg-Dp70PfqvFWh5nQb3o1pCK73QbGlx_2MOGDUjQg_DmCzr0iCUSJRzCiOosi6rk43oruoa_3dj2KfcEstS93S4X9I6E2cG3iGeJUj3FdAbQ4Cm7t_UwRx5xntUcn40G6luXPuz5-VDapnSOwGqYgj6F6C3BiMziFFHJzJmcz0Xd_me3C-3W3voRrS9_krs3VP_Mf4zU8tsMeGW0VTOucEIaEWq2-OR31YuzaRE_u_lo2i2xm2Pt1W9xgj3SRFBu-NQG9fXas-6iAtnJg4aoYpl5y1uBOLbTmugt-L6ruxkALnZGdz0TnlJ95Hts8mZcqB5Kp6GFtNvXOKqE6IZuIXeUN1fg3qG1Plg==",
        styleSheets: ["/pspdfkit.css"],
        ProcessorEngine: "fasterProcessing",
        // https://pspdfkit.com/api/web/PSPDFKit.html#.ProcessorEngine
      };

      const officeExtensions = ["doc", "docx", "xls", "xlsx", "ppt", "pptx"];

      PSPDFKit.unload(container);

      if (!document) {
        console.time("preloadWorker");
        PSPDFKit.preloadWorker(pspdfkitConfig);
        console.timeEnd("preloadWorker");
      } else {
        const extension = document.split(".").pop();
        // if (officeExtensions.includes(extension)) {
        //   console.time(document + " conversion time");
        //   // explicitly convert the Office document to PDF for better performance
        //   // https://pspdfkit.com/api/web/PSPDFKit.html#.convertToPDF
        //   PSPDFKit.convertToPDF(
        //     {
        //       ...pspdfkitConfig,
        //       document: document,
        //     },
        //     PSPDFKit.Conformance.PDFA_1A
        //   )
        //     .then((arrayBuffer) => {
        //       console.time(document + " loading time");

        //       PSPDFKit.load({
        //         ...pspdfkitConfig,
        //         document: arrayBuffer,
        //       }).then((instance) => {
        //         // Use PSPDFKit SDK instance
        //         // Add event listeners, etc.
        //         console.timeEnd(document + " loading time");
        //       });
        //     })
        //     .catch((error) => {
        //       console.error(error.message);
        //     });
        //   console.timeEnd(document + " conversion time");
        // } else {
        console.time(document + " loading time");
        PSPDFKit.load({
          ...pspdfkitConfig,
          document: document,
        }).then((instance) => {
          // Use PSPDFKit SDK instance
          // Add event listeners, etc.
          console.timeEnd(document + " loading time");
        });
        // }
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
