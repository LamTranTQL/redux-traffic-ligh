import { useEffect, useState } from "react";
import styled from "styled-components";
import Light from "../Light/light.component";
import Button from "../button/button.component";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const FlexCenter = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TraffitLight = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  border-radius: 20px;
  background-color: #211e1e;
`;

const ContainerLight = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50rem;
  background-color: #3a3636;
`;

const timeLight = [4000, 3000, 2000];

function Container() {
  const status = useSelector((state: RootState) => state.button.status);

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const time = setTimeout(() => {
      if (status) {
        setIndex((index + 1) % 3);
      }
    }, timeLight[index]);
    return () => {
      clearTimeout(time);
    };
  });

  console.log(status);

  return (
    <FlexCenter>
      <TraffitLight>
        <ContainerLight>
          <Light color='#F00F00' active={status && index === 0} />
        </ContainerLight>

        <ContainerLight>
          <Light color='#FFFF00' active={status && index === 2} />
        </ContainerLight>

        <ContainerLight>
          <Light color='#00cc00' active={status && index === 1} />
        </ContainerLight>
      </TraffitLight>
      <Button />
    </FlexCenter>
  );
}

export default Container;
