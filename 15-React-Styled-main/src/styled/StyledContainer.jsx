import styled from "styled-components"


export default function StyledContainer ({children}) {

    const Container = styled.div`
    background-color:gray;
    width:80%;
    height:100vh;
    color:blue;
    `


    return (<>
    <h1>StyledContainer dışındaki h1</h1>
    <Container>
        <h1>StyledContainer içindeki h1</h1>
        {children}
    </Container>
    </>)
};