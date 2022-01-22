import { Card, Select } from "./components";
import { fetchPlan } from "./api/fetchData";

function App() {
  const getPlan = (id) => {
    fetchPlan(id)
      .then(({ data }) => console.log(data))
      .catch((ex) => console.log(ex));
  };
  return (
    <div className="App">
      <h1>Bice Vida</h1>
      <button onClick={getPlan}>Cargar</button>
      <Select />
      <Card />
    </div>
  );
}

export default App;
