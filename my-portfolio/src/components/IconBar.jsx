import styled from "styled-components";

const IconBar = () => {
    return(
        <IconWrapper>
            <a href="https://www.linkedin.com/in/emmaholtegaard/" target="_blank" rel="noopener noreferrer">
            <Icon src="/icons/linkedin-white.svg" alt="LinkedIn"/>
            </a>
            <a href="https://github.com/EmmaHoltegaard/" target="_blank" rel="noopener noreferrer">
            <Icon src="/icons/github-white.svg" alt="Github"/>
            </a>
        </IconWrapper>
    )
}

export default IconBar;

const IconWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    //border: 2px black dotted;
    gap: 20px;
    margin-top: 20px;
`

const Icon = styled.img`
    width: 35px;
    height: 35px;
    //border: pink dotted 2px;
    transition: transform 0.2s ease-in-out;
    
    &:hover {
    transform: scale(1.1); /* Slightly enlarge */
    }

    `