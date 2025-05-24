import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  width: 100%;
  border-radius: 15px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

export { Container };