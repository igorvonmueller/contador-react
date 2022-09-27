import {useState} from "react"

export default function App() {

  let [numero, setNummer] = useState(0)

  function (aumentar){
    setNummer(Nummer+1)
  }
  function (diminuir){
    setNummer(Nummer-1)
  }
  function (zerar){
    Nummer-=Nummer
  }

  return <section>
    <h1>Contador</h1>
    <p>{numero}</p>
    <button onClick={diminuir}>Plus</button>
    <botton onClick={aumentar}>Minus</botton>
  </section>
   
}

