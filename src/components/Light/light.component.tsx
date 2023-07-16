import styled from "styled-components";
import LightProps from "./light.interface";

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50rem;
`;

function Light(props: LightProps) {
  return (
    <Div
      style={{ backgroundColor: props.color, opacity: props.active ? 1 : 0.2 }}
    ></Div>
  );
}

export default Light;
