import React from "react";
import InsuranceInfo from "../insuranceInfo";
import Button from "../Button";
import { ModelContentProps } from "../../interfaces";
import { StyledH1, StyledH2 } from "../StyledFonts";
import { styled } from "styled-components";


const ClaimCountText = styled(StyledH1)`
    color : ${props =>  props.theme.$primaryRed};
    margin-bottom : 6px
`;
const ClaimCountDescription = styled(StyledH2)`
    color : ${props =>  props.theme.$textPrimary};
    margin-bottom : 1.5rem
`;
const ClaimInfo = styled.div`
    background-color: ${props =>  props.theme.$primaryRedLight};
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1rem;
    padding: 16px 18px;
    border-radius: 8px;
`;
const ModalContent = styled.div`
    padding: 1.5rem;
    border-bottom: 1px solid ${props =>  props.theme.$borderGrey};
`;

const ModelContent: React.FC<ModelContentProps> = ({
  image,
  title,
  tags,
  claimsUnderQuery,
}) => {
    return(
            <ModalContent>
            <InsuranceInfo title={title} image={image} tags={tags} />
            <ClaimInfo>
                <ClaimCountText>
                {claimsUnderQuery} Claims Under Query !
                </ClaimCountText>
                <ClaimCountDescription>
                    Documents pending from employee
                </ClaimCountDescription>
                <Button label={'View Claim >'} onClick={null} iconUrl={''} />
            </ClaimInfo>
            </ModalContent>
)};

export default ModelContent;