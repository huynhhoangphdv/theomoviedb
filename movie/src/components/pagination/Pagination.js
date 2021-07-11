import React from 'react';
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const Pa = ({pageSize, updatePage, currentPage, totalResults}) =>
    <Pagination class={"d-flex justify-content-center offset-md-3 my-3"} className="pagination_center"
        pageSize={pageSize}
        onChange={updatePage}
        current={currentPage}
        total={totalResults}
    />
export default Pa