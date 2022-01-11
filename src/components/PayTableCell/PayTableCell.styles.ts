import styled from "styled-components";

export const PayList = styled.ul`
  list-style: none;
  display: flex;
  max-width: 250px;
  padding: 0;
  margin: 0 auto;
`;
export const PaySegment = styled("li")<{ filled: string }>`
  background-color: ${(props) => props.filled};
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
  height: 12px;
  border-radius: 5px;
  flex: 1;
`;
