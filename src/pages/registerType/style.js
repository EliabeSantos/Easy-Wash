import styled from "styled-components";

export const ContainerRegisterType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  z-index: 1;

  .MuiTypography-body1 {
    font-size: 1.7rem;
  }
  .MuiFormControlLabel-root {
    width: 100%;
    margin-bottom: 8rem;
    border: 0;
    background-color: #ff686b;
    border-radius: 2rem;
    padding: 1rem;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  .MuiFormControlLabel-root:hover {
    color: white;
  }
  .MuiRadio-colorSecondary.Mui-checked {
    color: black;
  }
  .MuiSvgIcon-root {
    font-size: 1.9rem;
    margin-right: 2rem;
  }
  h2 {
    padding: 2rem;
    font-size: 3rem;
    text-align: center;
    color: #ff686b;
  }
  fieldset {
    display: flex;
    height: 40vh;
    padding: 3rem;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .MuiButton-outlinedPrimary {
    margin-bottom: 2rem;
  }
  .MuiButton-label {
    font-size: 1.5rem;
  }
`;
export const Ocean = styled.div`
  min-height: 450px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;
export const Wave = styled.div`
  background: url(https://cdn.kcak11.com/codepen_assets/wave_animation/wave.svg)
    repeat-x;
  position: absolute;
  bottom: 0;
  z-index: 0;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);

  .wave:nth-of-type(2) {
    bottom: 25px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
`;
