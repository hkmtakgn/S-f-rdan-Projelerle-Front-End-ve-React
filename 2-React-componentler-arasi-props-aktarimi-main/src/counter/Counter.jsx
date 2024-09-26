import { useState } from "react";
import { StyledH1 } from "../titleStyles/StyledH1";
import CounterBtn from "./CounterBtn";


export default function Counter({paragraphStyles,counterBtnStyles}) {
    const [count, setCount] = useState(0)
const pStyles = paragraphStyles.map(item => item)

    return (<>
        <StyledH1>
            Counter :
        </StyledH1>
        <CounterBtn pStyles={pStyles} counterBtnStyles={counterBtnStyles} />
        <p className={pStyles.join(" ")}>App olan h1 başlığı App.jsx içinde</p>
        <p className={pStyles.join(" ")}>Counter : olan h1 basşlığı ise StyledH1 içinde</p>
        <p className={pStyles.join(" ")}>Bu paragraf yazıları ise componentler arası aktarım ile sağlandı</p>
    </>)
};
