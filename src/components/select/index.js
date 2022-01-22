import styled from "styled-components";

const Select = styled.select`
  width: 100%;
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

function SelectComponent({ onChange, options }) {
  return (
    <Select
      placeholder="Escojer"
      onChange={onChange}
      defaultValue={options[0].value}
    >
      {options.map((option) => (
        <option
          key={option.key}
          value={option.value}
          hidden={option.hidden}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </Select>
  );
}

export default SelectComponent;
