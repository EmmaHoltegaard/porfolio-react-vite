import styled from "styled-components";

const SectionContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px 0px 20px;
    //border: dotted purple 2px;
    background: ${({ bg }) => bg || "#f9edf6"}
`

export default SectionContainer;