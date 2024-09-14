import React from "react";

function Home() {
    return(
   <main>
   <img src="./public/my-picture.jpg" alt="" />

   <p>Hello World!Meu nome é <span>Daniel Galvão Mateus</span> e eu sou </p>

   <h2>Desenvolvedora Full Stack</h2>

   <p>Transformo necessidades em aplicações reais, evolventes e funcionais. 
    Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com
     soluções inovadoras e eficazes para desafios complexos.</p>

     <section className="icons">
        <button><img src="/public/GitHub.svg" alt="" />GitHub</button>
        <button><img src="/public/HTML.svg" alt="" />HTML</button>
        <button><img src="/public/CSS.svg" alt="" />CSS</button>
        <button><img src="/public/Vector.svg" alt="" />JavaScript</button>
        <button><img src="/public/React.svg" alt="" />React</button>
        <button><img src="/public/node.svg" alt="" />Node.js</button>
     </section>
   </main>
   )
}   

export default Home