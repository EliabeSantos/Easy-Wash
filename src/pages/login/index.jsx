import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useHistory } from "react-router-dom";
import {
  ContainerForm,
  Form,
  Title,
  ButtonContainer,
  ContainerImage,
  Image,
  Container,
} from "./style";
import DefaultButton from "../../components/sharedButton";
import SharedInput from "../../components/sharedInput";
import Header from "../../components/header";

import Imagelogin from "./image/Imagelogin.svg";
import axios from "axios";

const Login = () => {
  const history = useHistory();

  if (localStorage.authToken) {
    history.push("/main-page");
  }
  const schema = yup.object({
    email: yup.string().email("Tipo inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    RequestApi(data);
  };

  const RequestApi = (data) => {
    axios
      .post("https://easy-wash-server.herokuapp.com/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        const { accessToken } = response.data;
        localStorage.setItem("authToken", accessToken);
        if (localStorage.getItem("authToken")) {
          history.push("/main-page");
        }
      })
      .catch((error) => {
        setError("password", { message: "Senha ou usuário inválido" });
      });
  };

  return (
    <>
      <Container>
        <Header />
        <ContainerForm>
          <Title>LOGIN</Title>

          <ContainerImage>
            <Image src={Imagelogin} />
          </ContainerImage>

          <Form onSubmit={handleSubmit(handleForm)}>
            <SharedInput
              label="Email"
              name="email"
              _inputRef={register}
              error={!!errors.email}
            />
            {errors.email && <p type="warning">{errors.email.message}</p>}

            <SharedInput
              label="Senha"
              name="password"
              type="password"
              error={!!errors.password}
              _inputRef={register}
            />
            {errors.password && <p type="warning">{errors.password.message}</p>}

            <ButtonContainer>
              <DefaultButton name="Entrar" type="submit" />
            </ButtonContainer>
          </Form>
        </ContainerForm>
      </Container>
    </>
  );
};
export default Login;
