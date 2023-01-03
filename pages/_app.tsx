import "../styles/globals.css";
import type { AppProps } from "next/app";
import MyForm from "./components/myForm/MyForm";

export default function App({ Component, pageProps }: AppProps) {
  return <MyForm />;
}
