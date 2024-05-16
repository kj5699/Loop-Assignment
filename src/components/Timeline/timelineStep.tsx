import styles from './styles.module.scss'
import { TimeLineStepProps } from '../../interfaces';
import { styled } from 'styled-components';
import { StyledH2 } from '../StyledFonts';
const Step = styled.div`
    z-index: 2;
    
`;
const IconWrap = styled.div`
    background-color: $border-grey;
    padding: 0.5rem;
    border-radius: 100%;
    width: 36px;
    height: 36px;
    margin-bottom: 1rem;
`;
const StepTitle = styled(StyledH2)`
    color : ${props =>  props.theme.$textSecondary}
`;
const TimeLineStep =(props: TimeLineStepProps) =>(
    <Step className={styles.step + " " + props.bgClass} ref ={props.ref}>
        <IconWrap className={styles.iconWrap} >
            <img src ={props.step.iconUrl}></img>
        </IconWrap>
        <StepTitle>
            {props.step.title}
        </StepTitle>
    </Step>
);
export default TimeLineStep;