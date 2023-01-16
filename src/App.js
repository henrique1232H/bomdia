import React from 'react';
import './App.css';


export default function teste() {

 

 const color = () => {
     document.body.style.background = "#2A73D7";
   }

  color();

  const aAlert = () => {
    const pegandoOValor = document.querySelector("a");
    console.log(pegandoOValor)

   pegandoOValor.addEventListener("click", (evento) => {
      evento.preventDefault();

      alert("BOLSONARO")
   })

  }

  aAlert();

  const showP = () => {
    const inputP = document.querySelector("p");

    inputP.innerHTML = "fui enviado";
    return true;
  }

  const iSee = () => {

    const texto = "Arroz";

    const button = document.querySelector("button");

    button.addEventListener("click", (evento) => {
      evento.preventDefault();
      document.body.innerHTML += `${texto}`;
      alert("hello world");

       showP();
    })

 }

iSee();

  return (
    <h1>teste</h1>
  )
}

