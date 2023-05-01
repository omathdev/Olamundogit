import "./MyButtonCss.css"
import "./AlteraçãoStyle.css"


function MyButton(){
    

    function sumir() {
        let inp = document.querySelector('.Alt') ;

      inp.style.display = 'flex'
} 



    return (
        <> 
        <button onClick={sumir}> Gerenciar Perfis</button> 
        </>
    )
}

export default MyButton 