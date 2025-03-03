import styled from "styled-components";

const ContentWrapperHori = styled.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    //border: dotted blue 2px;
    background: ${({ bg }) => bg || "none"};
    border-radius: 20px;

    @media (max-width: 580px) {
        flex-direction: column;
        gap: 0px;
        width: 100%;
    }
`

export default ContentWrapperHori

