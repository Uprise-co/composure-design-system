import React from "react";
import { useTable, usePagination } from "react-table";
import { array } from "prop-types";

import {
  Styles,
  Container,
  TableStyle,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableData,
  Pagination,
  PagincationButtonContainer,
  PaginationButton,
  PaginationIndex,
  NextButtonIcon,
  BackButtonIcon
} from "./index.style";

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setHiddenColumns,
    state: { pageIndex, pageSize, sortedData }
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 6,
        hiddenColumns: columns
          .filter(column => !column.show)
          .map(column => column.id)
      }
    },
    usePagination
  );
  return (
    <Styles>
      <Container>
        <TableStyle {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableHeader {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </TableHeader>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <TableData {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableData>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </TableStyle>
      </Container>
      <Pagination>
        <PaginationIndex>
          page {pageIndex + 1} of {pageOptions.length}
        </PaginationIndex>{" "}
        <PagincationButtonContainer>
          {canPreviousPage ? (
            <PaginationButton onClick={() => previousPage()}>
              <BackButtonIcon />
              Back
            </PaginationButton>
          ) : null}
          {canNextPage ? (
            <PaginationButton onClick={() => nextPage()}>
              Next <NextButtonIcon />
            </PaginationButton>
          ) : null}
        </PagincationButtonContainer>
      </Pagination>
    </Styles>
  );
};

export default Table;

Table.propTypes = {
  columns: array,
  data: array
};

Table.defaultProps = {
  columns: [],
  data: []
};
