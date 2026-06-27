import React from "react";

interface LegalPageLayoutProps {
  title: string;
  updatedOn?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, updatedOn, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80 py-10 lg:py-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <header className="mb-10 pb-6 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
            {updatedOn && (
              <p className="mt-3 text-sm text-gray-500">Updated On {updatedOn}</p>
            )}
          </header>
          <div className="legal-content space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
            {children}
          </div>
        </article>
      </main>
    </div>
  );
}
