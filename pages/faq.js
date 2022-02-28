import { useEffect, useState } from "react";
import Link from "../src/components/Link";


export async function getServerSideProps() {

    // O getServerSideProps é executado à cada carregamento da página, já o getStaticProps só é rodado no build do site.
    // Em modo de desenvolvimento os dois são executados à cada carregamento.

    const API_URL_API = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

    const faq = await fetch(API_URL_API)
                .then(data => data.json())
                .then(faq => {return faq});

    return {
      props: {
         faq
      }, // will be passed to the page component as props
    }
  }

export default function FaqPage({faq}){

    return(
        <div>
            <h1>Alura Cursos - Home</h1>
            <Link href='/'>Ir para a Home</Link>

            <ul>
                {faq.map(({question, answer}) => {
                    return(
                        <li key={question}>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </li>
                    )
                })}
            </ul>

        </div> 
     )
}