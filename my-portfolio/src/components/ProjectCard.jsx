import styled from "styled-components";

const ProjectCard = ({ title, image, labels, description, code, codeLink, demo, demoLink }) => {
    return(
        <OuterContainer>
            <ImageWrapper><Image src={image}/></ImageWrapper>
            <InfoWrapper>
                <InnerInfoWrapperTop>
                    <LabelWrapper>
                        {/* Map over labels to generate a Label for each */}
                        {labels.map((label, index) => (
                            <Label key={index}>{label}</Label>
                        ))}
                    </LabelWrapper>
                    <Text>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </Text>
                </InnerInfoWrapperTop>
                <ButtonsWrapper>
                {code && <ButtonWrapper><a href={codeLink}><Button>{code}</Button></a></ButtonWrapper>}  {/* Render only if `code` exists */}
                {demo && <ButtonWrapper><a href={demoLink}><Button>{demo}</Button></a></ButtonWrapper>}  {/* Render only if `demo` exists */}
                </ButtonsWrapper>
            </InfoWrapper>
        </OuterContainer>
    )
}

export default ProjectCard;

const OuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    //border: red dotted 3px;
    gap: 25px;

    @media (max-width: 820px) {
        flex-direction: column;
    }

`

const ImageWrapper = styled.div`
    
`

const Image = styled.img`
    border-left: 10px solid #d2d277;
    border-bottom: 10px solid #d2d277;
    width: 400px;
    height: 400px;
    object-fit: cover;

    @media (max-width: 1015px) {
        width: 300px;
        height: 300px;
    }

    @media (max-width: 820px) {
        width: 100%;
        height: auto;
    }
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: flex-start;
    //border: 3px dotted blue;
    flex-grow: 1;
    max-width: 100%;
    //min-height: 100%;
    padding: 12px 0px;
`

const InnerInfoWrapperTop = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: flex-start;
    //border: 2px green dotted;
    flex-grow: 1;
    width: 100%;
`

const LabelWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;

`


const Label = styled.p`
    //background: #2d2b2b;
    //color: #E4EDED;
    color: #2d2b2b;
    //background: #E4EDED;
    border: 2px solid #2d2b2b;
    border-radius: 5px;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 2px 6px;
`

const Text = styled.div`
    //border: 2px, pink, dotted;
    padding: 30px 0px 30px 0px;

    h3 {
        font-size: 1.2rem;
        padding-bottom: 10px;
    }

    p {
        font-size: 1rem;
        //font-size: 16px;
    }
    
`

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media (max-width: 400px) {
        flex-direction: column;
        gap: 0px;
        width: 100%;
    }
`

const ButtonWrapper = styled.div`
    height: 50px;
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    //border: red dotted 1px;

`

const Button = styled.button`
    background: #2d2b2b;
    color: #fffaed;
    border-radius: 10px;
    font-size: 1rem;
    padding: 6px 10px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    min-width: 100px;
    transition: border 0.2s ease-in-out;
    font-family: "Poppins", serif;

    &:hover {
        border-right: 3px solid #d2d277;
        border-bottom: 4px solid #d2d277;
    }

`