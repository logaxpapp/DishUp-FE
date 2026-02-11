import React, { JSX } from "react";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  pageSize,
  setPageSize,
  totalItems,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  const renderPageNumbers = () => {
    const pages: JSX.Element[] = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition ${
            i === page
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-6">
      {/* Items per page */}
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <span className="text-sm text-gray-600">Showing</span>
        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          {[9, 25, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span className="text-sm text-gray-600">out of {totalItems}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {renderPageNumbers()}
        {totalPages > 5 && page < totalPages - 2 && (
          <span className="text-gray-600">...</span>
        )}
        {totalPages > 5 && page <= totalPages - 3 && (
          <button
            onClick={() => handlePageChange(totalPages)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
