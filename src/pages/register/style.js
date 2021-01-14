import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4rem;
  font-family: "mukta";
  font-weight: 400;

  margin: 2rem 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  max-width: 640px;

  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  width: 100%;

  padding: 2rem 0 4rem 0;
  .container_personal_info,
  .container_address_info,
  .container_service_info,
  .container_password_info {
    width: 80%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: space-around;
  }
  .container_personal_info {
    align-items: center;
  }

  .container_service_info {
    margin-bottom: 4rem;
  }

  .section_title,
  .section_subtitle {
    font-family: "mukta";
    font-weight: 300;
    align-self: center;
  }
  .section_title {
    padding-bottom: 1rem 0;
  }
  .single_liner {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }
`;
