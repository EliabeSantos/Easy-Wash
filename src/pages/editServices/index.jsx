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
  const { open, setOpen } = useOpen();
  const handleModal = () => setOpen(!open);
  return (
    <>
      <MainContainer>
        <Header />
        <InformationContainer>
          <DefaultButton Name="Adicionar Serviço" _func={handleModal} />
        </InformationContainer>
      </MainContainer>
      <Modal>
        <DefaultButton name="Finalizar" />
      </Modal>
    </>
  );
};

export default EditServices;
