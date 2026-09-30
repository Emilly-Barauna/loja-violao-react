import Styles from '../css/section3.module.css'

function Section3 (){
    return(
        <section className={Styles.section3}>
            <div className={Styles.mapa}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1227833051876!2d-46.69433512489202!3d-23.52808587882268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1790737244973!5m2!1spt-BR!2sbr" width="400" height="350" style={{ borderRadius: '10px' }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div className={Styles.localizacao}>
                <h2> Nossa Loja - Instrumentos Musicais</h2>
                <p>Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa área de 500m2, com uma variada gama de instrumentos, em um ambiente agradavel para toda a família!   </p>
            </div>
        </section>
    )
}

export default Section3