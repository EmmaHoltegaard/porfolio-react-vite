import styled from "styled-components";

const ContentWrapperHori = styled.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px 20px;
    //border: dotted blue 2px;
    background: ${({ bg }) => bg || "none"};
    border-radius: 20px;
`

export default ContentWrapperHori

