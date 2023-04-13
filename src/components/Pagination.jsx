import React, { useState } from "react";

function Pagination({ page, setPage, dataLength, pokemonPerPage, data }) {
  const [thisPage, setThisPage] = useState(1);
  let pageNumbers = [];

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page >= 1 && page < dataLength / pokemonPerPage) {
      setPage(page + 1);
    }
  };

  for (let i = 0; i <= dataLength / pokemonPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-[#1F1F1F] p-4 flex justify-between">
      <div className="flex flex-nowrap gap-2 w-[10rem] overflow-clip">
        {pageNumbers.map((pageNumber, index) => (
          <button
            onClick={() => setPage(index + 1)}
            key={index}
            className="text-[white] px-3 rounded-lg font-medium bg-[#2D2F36] hover:bg-[#575b68] transition-all ease-in-out active:scale-110"
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          className="py-1 px-3 bg-[#2D2F36] text-[white] rounded-lg hover:bg-[#575b68] transition-all ease-in-out active:scale-110"
          onClick={prevPage}
        >
          Prev
        </button>
        <button
          className="py-1 px-3 bg-[#2D2F36] text-[white] rounded-lg hover:bg-[#575b68] transition-all ease-in-out active:scale-110"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
