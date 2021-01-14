import MainImg from "./landingImg.svg";
import waveImg from "./waveImg.svg";
import waveImg2 from "./wave2.svg";
import Header from "../../components/header";
import DefaultButton from "../../components/sharedButton";
import { useHistory } from "react-router-dom";

import {
  MainContainer,
  TitleContainer,
  MainImageContainer,
  Img,
  Title,
  WaveImg,
  ButtonsContainer,
  WaveImg2,
} from "./style";

const Landing = () => {
  let history = useHistory();
  return (
    <>
      <Header></Header>
      <MainContainer>
        <TitleContainer>
          <Title>Easy Wash</Title>
        </TitleContainer>
        <MainImageContainer>
          <Img src={MainImg}></Img>
        </MainImageContainer>
        <ButtonsContainer>
          <DefaultButton
            _func={() => {
              history.push("/login");
            }}
            name={"Login"}
          />
          <DefaultButton
            _func={() => {
              history.push("/register");
            }}
            name={"Register"}
          />
        </ButtonsContainer>
        <WaveImg src={waveImg}></WaveImg>
        <WaveImg2 src={waveImg2}></WaveImg2>
      </MainContainer>
    </>
  );
};

export default Landing;
