import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import Header from "../../components/header";
import CepCoords from "coordenadas-do-cep";

import axios from "axios";

import SharedInput from "../../components/sharedInput";
import SharedButton from "../../components/sharedButton";

import { Form, Container, Title } from "./style.js";

const Register = () => {
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");
  const [coords, setCoords] = useState({});

  const autoCompleteAddress = async () => {
    if (cep.length === 8) {
      try {
        const data = await CepCoords.getByCep(cep);
        setStreet(data.logradouro);
        setDistrict(data.bairro);
        setCity(data.localidade);
        setUF(data.uf);
        setCoords({ latitude: data.lat, longitude: data.lon });
      } catch (err) {}
    }
  };

  useEffect(() => {
    autoCompleteAddress();
  }, [cep]);

  const handleSetCep = (evt) => {
    console.log(evt.target.value);
    setCep(evt.target.value);
  };
  const { register, handleSubmit } = useForm();
  const handleFormSubmit = (data) => {
    const formattedObject = {
      email: data.email,
      password: data.password,
      company: data.name,
      type: "PJ",
      phone: data.phone,
      address: {
        zipcode: cep,
        street: data.street,
        number: data.number,
        district: data.district,
        city: data.city,
        UF: data.info,
        coords: coords,
      },
      radius: data.radius,
      deliveryfee: data.deliveryfee,
      schedule: {
        initial: data.initial,
        end: data.end,
      },
      services: [],
    };
    console.log(formattedObject);
  };

  return (
    <div>
      <Header />

      <Container>
        <Title>REGISTRO</Title>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="container_personal_info">
            <h2 className="section_title">Informações de conta</h2>

            <SharedInput
              label="Nome"
              name="name"
              _inputRef={register}
              width="30rem"
            />
            <SharedInput
              label="Email"
              name="email"
              _inputRef={register}
              width="30rem"
            />
            <SharedInput
              label="Telefone"
              name="phone"
              _inputRef={register}
              width="30rem"
            />
            <SharedInput
              label="CNPJ"
              name="cnpj"
              _inputRef={register}
              width="30rem"
            />
            <SharedInput
              label="Senha"
              name="password"
              _inputRef={register}
              width="30rem"
            />
            <SharedInput
              label="Repetir senha"
              name="rePassword"
              width="30rem"
            />
          </div>

          <div className="container_address_info">
            <h2 className="section_title">Informações de endereço</h2>
            <SharedInput
              label="CEP"
              name="zipcode"
              type="number"
              value={cep}
              _onChange={(evt) => handleSetCep(evt)}
              max="8"
              width="30rem"
            />
            <div className="single_liner">
              <SharedInput
                label="Rua"
                name="street"
                value={street}
                _inputRef={register}
                _onChange={(evt) => setStreet(evt.target.value)}
                width="22rem"
              />
              <SharedInput
                label="Numero"
                name="number"
                type="number"
                _inputRef={register}
                width="10rem"
              />
            </div>
            <SharedInput
              label="Bairro"
              name="district"
              _inputRef={register}
              value={district}
              _onChange={(evt) => setDistrict(evt.target.value)}
              width="30rem"
            />
            <div className="single_liner">
              <SharedInput
                label="Cidade"
                name="city"
                _inputRef={register}
                value={city}
                _onChange={(evt) => setCity(evt.target.value)}
                width="22rem"
              />
              <SharedInput
                label="UF"
                name="UF"
                _inputRef={register}
                value={uf}
                _onChange={(evt) => setUF(evt.target.value)}
                max="2"
                width="10rem"
              />
            </div>
          </div>

          <div className="container_service_info">
            <h2 className="section_title">Informações de serviço</h2>
            <div className="single_liner">
              <SharedInput
                label="Area de serviço"
                name="radius"
                type="number"
                _inputRef={register}
                width="20rem"
              />
              <SharedInput
                label="Valor do frete"
                name="deliveryfee"
                type="number"
                _inputRef={register}
                width="20rem"
              />
            </div>
            <h3 className="section_subtitle">Horario de atendimento</h3>
            <div className="single_liner">
              <SharedInput
                label="Inicio"
                name="initial"
                type="number"
                _inputRef={register}
                width="20rem"
              />

              <SharedInput
                label="Fim"
                name="end"
                type="number"
                _inputRef={register}
                width="20rem"
              />
            </div>
          </div>

          <SharedButton
            type="submit"
            name="Enviar"
            _inputRef={register}
            width="30rem"
            height="3rem"
          />
        </Form>
      </Container>
    </div>
  );
};
export default Register;
