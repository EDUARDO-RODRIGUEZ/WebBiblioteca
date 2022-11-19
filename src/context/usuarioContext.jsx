import { createContext, useReducer } from "react";
import { apiServiceAuth } from "../api/apiServiceAuth";
import usuarioReducer from "../reducer/usuarioReducer";
import { types } from "../types/types";

export const usuarioContext = createContext(null);

const initialState = {
  id: undefined,
  nombre: undefined,
  email: undefined,
  isAuthenticated: false,
  perfil: undefined
}

export const UsuarioContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(usuarioReducer, initialState);

  async function login(formData, callback) {

    try {
      const result = await apiServiceAuth.post(`/usuario/login`, formData);
      const { data } = result;

      if (!data.ok) {
        console.log(data)
        callback(false);
        return;
      }

      const usuario = data.data;
      dispatch({
        type: types.UsuarioLogin,
        payload: { id: usuario.id, nombre: usuario.nombre, email: usuario.email, perfil: usuario.perfil }
      });
      callback(true);

    } catch (error) {
      console.log(error);
      callback(false);
    }

  }

  async function register(formData, callback) {

    try {
      let form = new FormData();
      form.append("nombre", formData.nombre);
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("perfil", formData.perfil);

      const result = await apiServiceAuth.post(`/usuario/register`, form);
      const { data } = result;

      if (!data.ok) {
        console.log(data)
        callback(false);
        return;
      }

      let usuario = data.data;

      dispatch({
        type: types.UsuarioRegister,
        payload: { id: usuario.id, nombre: usuario.nombre, email: usuario.email, perfil: usuario.perfil }
      });
      callback(true);
      
    } catch (error) {
      console.log(error);
      callback(false);
    }

  }

  return (
    <usuarioContext.Provider value={{
      state,
      login,
      register
    }}>
      {children}
    </usuarioContext.Provider>
  )
}

