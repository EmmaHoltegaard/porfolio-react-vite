import styled from "styled-components";

const ProjectCard = ({ title, image, labels, description, code, demo }) => {
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
                {code && <ButtonWrapper><Button>{code}</Button></ButtonWrapper>}  {/* Render only if `code` exists */}
                {demo && <ButtonWrapper><Button>{demo}</Button></ButtonWrapper>}  {/* Render only if `demo` exists */}
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
    //border: black dotted 1px;
    gap: 25px;
`

const ImageWrapper = styled.div`
    
`

const Image = styled.img`
    border-left: 10px solid #BDB153;
    border-bottom: 10px solid #BDB153;
    width: 400px;
    height: 400px;
    object-fit: cover;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: flex-start;
    //border: 2px purple pink;
    flex-grow: 1;
    max-width: 100%;
    min-height: 100%;
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
    gap: 8px;
    justify-content: space-around;
    align-items: center;
`


const Label = styled.p`
    background: #2d2b2b;
    color: #E4EDED;
    border-radius: 5px;
    font-size: 0.8rem;
    padding: 3px 10px;
`

const Text = styled.div`
    //border: 2px, pink, dotted;
    padding: 20px 0px 30px 0px;

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

`

const ButtonWrapper = styled.div`
    height: 50px;
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    //border: red dotted 1px;

    // RESP: Knapperne skal ovenpå hinanden at a certain point
`

const Button = styled.button`
    background: #2d2b2b;
    color: #E4EDED;
    border-radius: 10px;
    font-size: 1rem;
    padding: 6px 10px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: border 0.2s ease-in-out;
    font-family: "Poppins", serif;


    &:hover {
        border-right: 3px solid #BDB153;
        border-bottom: 4px solid #BDB153;
    }
`