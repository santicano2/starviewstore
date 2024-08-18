"use client";

import { useState } from "react";

import { useWixClient } from "@/hooks/useWixClient";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const LoginPage = () => {
  const [mode, setMode] = useState(MODE.LOGIN);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle =
    mode === MODE.LOGIN
      ? "Iniciar sesión"
      : mode === MODE.REGISTER
      ? "Registrarse"
      : mode === MODE.RESET_PASSWORD
      ? "Restablecer contraseña"
      : "Verificar correo";

  const buttonTitle =
    mode === MODE.LOGIN
      ? "Iniciar sesión"
      : mode === MODE.REGISTER
      ? "Registrarse"
      : mode === MODE.RESET_PASSWORD
      ? "Restablecer"
      : "Verificar";

  const wixClient = useWixClient();

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm text-gray-700">
              Nombre de usuario
            </label>
            <input
              type="text"
              name="username"
              placeholder="starview"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : null}
        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="starview@email.com"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label htmlFor="emailCode" className="text-sm text-gray-700">
              Código de verificación
            </label>
            <input
              type="text"
              name="emailCode"
              placeholder="Código"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="tu contraseña"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : null}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Olvidaste tu contraseña?
          </div>
        )}
        <button
          className="bg-starview text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : buttonTitle}
        </button>
        {error && <div className="text-red-500">{error}</div>}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.REGISTER)}
          >
            No tenes una cuenta?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Ya tenes una cuenta?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Volver a iniciar sesión
          </div>
        )}
        {message && <div className="text-green-500 text-sm">{message}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
