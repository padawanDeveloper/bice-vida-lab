import { useState, useRef } from "react";
import styled from "styled-components";

const Dropdown = styled.div`
  width: 328px;
  cursor: pointer;
  border: 1px solid #dde3ed;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  .label {
    padding: 12px;
    display: flex;
    align-items: center;
    font-family: Poppins;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #afbacc;
    justify-content: space-between;
  }
  &:focus {
    border: 2px solid #1f61f7;
    .dropdown-list {
      opacity: 1;
      visibility: visible;
    }
    .label {
      color: #1f61f7;
    }
  }

  .dropdown-list {
    background-color: white;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s linear, visibility 0.2s linear;
    transform: translateY(10px);
    &:before {
      content: "";
      width: 100%;
      height: 10px;
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
    }
  }
  .dropdown-list__item {
    padding: 12px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    &:hover {
      opacity: 0.5;
      background: #dde3ed;
    }
  }
`;

function DropdownComponent({
  placeHolder = "Select option",
  options = [],
  onChange,
}) {
  const dropdownRef = useRef(null);
  const [text, setText] = useState(placeHolder);
  const handleChange = (e) => {
    onChange(e.target.id);
    setText(e.target.innerHTML);
    dropdownRef.current && dropdownRef.current.blur();
  };

  return (
    <Dropdown ref={dropdownRef} tabIndex="1">
      <div className="label">
        <span>{text}</span>
        <i className="fa fa-caret-down icon"></i>
      </div>
      <div className="dropdown-list">
        {options.map((option) => (
          <div
            onClick={handleChange}
            className="dropdown-list__item"
            key={option.key}
            value={option.value}
            id={option.value}
            name={option.label}
          >
            {option.label}
          </div>
        ))}
      </div>
    </Dropdown>
  );
}

export default DropdownComponent;
