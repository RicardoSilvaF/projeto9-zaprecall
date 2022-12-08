import Flashcard from "./Flashcard";
import Footer from "./Footer";
import logo from "../assets/logo.png"

export default function DeckScreen (){
    return(
        <div>
            <img src={logo} alt="logo do zap recall"/>
            <h1>ZapRecall</h1>
            <Flashcard/>
            <Flashcard/>
            <Flashcard/>
            <Flashcard/>
            <Footer/>
        </div>
    )
}