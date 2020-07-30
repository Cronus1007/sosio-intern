import React, { Component } from "react";
import _ from "lodash";
class Pagination extends Component {
  state = {
    itemsCount: this.props.itemsCount,
    pageSize: this.props.pageSize,
  };
  render() {
    const pageNumber = this.state.itemsCount / this.state.pageSize;
    if (pageNumber <= 1) return null;
    console.log(pageNumber);
    const pages = _.range(1, pageNumber + 1);
    console.log(pages);
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === this.props.currentPage
                  ? "page-item active"
                  : "page-item"
              }
            >
              <a
                href="www.google.com"
                onClick={() => this.props.onPageChange(page)}
                className="page-link active"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default Pagination;