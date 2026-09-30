import Styles from '../css/header.module.css'

function Header (){
    return(
    <header className={Styles.cabecalho}>
        <nav>
            <a href='#'>Home</a>
            <a href='#'>Quem Somos</a>
            <a href='#'>Instrumentos</a>
            <a href='#'>Endereço</a>
            <a href='#'>Contato</a>
        </nav>
    </header>
    )
}

export default Header