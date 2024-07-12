import "@/styles/globals.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-8 mt-12">
      <Component {...pageProps} />
    </div>
  );
}
