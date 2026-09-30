import Styles from '../css/section1.module.css'

function Section1 (){
    return(
        <section className={Styles.section1}>
            <div className={Styles.nossaLoja}>
                <h1> Nossa Loja - Instrumentos Musicais</h1>
                <p>Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!</p>
            </div>
            <div className={Styles.imagemLoja}> </div>
        </section>
        
    )
}

export default Section1