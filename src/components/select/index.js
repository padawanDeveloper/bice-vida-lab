import styled from "styled-components";

const Select = styled.select`
  width: 328px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #dde3ed;
  box-sizing: border-box;
  border-radius: 4px;
  &:selected {
    background: red;
  }
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

function SelectComponent({ options }) {
  return (
    <Select>
      <option value="">Type</option>
      <option value="1">Audi</option>
      <option value="2">BMW</option>
      <option value="3">Citroen</option>
      <option value="4">Ford</option>
    </Select>
  );
}

export default SelectComponent;
