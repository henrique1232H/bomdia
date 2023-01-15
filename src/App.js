import React from 'react';
import './App.css';

export default function teste() {

  const iSee = () => {



    const button = document.querySelector("button")

    button.addEventListener("click", (evento) => {
      evento.preventDefault();

      alert("hello");
    })

    return <h1>agora</h1>

  }


  return iSee()
}

