import { useState } from "react";
import { Card, Loading } from "../../components";
import { fetchPlan } from "../../api/fetchData";
import { SelectPlan } from "./components";
import styled from "styled-components";
import { isNil } from "lodash";

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

function Plan() {
  const [planId, setPlanId] = useState(null);
  const [plan, setPlan] = useState({
    name: null,
    description: null,
    price: null,
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const getPlan = () => {
    setLoading(true);
    fetchPlan(planId)
      .then(({ data }) =>
        setPlan(() => {
          setLoading(false);
          return data.insurance;
        })
      )
      .catch(() => setLoading(false));
  };

  const selectOnchange = (id) => setPlanId(id);
  const { image, name, price, description } = plan;

  const hasData =
    !isNil(image) || !isNil(name) || !isNil(price) || !isNil(description);

  return (
    <Container>
      <div style={{ width: 328 }}>
        <SelectPlan
          getPlan={getPlan}
          selectOnchange={selectOnchange}
          planId={planId}
        />
        <div style={{ marginTop: 20 }}>
          {loading && <Loading />}
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

export default Plan;
