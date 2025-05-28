import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import FormComponent from "./components/FormComponent/FormComponent";
import { Card } from "./components/StyledComponents/Card/Card";
import { Container } from "./components/StyledComponents/Container/Container";


function App() {

  const [birthData, setBirthData] = useState<{ day: number; month: number; year: number } | null>(null);

  const handleSubmit = (day: number, month: number, year: number) => {
    setBirthData({ day, month, year });
  }
  return (
    <div>
      <Container>
        <Card>
          <FormComponent onSubmit={handleSubmit} />
          {birthData && <Calculator day={birthData.day} month={birthData.month} year={birthData.year} />}
        </Card>
      </Container>
    </div>
  );
}

export default App;
