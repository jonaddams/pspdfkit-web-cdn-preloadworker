"use client";
import Viewer from "./viewer";
import { useState, useEffect } from "react";

export default function Home() {
  const [pdf, setPdf] = useState(null);
  const borderColor = "#c1c4c8"; // gray-ish

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
              Danish Magazine (12.9MB)
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
              onClick={() => setPdf("./SampleDocs-sales-sample-data.docx")}
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
              onClick={() => setPdf("./SampleXLSFile_1736kb.xls")}
            >
              Excel Document (1.8MB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./SampleDocs-Superstore Data.xls")}
            >
              Excel Document (3.4MB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./SampleXLSFile_6800kb.xls")}
            >
              Excel Document (7MB)
            </button>
            <button
              className="block py-2 px-3 bg-sky-500/100 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              onClick={() => setPdf("./sampledocs-50mb-xls-file.xls")}
            >
              Excel Document (52.2MB)
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
