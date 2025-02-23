import styled from "styled-components";

const ContentWrapperVert = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    //border: dotted blue 2px;
    background: ${({ bg }) => bg || "none"};
`

export default ContentWrapperVert