import styled from "styled-components";

export const ContainerRegisterType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;  

  .MuiTypography-body1{
    font-size:1.7rem;
  }
  .MuiFormControlLabel-root{
    width:100%;
    margin-bottom:8rem;
    border:0; 
     background-color: #FF686B;
     border-radius:2rem;
     padding:1rem;
     box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  .MuiFormControlLabel-root:hover{
    color:white;
  }
  .MuiRadio-colorSecondary.Mui-checked{
    color:black;
  }
  .MuiSvgIcon-root {
    font-size:1.9rem;
    margin-right:2rem;
  }
  h2{
    padding:2rem;
    font-size:3rem;  
    text-align:center;
    color:#FF686B;
  }
  fieldset{
    display:flex;
    height:40vh;
    padding:3rem;
    align-items:center;
    justify-content:center;     
  }
  .MuiButton-outlinedPrimary{
    margin-bottom:2rem;
  }
  .MuiButton-label{
    font-size:1.5rem;
  }
`;
