import play from "../assets/seta_play.png"
import iconeCerto from "../assets/icone_certo.png"
import iconeQuase from "../assets/icone_quase.png"
import iconeErrado from "../assets/icone_erro.png"

export default function StatusIcon({ status, showQuestion }) {
    return (
        <>
            {status === "certo" && <img src={iconeCerto} alt="Ícone de certo" />}
            {status === "quase" && <img src={iconeQuase} alt="Ícone de quase" />}
            {status === "errado" && <img src={iconeErrado} alt="Ícone de errado" />}
            {status === "nao respondido" && <img onClick={showQuestion} src={play} alt="Ícone de play" />}
        </>
    )
}