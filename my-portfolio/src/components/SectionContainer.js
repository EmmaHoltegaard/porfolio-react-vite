import styled from "styled-components";

const SectionContainer = styled.section`
    max-width: 100vw;
    min-height: ${({ height }) => height || "auto"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 20px 30px 20px;
    border: dotted purple 2px;
    background: ${({ bg }) => bg || "#E4EDED"}
`

export default SectionContainer;