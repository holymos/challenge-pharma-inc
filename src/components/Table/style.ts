import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  &,
  th,
  td {
    border: 2px solid #9eadba;
    padding: 0.6rem;
  }

  th {
    background: #c3cfd9;
    font-weight: bold;
    color: #293845;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      button {
        background: transparent;
        border: 0;
        position: absolute;
        right: 0.1rem;
        top: 0.3rem;
        cursor: pointer;
      }
    }
  }

  td {
    text-align: center;
    width: 15rem;

    & + td {
      width: auto;
    }
  }
`;
