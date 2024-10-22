import { ReactTyped } from "react-typed";
import styled, { css } from "styled-components";

const Container = styled.div`
  .react-typed {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    text-align: center;
  }
`;

const Typed = () => (
  <Container>
    <ReactTyped 
      strings={[
        "소통하며 협업하는 개발자",
        "도전하며 성장하는 개발자",
      ]}
      typeSpeed={70}
      backSpeed={70}
      loop 
      className="reactTyped" />
  </Container>
);

export default Typed;