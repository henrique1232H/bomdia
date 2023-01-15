import React from 'react';
import './App.css';

export default function teste() {

 const iSee = () => {

    const texto = "Arroz";

    const button = document.querySelector("button");

    button.addEventListener("click", (evento) => {
      evento.preventDefault();
      document.body.innerHTML += `${texto}`;
      alert("hello world");
    })

 }

iSee();

 const color = () => {
     document.body.style.background = "#2A73D7";
   }

  color();

  const aAlert = () => {
    const pegandoOValor = document.querySelector("a");
    console.log(pegandoOValor)

    pegandoOValor.addEventListener("click", (evento) => {
      evento.preventDefault();
      

      alert("hello");
    })

  }

  aAlert();

  const showP = () => {
    const inputP = document.querySelector("p");

    inputP.innerHTML = "hello"
  }

  showP()

  return (
     <div>
        <h1>hello</h1>
     </div>
  )
}

