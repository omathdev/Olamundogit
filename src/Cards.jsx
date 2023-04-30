import "./CardsDesgin.css"
import hilda from "./hilda.jpg";
import hilda2 from "./hilda2.jpg";
import hilda3 from "./hilda3.jpg";

function Cards() {
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
          {listaUsuarios.map((usuario) => (
            
           <div className="Card">
            <div className="imagem">
                <img src={usuario.fotoPerfil} alt="" />
            </div>
            <h2>{usuario.nomeUsuario}</h2>
           </div>
           
         ))}
          </>
    );
}

export default Cards