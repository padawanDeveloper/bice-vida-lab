import { useState } from "react";
import { Card, Dropdown } from "./components";
import { fetchPlan } from "./api/fetchData";
import styled from "styled-components";
import { isNil } from "lodash";

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  .button-container {
    display: flex;
    margin-top: 10px;
    width: 100%;
    justify-content: center;
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

function App() {
  const [planId, setPlanId] = useState(null);
  const [plan, setPlan] = useState({
    name: null,
    description: null,
    price: null,
    image: null,
  });
  const getPlan = () =>
    fetchPlan(planId)
      .then(({ data }) => setPlan(data.insurance))
      .catch((ex) => console.log(ex));

  const selectOnchange = (id) => setPlanId(id);
  const { image, name, price, description } = plan;

  const hasData =
    !isNil(image) || !isNil(name) || !isNil(price) || !isNil(description);

  return (
    <Container>
      <div style={{ width: 328 }}>
        <div>
          <Dropdown onChange={selectOnchange} options={options} />
          <div className="button-container">
            <Button onClick={planId && getPlan} disabled={!planId}>
              <div className="text">Cargar</div>
            </Button>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          {hasData && (
            <Card
              imageUrl={image}
              title={name}
              label={price}
              description={description}
            />
          )}
        </div>
      </div>
    </Container>
  );
}

export default App;
