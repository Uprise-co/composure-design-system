import Styled from "styled-components";

export const Container = Styled.div``;

export const TableStyle = Styled.table`
width : 100%;
`;

export const TableHead = Styled.thead``;

export const TableBody = Styled.tbody``;

export const TableRow = Styled.tr``;

export const TableHeader = Styled.th`
padding : 40px 0 !important;
word-wrap: break-word; 
overflow-wrap: break-word;
font-family: "Proxima Nova";
font-size: 15px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: normal;
color: #2f2d40;
`;

export const TableData = Styled.td`
text-align : center;
font-family: "Proxima Nova";
font-size: 15px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: normal;
color: #6d6c79;
`;

export const Styles = Styled.div`
  padding: 1rem;
  border-radius: 10px;
	box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
	background-color: #ffffff;
  table {
    border-spacing: 0;
    
    th {
      border-bottom : 1px solid #af9efd;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid rgba(219, 221, 227, 0.5);
      /* border-right: 1px solid black; */

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

export const Pagination = Styled.div`
 display :flex;
 margin-top : 24px;
 justify-content: flex-end;
`;

export const PaginationIndex = Styled.div`
display: flex;
  
font-family: "Proxima Nova";
font-size: 13px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.85;
letter-spacing: normal;
color: #9796a0;`;

export const PagincationButtonContainer = Styled.div`
 display: flex;
 justify-content: center;
 margin: 0 40px 0 16px;
`;

export const PaginationButton = Styled.div`
    width: 100%;
    cursor: pointer;
    display : block ruby;
    max-width : 30px;
height: 18px;
font-family: "Proxima Nova";
font-size: 14px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.29;
letter-spacing: normal;
color: #7d60ff;
`;

export const BackButtonIcon = Styled.i`
border: solid 0.5px #7d60ff;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
`;

export const NextButtonIcon = Styled.i`
border: solid 0.5px #7d60ff;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
`;
