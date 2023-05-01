import "./AlteraçãoStyle.css"
import './MyButton.jsx'
import hilda from "./hilda.jpg";
import hilda2 from "./hilda2.jpg";
import hilda3 from "./hilda3.jpg";

function Alteração() {

  function Voltar() {
    const volt = document.querySelector('.Alt')
    const valor = document.querySelector('.Inpt')


  

    volt.style.display= 'none'
    

  }

  const listaUsuarios = [
    {
     nomeUsuario: "Usuario 1",
     fotoPerfil: hilda,
    },
    {
     nomeUsuario: "Usuario 2",
     fotoPerfil: hilda2,
    },
    {
     nomeUsuario: "Usuario 3",
     fotoPerfil: hilda3,
    },
 ];



return (
    <>
      <div className="Alt">
        
        
      {listaUsuarios.map((usuario) => (
            
            <div className="Card2">
             <div className="imagem2">
                 <img src={usuario.fotoPerfil} alt="" />
             </div>
             <input type="text"  className="Inpt" placeholder={usuario.nomeUsuario}/>
             <button onClick={Voltar}>Alterar</button>
            </div>
            
          ))}
      </div>

    </>
)

}

export default Alteração