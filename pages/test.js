import Head from "next/head"

export default function Test() {
  return (

    <>
    
    <Head>
     
      <meta property="og:url"           content="https://viassim.com.br " />
      <meta property="og:type"          content="website" />
      <meta property="og:title"         content="Minha foto a venda" />
      <meta property="og:description"   content="Foto a venda com todas as informações necessárias" />
      <meta property="og:image"         content="https://site-viassim.s3-sa-east-1.amazonaws.com/54242826485603061bb3c3678adc800165156ee.jpeg" />
      
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
      data-href="https://viassim.com.br" 
      data-layout="button_count">
      </div>

    </div>
    
    </>
  )
}