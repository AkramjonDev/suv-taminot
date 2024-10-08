import React from "react";
import documents from "../../data/documents";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons";

const Downloads = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sertifikatlar & Hujjatlar</h1>
      <ul className="space-y-4">
        {documents.map((document, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{document.name}</h2>
              <p className="text-gray-600">{document.description}</p>
              <FontAwesomeIcon icon={faDocker} />
            </div>
            <Link
              href={document.url}
              download
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Yuklab olish
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Downloads;
