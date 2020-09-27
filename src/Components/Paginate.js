import React from "react";
import Paginate from "react-paginate";
import styled from "styled-components";

const PaginateStyle = styled.div`
  margin: 16px -24px 0px -24px;
  overflow-x: auto;

  ul {
    list-style: none;
    margin: 0px auto;
    display: flex;
    padding: 0px;

    li {
      padding: 0px 4px;

      a {
        background-color: rgba(51, 51, 51, 0.05);
        transition: ease all 0.25s;
        justify-content: center;
        color: var(--default);
        align-items: center;
        padding-right: 13px;
        border-radius: 2px;
        padding-left: 13px;
        line-height: 20px;
        font-weight: 700;
        font-size: 12px;
        display: flex;
        outline: none;
        height: 32px;

        &[aria-disabled="true"] {
          &,
          i {
            color: rgba(51, 51, 51, 0.4);
          }
        }
      }

      &.previous,
      &.next {
        a {
          padding: 0px;
          width: 32px;
        }
      }

      &.previous {
        padding-left: 24px;
      }

      &.next {
        padding-right: 24px;
      }

      &.break {
        a {
          padding-bottom: 7px;
        }
      }

      &.selected {
        a {
          /* background-color: var(--blue); */
          transition: ease all 0.25s;
          /* color: #fff !important; */
        }
      }
    }

    @media (min-width: 768px) {
      justify-content: flex-end;
    }
  }
`;

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  setPage = () => {},
}) {
  return (
    <PaginateStyle>
      <div style={{ margin: "16px -4px 0px -4px" }}>
        <Paginate
          initialPage={currentPage - 1}
          pageCount={totalPages}
          pageRangeDisplayed={2}
          marginPagesDisplayed={3}
          onPageChange={({ selected }) => setPage(selected + 1)}
          nextLabel={
            <i className="material-icons-round">keyboard_arrow_right</i>
          }
          previousLabel={
            <i className="material-icons-round">keyboard_arrow_left</i>
          }
        />
      </div>
    </PaginateStyle>
  );
}
