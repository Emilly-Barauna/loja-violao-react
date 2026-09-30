import Styles from '../css/footer.module.css'
import Whats from '../whats.png'
import Insta from '../insta.png'
import Face from '../face.png'

function Rodape(){
    return(
        <footer className={Styles.rodape}>
        <h3>Nossa Loja - Instrumentos Musicais</h3>
        <p>Rua Tito,54 - Lapa</p>
        <p>São Paulo - Brasil</p>
        <a href="https://www.whatsapp.com/?lang=pt" target="_blank">
        <img className={Styles.Whats} src={Whats}/></a>
        <a href="https://www.instagram.com/" target="_blank">
        <img className={Styles.Insta} src={Insta}/></a>
        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank">
        <img className={Styles.Face} src={Face}/></a>
        </footer>
            
    ) 
    
}

export default Rodape