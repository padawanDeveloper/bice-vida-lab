import { Dropdown } from "../../../components";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 32px;
  width: 113px;
  height: 48px;
  background: ${(props) => (props.disabled ? "#dde3ed;" : "#1f61f7;")};
  box-shadow: 0px 10px 16px rgba(18, 25, 84, 0.07);
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: ${(props) => (props.disabled ? "" : "pointer;")};
  }
  .text {
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    color: #ffffff;
  }
`;

const options = [
  {
    key: 1,
    label: "Seguro Vida Activa",
    value: 58,
  },
  {
    key: 2,
    label: "Seguro Viaje Protegido",
    value: 59,
  },
];

function SelectPlan({ planId, getPlan, selectOnchange }) {
  return (
    <div>
      <Dropdown onChange={selectOnchange} options={options} />
      <div className="button-container">
        <Button onClick={planId && getPlan} disabled={!planId}>
          <div className="text">Cargar</div>
        </Button>
      </div>
    </div>
  );
}

export default SelectPlan;
