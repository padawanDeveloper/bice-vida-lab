import styled from "styled-components";

const Card = styled.div`
  width: 328px;
  height: 272px;
  background: #ffffff;
  border: 1px solid #dde3ed;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 328px;
  height: 192px;
`;

const Title = styled.div`
  width: 216px;
  height: 24px;
  font-family: Poppins;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #060b25;
`;

const Paragrph = styled.div`
  width: 51px;
  height: 24px;
  font-family: Poppins;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #58606e;
`;

const Container = styled.div`
  justify-content: center;
  align-items: center;
  background: red;
`;

function CardComponent() {
  return (
    <Card>
      <Image />
      <Container>
        <Title>Titulo</Title>
        <Paragrph>Parrafo</Paragrph>
      </Container>
    </Card>
  );
}

export default CardComponent;
