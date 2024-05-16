import { styled } from 'styled-components';
import { StyledH1, StyledP2 } from '../StyledFonts';
import { InsuranceInfoProps } from '../../interfaces';


const StyledInsuranceInfo = styled.div`
    display: flex;
    margin-right: 32px;
    @media screen and (max-width:768px) {
        flex-direction: column;
        align-items:start;
    }
`;
const InsuranceContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 1rem;
    @media screen and (max-width:768px) {
        margin: 1rem 0 0 0;
    }
`;
const InsuranceTags = styled.div`
    display: flex;
    gap: 0.5rem;
    @media screen and (max-width:768px) {
        flex-direction: column;
        align-items:start;
    }
`;

const InsuranceImage = styled.img`
    width: 48px;
    width: 48px;
    border-radius: 0.5rem;
`;
const InsuranceTitle = styled(StyledH1)`
    color : ${props =>  props.theme.$textPrimary}; 
    margin-bottom: 0.25rem;
    text-align: start;
`;
const Tag = styled(StyledP2)`
    text-align: start;
    color : ${props =>  props.theme.$textPrimary};
    &:not(:last-of-type){
        &::after {
            content: ".";
            margin-left: 0.5rem;
        }
    }
`

const InsuranceInfo = (props: InsuranceInfoProps) => {
    const { title, image, tags} = props;

    return (<StyledInsuranceInfo>
        <InsuranceImage src ={image} alt=''/>
        <InsuranceContent>
            <InsuranceTitle >{title}</InsuranceTitle>
            <InsuranceTags>
                {tags.map((tag: string, index: number) => 
                    <Tag key= {tag + index}>{tag}</Tag>
                )}
            </InsuranceTags>
        </InsuranceContent>
    </StyledInsuranceInfo>)
}
export default InsuranceInfo