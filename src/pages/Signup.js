import { FormikProvider, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      acceptTerms: false,
      emailConfirm: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("O e-mail deve ser válido")
        .required("Esse campo é obrigatório"),
      emailConfirm: Yup.string()
        .email("O e-mail deve ser válido")
        .required("Esse campo é obrigatório")
        .oneOf([Yup.ref("email")], "Os dois e-mails devem ser iguais."),
      password: Yup.string().required("Esse campo é obrigatório"),
      acceptTerms: Yup.boolean()
        .required("(Esse campo é obrigatório)")
        .oneOf([true], "(Esse campo é obrigatório)"),
    }),
  });
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={logo} alt="Kiwify" className="mx-auto h-12 w-auto" />{" "}
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Criar nova conta
          </h2>{" "}
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou
            <a
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              entrar na sua conta existente
            </a>
          </p>
        </div>{" "}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <FormikProvider value={formik}>
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <Input name="email" type="email" label="E-mail" />
              <Input
                name="emailConfirm"
                type="email"
                autoComplete="off"
                wrapperClassName="mt-6"
                label="Repetir e-mail"
              />
              <Input
                name="password"
                type="password"
                autoComplete="off"
                wrapperClassName="mt-6"
                label="Senha"
              />
              <Checkbox
                wrapperClassName="mt-6"
                name="acceptTerms"
                label={
                  <>
                    {" "}
                    <span className="font-medium text-gray-700">
                      Eu li e aceito os{" "}
                      <a
                        href="https://kiwify.com.br/termos-de-uso"
                        target="_blank"
                        className="underline"
                        rel="noreferrer"
                      >
                        {" "}
                        termos de uso
                      </a>
                      ,{" "}
                      <a
                        rel="noreferrer"
                        href="https://kiwify.com.br/licenca-de-uso-software"
                        target="_blank"
                        className="underline"
                      >
                        {" "}
                        termos de licença de uso de software
                      </a>
                      ,{" "}
                      <a
                        href="https://kiwify.com.br/politica-de-conteudo"
                        rel="noreferrer"
                        target="_blank"
                        className="underline"
                      >
                        {" "}
                        política de conteúdo
                      </a>{" "}
                      da Kiwify{" "}
                    </span>{" "}
                  </>
                }
              />
              <div className="mt-6">
                <Button text="Criar conta" onClick={formik.handleSubmit} />
              </div>
            </div>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};
export default Signup;
