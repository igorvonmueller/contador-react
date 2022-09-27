import {useState} from "react"

export default function App() {

  let [numero, setNummer] = useState(0)

  function (aumentar){
    setNummer(++Nummer)
  }
  function (diminuir){
    setNummer(--Nummer)
  }
  function (zerar){
    Nummer(-=Nummer)
  }

  return <section>
    <h1>Contador</h1>
    <p>{numero}</p>
    <button onClick={diminuir}>Plus</button>
    <botton onClick={aumentar}>Minus</botton>
    <button onClick= {zerar}>Null</button>
  </section>
   
}

