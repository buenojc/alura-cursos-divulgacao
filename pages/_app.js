import GlobalStyle from "../src/theme/GlobalStyle";

// Esse componente é um middleware que acompanha todas as páginas que são carregas
// Excelente para estilos globais e configurações.

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
        
        )
  }