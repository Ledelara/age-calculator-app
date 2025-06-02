import styled from "styled-components";

const Card = styled.div`
  background-color: var(--white);
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 700px;
  border-radius: 20px 20px 210px 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    border-radius: 20px 20px 110px 20px;
  }
`

export { Card };