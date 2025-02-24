"use client";
import Viewer from "./viewer";
import { useState, useEffect } from "react";
import HyperDX from "@hyperdx/browser";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  const [pdf, setPdf] = useState(null);
  const borderColor = "#c1c4c8"; // gray-ish

  HyperDX.init({
    apiKey: "1ece8908-dc30-4cd6-b822-69f89a0106c6",
    service: "PSPDFKit Web Best Practices",
    tracePropagationTargets: ["pspdfkit-web-cdn-preloadworker.vercel.app"], // [/api.myapp.domain/i], Set to link traces from frontend to backend requests
    consoleCapture: true, // Capture console logs (default false)
    advancedNetworkCapture: true, // Capture full HTTP request/response headers and bodies (default false)
  });

  // Import your ErrorBoundary (we're using react-error-boundary as an example)
  // This will hook into the ErrorBoundary component and capture any errors that occur
  // within any instance of it.
  HyperDX.attachToReactErrorBoundary(ErrorBoundary);

  return (
    <div>
      <div className="m-4 grid grid-cols-12">
        <div className={`min-h-fit col-span-2 border-2 border-[${borderColor}]`}>
          <div className="p-4 grid grid-cols-1 gap-4">
            <h3 className="text-lg font-semibold">Click to Load Documents</h3>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./work-order-form.pdf")}
            >
              Work Order Form (83KB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./quick-start-guide.pdf")}
            >
              Quick Start Guide (185KB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./danish-magazine.pdf")}
            >
              PDF/UA Danish Magazine (12.9MB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./pdf-reference.pdf")}
            >
              PDF Reference (32.5MB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./sample3.docx")}
            >
              Word Document (34KB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./sales-sample-data.docx")}
            >
              Word Document (2.3MB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./sample4.docx")}
            >
              Word Document (14.2MB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./0001000-sales-records.xlsx")}
            >
              1,000 Sales Records - xls (91KB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./0010000-sales-records.xlsx")}
            >
              10,000 Sales Records - xls (849KB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./0100000-sales-records.xlsx")}
            >
              100,000 Sales Records - xls (8.4MB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./1000000-sales-records.xlsx")}
            >
              1,000,000 Sales Records - xls (82.2MB)
            </button>
          </div>
        </div>
        <div className="min-h-fit col-span-10 border-2 border-[#c1c4c8] border-l-0">
          <Viewer document={pdf} />
        </div>
      </div>
    </div>
  );
}
