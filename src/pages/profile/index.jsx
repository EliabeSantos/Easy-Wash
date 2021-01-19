import jwt_decode from "jwt-decode";
import Header from "../../components/header";
import Modal from "../../components/modalBase";
import DefaultButton from "../../components/sharedButton";
import { MainContainer, InformationContainer, Select } from "./style";
import axios from "axios";
import { useState, useEffect } from "react";
import { useOpen } from "../../context/openModal";
import Input from "../../components/sharedInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Profile = () => {
  const token = localStorage.authToken;
  const userInformation = jwt_decode(token);
  console.log(userInformation);
  const [userData, setUserData] = useState({});
  const [currency, setCurrency] = useState("AC");
  const url = `https://easy-wash-server.herokuapp.com/users/${userInformation.sub}`;
  const handleCurrency = (ev) => {
    setCurrency(ev.target.value);
  };

  const schema = yup.object({
    password: yup.string(),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais!"),
    phone: yup.string,
    address: yup.object({
      street: yup.string(),
      number: yup.string,
      city: yup.string(),
    }),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    // axios.put(url, { user: { ...data } }).then((res) => console.log(res));
  };

  const { open, setOpen } = useOpen();
  const handleModal = () => setOpen(!open);

  const getUserData = (url) => {
    if (url) {
      axios.get(url).then((res) => {
        setUserData({ ...res.data });
      });
    }
  };

  const federationUnity = [
    {
      value: "Acre",
      label: "AC",
    },
    {
      value: "Alagoas",
      label: "AL",
    },
    {
      value: "Amapá",
      label: "AP",
    },
    {
      value: "Amazonas",
      label: "AM",
    },
    {
      value: "Bahia",
      label: "BA",
    },
    {
      value: "Ceará",
      label: "CE",
    },
    {
      value: "Espírito",
      label: "ES",
    },
    {
      value: "Goiás",
      label: "GO",
    },
    {
      value: "Maranhão",
      label: "MA",
    },
    {
      value: "Mato Grosso",
      label: "MT",
    },
    {
      value: "Mato Grosso do Sul",
      label: "MS",
    },
    {
      value: "Minas Gerais",
      label: "MG",
    },
    {
      value: "Pará",
      label: "PA",
    },
    {
      value: "Amazonas0",
      label: "AM",
    },
    {
      value: "Paraíba",
      label: "PB",
    },
    {
      value: "Paraná",
      label: "PR",
    },
    {
      value: "Pernambuco",
      label: "PE",
    },
    {
      value: "Piauí",
      label: "PI",
    },
    {
      value: "Rio de Janeiro",
      label: "RJ",
    },
    {
      value: "Rio Grande do Norte",
      label: "RN",
    },
    {
      value: "Rio Grande do Sul",
      label: "RS",
    },
    {
      value: "Roraima",
      label: "RR",
    },
    {
      value: "Santa Catarina",
      label: "SC",
    },
    {
      value: "São Paulo",
      label: "SP",
    },
    {
      value: "Sergipe",
      label: "SE",
    },
    {
      value: "Distrito Federal",
      label: "DF",
    },
  ];

  useEffect(() => getUserData(url), []);

  return (
    <>
      <MainContainer>
        <Header />
        <h1>{userData.name}</h1>

        <InformationContainer>
          <div>
            <h4>Nome:</h4>
            <p>{userData.name}</p>
            <hr></hr>
            <h4>Senha:</h4>
            <p>************</p>
            <hr></hr>
            <h4>Telefone:</h4>
            <p>{userData.phone}</p>
            <hr></hr>
            <h4>Endereço:</h4>
            <p>
              {/* {userData.address.street}
              {userData.address.number} 
              {userData.address.district} 
              {userData.address.city} */}
              {/* {userData.data.UF} */}
            </p>
            <hr></hr>
          </div>
          <DefaultButton name="Editar Perfil" _func={handleModal} />
        </InformationContainer>
      </MainContainer>
      <Modal>
        <form onSubmit={handleSubmit(handleForm)}>
          <h2>Editar Perfil</h2>
          <div className="div">
            <Input
              _error={!!errors.password}
              _helperText={errors.password?.message}
              _inputRef={register}
              name="password"
              label="Nova senha"
              margin="dense"
            />
          </div>
          <div className="div">
            <Input
              _error={!!errors.passwordConfirmation}
              _helperText={errors.passwordConfirmation?.message}
              _inputRef={register}
              name="passwordConfirmation"
              label="Confirmar nova senha"
              margin="dense"
            />
          </div>
          <div className="div">
            <Input
              _error={!!errors.phone}
              _helperText={errors.phone?.message}
              _inputRef={register}
              name="phone"
              label="Telefone"
              margin="dense"
            />
          </div>
          <div className="div">
            <Input
              _error={!!errors.zipcode}
              _helperText={errors.zipcode?.message}
              _inputRef={register}
              name="zipcode"
              label="CEP"
              margin="dense"
            />
          </div>
          <div className="div">
            <Input
              _error={!!errors.street}
              _helperText={errors.street?.message}
              _inputRef={register}
              name="street"
              label="Rua"
              width="20rem"
              margin="dense"
            />
            <Input
              _error={!!errors.number}
              _helperText={errors.number?.message}
              _inputRef={register}
              name="number"
              label="N&ordm;"
              width="4.5rem"
              margin="dense"
            />
          </div>

          <div className="div">
            <Input
              _error={!!errors.city}
              _helperText={errors.city?.message}
              _inputRef={register}
              name="city"
              label="Cidade"
              width="20rem"
              margin="dense"
            />
            <Select
              error={!!errors.UF}
              helperText={errors.UF?.message}
              inputRef={register}
              id="outlined-select-currency"
              select
              value={currency}
              onChange={handleCurrency}
              variant="outlined"
              label="UF"
              margin="dense"
              width="4.5rem"
              name="UF"
            >
              {federationUnity.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
          <DefaultButton name="Confirmar" type="submit" _func={handleModal} />
        </form>
      </Modal>
    </>
  );
};

export default Profile;
