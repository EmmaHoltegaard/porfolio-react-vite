import styled from "styled-components";

const ContentWrapperVert = styled.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    //border: dotted blue 2px;
    background: ${({ bg }) => bg || "none"};

    
    @media (max-width: 900px) {
     width: 90%;   
    }

    @media (max-width: 580px) {
     width: 100%;   
    }
`

export default ContentWrapperVert