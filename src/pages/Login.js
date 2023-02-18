import { FormikProvider, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("O e-mail deve ser válido")
        .required("Esse campo é obrigatório"),
      password: Yup.string().required("Esse campo é obrigatório"),
    }),
  });
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={logo} alt="Logo" className="mx-auto h-12 w-auto" />{" "}
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Entrar na sua conta
          </h2>{" "}
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou
            <a
              href="/signup?redirect"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              fazer cadastro
            </a>
          </p>
        </div>{" "}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <FormikProvider value={formik}>
            <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <Input
                name={"email"}
                type="email"
                autoComplete="username"
                label="Email"
              />
              <Input
                wrapperClassName="mt-6"
                label="Senha"
                type="password"
                name="password"
                autoComplete="currentPassword"
              />
              <div className="mt-2 flex items-center justify-end">
                <div className="text-sm leading-5">
                  <a
                    href="/ResetPassword"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>{" "}
              <div className="mt-6">
                <Button text="Entrar" onClick={formik.handleSubmit} />
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};
export default Login;
