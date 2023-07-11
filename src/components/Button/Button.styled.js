import styled from "styled-components";

export const ButtonLoadMore = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #d7d7d7;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #2a2a2a;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.33;
  font-style: normal;
  font-weight: 500;
  /* margin-bottom: 50px; */
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    color: #f2f2f2;
    background-color: #0c7ca2;
  }
`;