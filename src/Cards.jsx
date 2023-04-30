import "./CardsDesgin.css";
import hilda from "./hilda.jpg";
import hilda2 from "./hilda2.jpg";
import hilda3 from "./hilda3.jpg";

function Cards() {
  /* Esse array de objetos vai colocar todos seus usuario e fotos aqui e fica mais faicl de voce controlar */
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
    <div className="Principal">
      {/* Card quye vai conter imagem e nome do usuario */}
      {/* Tem que fazer o map para fazer a chamada do array que eu construi la encima */}
      {listaUsuarios.map((usuario) => (
        <div className="Card">
          {/* Imagem do usuario vai aqui */}
          <div className="imagem">
            <img src={usuario.fotoPerfil} alt="" />
          </div>
          {/* aqui voce chama o nome do usuario usando o metodo do map e o nome da classe la no array */}
          <h2>{usuario.nomeUsuario}</h2>
        </div>
      ))}
    </div>
  );
}

export default Cards;
