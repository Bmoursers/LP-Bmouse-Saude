/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const Email = async (values: any) => {
  return await api.post("/enviar-email", values);
};