import styled from "styled-components"

const SectionTitle = styled.h2`
    font-family: "Poppins", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 3.5rem;
    text-align: center;
    color: ${({ color }) => color || "#772F2F"}
`

export default SectionTitle;