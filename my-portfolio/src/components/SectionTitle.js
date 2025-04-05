import styled from "styled-components"

const SectionTitle = styled.h2`
    font-weight: 700;
    font-style: normal;
    font-size: 3.5rem;
    text-align: center;
    color: ${({ color }) => color || "#3e3838"};
    background: ${({ bg }) => bg || "none"};
    margin-bottom: 30px;

    @media (max-width: 420px) {
        font-size: 2.5rem;
    }
`

export default SectionTitle;