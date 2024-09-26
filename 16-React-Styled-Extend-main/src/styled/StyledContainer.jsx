import styled from "styled-components"

const Container = styled.div`
    background-color:gray;
    width:80%;
    height:100vh;
    color:blue;
    `
    const ExtendContainer = styled(Container)`
    width:100%;
    height:100%;
    margin 0;
    `


export default function StyledContainer ({children}) {

    

    return (<>
    <h1>StyledContainer dışındaki h1</h1>
    <Container>
        <h1>StyledContainer içindeki h1</h1>
        {children}
    </Container>
    <ExtendContainer>
        <h1>ExtendContainer içindeki h1 başlık</h1>
        <p>styled{'(Container)'} ile Container özelliklerine devam edildi.</p>
    </ExtendContainer>
    </>)
};