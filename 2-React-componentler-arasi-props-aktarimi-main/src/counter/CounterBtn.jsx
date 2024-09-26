

export default function CounterBtn({ pStyles, counterBtnStyles }) {



    return (<>
        <p className={pStyles.join(" ")}>This button is disabled</p>
        <button className={counterBtnStyles.join(" ")}>
            Increment
        </button>

    </>)
};
