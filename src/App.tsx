import { FormEvent, useState } from 'react'
import './App.css'

interface pessoaProps {
  nome : string,
  idade : number
}

function App() {

  const [inputNome, setInputNome] = useState("");
  const [inputAno, setInputAno] = useState("");
  const [inputAniversario, setInputAniversario] = useState(false);
  const [pessoa, setPessoa] = useState<pessoaProps>();
  const [signed, setSigned] = useState(false);

  function validarUsuario(e: FormEvent) {
    e.preventDefault();
    if(inputNome !== '' && inputAno !== '' ) {
      setPessoa({
        nome: inputNome,
        idade: calcularIdade()
      })
      setSigned(true);
      setInputNome('');
      setInputAno('');
      setInputAniversario(false);
    } else {
      alert("Preencha todos os campos!");
    }
  }

  function calcularIdade() {
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - parseInt(inputAno);
    if(inputAniversario) {
      return idade;
    } else {
      return idade - 1;
    }
  }

  return (
    <div className='container'>
      <h2 className='title'>Descubra sua idade</h2>
      <form className='form'>
      <label>Digite o seu nome?</label>
        <input 
        required
        value={inputNome}
        placeholder='Digite o seu nome'
        onChange={ (e) => setInputNome(e.target.value) }
        />
        <label>Digite o ano que nasceu?</label>
        <input 
        required
        value={inputAno}
        placeholder='Digite o ano de nascimento'
        onChange={ (e) => setInputAno(e.target.value) }
        />
        <label>Você já fez aniversário esse ano?</label>
        <div className='radio-button'>
        <label>Sim</label>
        <input 
        type='radio'
        onChange={ () => setInputAniversario(true)}
        />
        </div>
      <button onClick={ validarUsuario }>Descobrir idade</button>
      </form>
      
      { signed == true && (
        <div className='box'>
          <p>{pessoa?.nome}, você tem {pessoa?.idade} anos de idade!</p>
        </div>
      )}
    </div>
  )
}

export default App
