import HomeScreen from "../src/screens/HomeScreen";

export default HomeScreen;

// import React from "react";
// import Link from "../src/components/Link";

// function Title({children, as}){
//     //Componente Meta, genérico para receber qualquer tag
//     const Tag = as;

//     return(
//         <React.Fragment>

//             <Tag>{children}</Tag>

//             {/* CSS in JS - Parecido com styled components mas direto no NextJs */}
//             <style jsx>{`

//                 ${Tag}{
//                     color: red;
//                 }
            
//             `}</style>

//         </React.Fragment>
//     )
// }


// export default function HomePage(){
//     return(
//        <div>
//            <Title as="h2">Alura Cursos - Home</Title>
//            <Link href='/faq'>Ir para o FAQ </Link>
//        </div> 
//     )
// }