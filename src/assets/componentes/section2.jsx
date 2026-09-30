import Styles from '../css/section2.module.css'
import imagemViolao from '../guitarrinha.jpg'

function Section2(){
    return(
        <section className={Styles.section2}>
            <div className={Styles.violao}>
                <img src={imagemViolao} className={Styles.imagemViolao} />
                <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco}>R$ 989,50</p>
            </div>
             <div className={Styles.violao}>
                <img src={imagemViolao} className={Styles.imagemViolao} />
                <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco}>R$ 989,50</p>
            </div>
             <div className={Styles.violao}>
                <img src={imagemViolao} className={Styles.imagemViolao} />
                <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco}>R$ 989,50</p>
            </div>
             <div className={Styles.violao}>
                <img src={imagemViolao} className={Styles.imagemViolao} />
                <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco}>R$ 989,50</p>
            </div>
        </section>
    )
}

export default Section2