import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

function pageHref(basePath: string, page: number) {
  return page <= 1 ? basePath : `${basePath}?page=${page}`;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath = "/hospital",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-2 mt-12"
      aria-label="Pagination"
    >
      <Link
        href={pageHref(basePath, currentPage - 1)}
        aria-disabled={currentPage <= 1}
        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
          currentPage <= 1
            ? "pointer-events-none opacity-40 border-gray-200 text-gray-400"
            : "border-gray-200 text-gray-700 hover:border-[#56DDEF] hover:text-[#56DDEF]"
        }`}
      >
        Previous
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={pageHref(basePath, page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`min-w-10 px-3 py-2 rounded-lg text-sm font-medium border transition-colors text-center ${
            page === currentPage
              ? "bg-[#56DDEF] border-[#56DDEF] text-white"
              : "border-gray-200 text-gray-700 hover:border-[#56DDEF] hover:text-[#56DDEF]"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={pageHref(basePath, currentPage + 1)}
        aria-disabled={currentPage >= totalPages}
        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
          currentPage >= totalPages
            ? "pointer-events-none opacity-40 border-gray-200 text-gray-400"
            : "border-gray-200 text-gray-700 hover:border-[#56DDEF] hover:text-[#56DDEF]"
        }`}
      >
        Next
      </Link>
    </nav>
  );
}
