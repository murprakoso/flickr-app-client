import React from "react";
import ReactPaginate from "react-paginate";

const ReactPaginateComponent = ({ ...props }) => {
  return (
    <>
      <div className="mt-4">
        <ReactPaginate
          {...props}
          // pageCount={data.total}
          // onPageChange={handlePageClick}
          // forcePage={pageNumber}
          pageRangeDisplayed={10}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          breakLinkClassName="page-link"
          previousLabel={`«`}
          nextLabel={`»`}
        />
      </div>
    </>
  );
};

export default ReactPaginateComponent;
