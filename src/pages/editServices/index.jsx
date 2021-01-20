// import {} from "./style";
import Header from "../../components/header";
import Modal from "../../components/modalBase";
import DefaultButton from "../../components/sharedButton";
import { MainContainer, InformationContainer } from "./style";
import { useState, useEffect } from "react";
import { useOpen } from "../../context/openModal";
import Input from "../../components/sharedInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../../store/modules/currentUser/thunk";
import axios from "axios";

const EditServices = () => {
  //modal state
  const { open, setOpen } = useOpen();
  const handleModal = () => setOpen(!open);
  //user thunk
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });
  useEffect(() => dispatch(getUserThunk()), [user]);
  //form yup

  return (
    <>
      <MainContainer>
        <Header />
        <InformationContainer>
          <DefaultButton name="Adicionar Serviço" _func={handleModal} />
        </InformationContainer>
      </MainContainer>
      <Modal>
        {user.services.map((service) => (
          <div>
            <h2>service.title</h2>
            <p>{service.description}</p>
            <h4>R${service.price}</h4>
            <hr></hr>
          </div>
        ))}
        <DefaultButton name="Finalizar" />
      </Modal>
    </>
  );
};

export default EditServices;
