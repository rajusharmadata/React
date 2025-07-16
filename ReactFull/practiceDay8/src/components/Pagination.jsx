import React, { useContext } from 'react';
import { AppContext } from '../context/AppContex';

const Pagination = () => {
  const { totalPages, page ,handlepage} = useContext(AppContext)
  const privesHandler = () => {
    handlepage(page-1)
  }
  const nextpageHandler = () => {
   handlepage(page+1)
  }
  return (
    <div>
      <div className="flex h-15  text-black shadow-2xl shadow-white  px-20 items-center justify-between  border-t border-t-gray-500 fixed absolute bottom-0 w-screen bg-white">
        <div className="flex gap-2">
          {page > 1 && totalPages >= page ? (
            <button
              onClick={privesHandler}
              className="px-3 py-0.5 rounded-sm border border-gray-500"
            >
              prives
            </button>
          ) : null}
          {page >= 1 && totalPages > page ? (
            <button
              onClick={nextpageHandler}
              className="px-3 sm:py-0.5 rounded-sm border border-gray-500"
            >
              next
            </button>
          ) : null}
        </div>
        <div>
          <p className="flex gap-2">
            <span>page {page }</span>
            <span>of {totalPages }</span>
          </p>
        </div>
      </div>
    </div>
  )
};

export default Pagination;
