import Head from "next/head"

export default function Test() {
  return (

    <>
    
    <Head>
     
      <meta property="og:url"           content="https://alura-cursos-divulgacao.vercel.app/test" />
      <meta property="og:type"          content="website" />
      <meta property="og:title"         content="Estou vendendo uma foto na ViAssim" />
      <meta property="og:description"   content="Venha ver minha foto na ViAssim!" />
      <meta property="og:image"         content="https://site-viassim.s3-sa-east-1.amazonaws.com/20761039286010661533429469df6001658596c.jpeg" />
      
    </Head>

    <div>

    {/* <!-- Load Facebook SDK for JavaScript --> */}
      <script 

        dangerouslySetInnerHTML={{
          __html: `
          
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          
          `
        }}
      />

      <div class="fb-share-button" 
      data-href="https://alura-cursos-divulgacao.vercel.app/test" 
      data-layout="button_count">
      </div>

    </div>
    
    </>
  )
}