import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";

import axios from "axios";

import SharedInput from "../../components/sharedInput";
import SharedButton from "../../components/sharedButton";

import { Form } from "./style.js";

const Register = () => {
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");

  const autoCompleteAddress = async () => {
    if (cep.length === 8) {
      try {
        const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.data;
        setStreet(data.logradouro);
        setDistrict(data.bairro);
        setCity(data.localidade);
        setUF(data.uf);
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
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="container_personal_info">
        <p>Informações pessoais</p>

        <SharedInput label="Nome" name="name" _inputRef={register} />
        <SharedInput label="Email" name="email" _inputRef={register} />
        <SharedInput label="Telefone" name="phone" _inputRef={register} />
        <SharedInput label="CNPJ" name="cnpj" _inputRef={register} />
      </div>

      <div className="container_address_info">
        <p>Informações de endereço</p>
        <SharedInput
          label="CEP"
          name="zipcode"
          type="number"
          value={cep}
          _onChange={(evt) => handleSetCep(evt)}
          max="8"
          width="16rem"
        />
        <SharedInput
          label="Rua"
          name="street"
          value={street}
          _inputRef={register}
          _onChange={(evt) => setStreet(evt.target.value)}
          width="16rem"
        />
        <SharedInput
          label="Numero"
          name="number"
          type="number"
          _inputRef={register}
          width="6rem"
        />
        <SharedInput
          label="Bairro"
          name="district"
          _inputRef={register}
          value={district}
          _onChange={(evt) => setDistrict(evt.target.value)}
          width="16rem"
        />
        <SharedInput
          label="Cidade"
          name="city"
          _inputRef={register}
          value={city}
          _onChange={(evt) => setCity(evt.target.value)}
          width="16rem"
        />
        <SharedInput
          label="UF"
          name="UF"
          _inputRef={register}
          value={uf}
          _onChange={(evt) => setUF(evt.target.value)}
          max="2"
          width="6rem"
        />
      </div>

      <div className="container_service_info">
        <p>Informações de atendimento</p>
        <SharedInput
          label="Raio de atendimento"
          name="radius"
          type="number"
          _inputRef={register}
          width="12rem"
        />
        <SharedInput
          label="Inicio do atendimento"
          name="initial"
          type="number"
          _inputRef={register}
          width="12rem"
        />
        <SharedInput
          label="Fim do atendimento"
          name="end"
          type="number"
          _inputRef={register}
          width="12rem"
        />
        <SharedInput
          label="Valor do frete"
          name="deliveryfee"
          type="number"
          _inputRef={register}
          width="12rem"
        />
      </div>

      <div className="container_password_info">
        <p>Senha</p>
        <SharedInput label="Senha" name="password" _inputRef={register} />
        <SharedInput label="Repetir senha" name="rePassword" />
      </div>

      <SharedButton type="submit" name="Enviar" _inputRef={register} />
    </Form>
  );
};
export default Register;
