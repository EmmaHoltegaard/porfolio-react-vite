import styled from "styled-components"

const SectionTitle = styled.h2`
    font-family: "Poppins", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 3.5rem;
    text-align: center;
    color: ${({ color }) => color || "#2d2b2b"};
    background: ${({ bg }) => bg || "none"};
    margin-bottom: 30px;
`

export default SectionTitle;