import styled from "styled-components";

export const AllContentContainer = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  flex-direction: row;

  overflow-y: hidden !important;
`;
export const MainContainer = styled.div`
  width: 100%;
  max-width: 728px;
  background-color: #ffffff;
  padding-bottom: 6rem;
  overflow-y: hidden !important;
  overflow-x: hidden !important;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    width: 65%;
    max-width: 65%;
  }
`;
export const ServiceImageContainer = styled.div`
  width: 100%;
  height: 8rem;

  @media (min-width: 1024px) {
    height: 5rem;
  }
`;
export const ServiceImage = styled.img`
  width: 100%;
  height: 8rem;
  margin: 5px 0;
  filter: blur(5px);
  @media (min-width: 1024px) {
    height: 5rem;
  }
`;
export const ServiceInfo = styled.div`
  width: 100%;
  height: 15rem;
  border-bottom: 3px solid rgba(0, 0, 0, 0.5);

  display: flex;
  flex-wrap: wrap;

  @media (min-width: 450px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    height: 10rem;
  }
`;
export const Title = styled.h1`
  width: 69%;
  height: 4rem;
  margin-bottom: 0;
  font-weight: normal;
  text-align: left;
  padding-left: 0.5rem;

  @media (min-width: 450px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    height: 2rem;
  }
`;
export const Rate = styled.h2`
  width: 29%;
  height: 4rem;
  font-weight: normal;
  margin-bottom: 0;

  @media (min-width: 450px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    height: 2rem;
  }
`;
export const Description = styled.h1`
  width: 100%;
  height: 4rem;
  font-size: 16px;
  font-weight: normal;
  text-align: center;

  @media (min-width: 450px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    height: 2rem;
  }
`;
export const CardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  overflow-y: scroll;

  padding: 1rem;

  div {
    margin: auto;
  }
`;
export const CartContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #3d90ab;
  z-index: 0;
  overflow-y: hidden !important;

  display: flex;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
`;
export const CartItems = styled.div`
  width: 33.33%;
  height: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CartText = styled.h3`
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  color: white;
  cursor: pointer;

  font-weight: normal;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FinalPrice = styled.h2`
  font-weight: normal;
  margin: 0;
  color: white;
`;

// Box do carrinho para width maior de 1024 px

// export const DesckCartContainer = styled.div`
//   width: 100%;
//   height: 18%;

//   display: none;

//   flex-direction: column;
//   @media (min-width: 1024px) {
//     display: flex;
//     position: relative;
//     bottom: 0;
//     right: 0;
//   }
//   @media (max-height: 700px) {
//     height: 100px;
//   }
// `;
// export const DesckCartItems = styled.div`
//   width: 100%;
//   height: 33.333%;
//   display: none;

//   button {
//     width: 100%;
//     height: 100%;
//     text-align: center;
//     border-radius: 0;
//   }
//   h1 {
//     margin: 0;
//     font-weight: normal;
//     padding: 0 1rem;
//     font-size: 18px;
//   }
//   h1:first-child {
//     padding-top: 0.5rem;
//   }

//   @media (min-width: 1024px) {
//     display: block;
//   }
// `;
// export const DesckServiceCard = styled.div`
//   width: 100%;
//   height: 8%;
//   padding: 1rem 0;

//   min-height: 30px;

//   display: none;

//   border-bottom: 2px solid rgba(0, 0, 0, 0.5);
//   p {
//     padding-left: 1rem;
//     margin: 0;
//     font-size: 12px;
//   }

//   @media (min-width: 1024px) {
//     display: block;
//   }
// `;
// export const DesckServiceContainer = styled.div`
//   width: 100%;
//   height: 82%;
//   min-height: 40vh;
//   max-height: 70vh;
//   overflow-y: scroll;
//   display: none;

//   p {
//     font-size: 14px;
//     padding-left: 1rem;
//   }

//   @media (min-width: 1024px) {
//     display: block;
//   }
// `;
