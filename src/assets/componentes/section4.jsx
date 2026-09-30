import Styles from '../css/section4.module.css'
import imagemWhats from '../whats.png'
import imagemInsta from '../insta.png'
import imagemFace from '../face.png'

function Section4 (){
    return(
        <section className={Styles.formulario}>
        <div className={Styles.cadastro}>
            <form action="">
        <fieldset>
        <label>Entre com o seu nome:</label>
        <input type="text" name="nome_usuario" size="30" maxLength="30" required placeholder="Digite seu nome aqui:"/>
        <label>Entre com o seu e-mail:</label>
        <input type="email" name="email_usuario" size="30" maxLength="30" required placeholder="Digite seu email aqui:"/>
        <label>Faça seu pedido:</label>
        <textarea name="pedido_usuario" cols="30" rows="5" placeholder="Faça seu pedido por aqui:"></textarea>
        <input type="submit" value="Enviar"/>
    </fieldset>
     </form>
     </div>
     <div className={Styles.redeSocial}>
        <h2>Acesse também nossas redes socias:</h2>
         <a href="https://www.whatsapp.com/?lang=pt" target="_blank"> 
         <img className={Styles.imagemWhats} src={imagemWhats}/></a>
        <a href="https://www.instagram.com/" target="_blank"> 
        <img className={Styles.imagemInsta} src={imagemInsta}/></a>
        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank"> 
        <img className={Styles.imagemFace} src={imagemFace}/></a>

</div>
     
        </section>
    )
}

export default Section4