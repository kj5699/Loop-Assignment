import styles from './styles.module.scss'
import { TimeLineStepProps } from '../../interfaces';
import { styled } from 'styled-components';
import { StyledH2 } from '../StyledFonts';
import React, { LegacyRef } from 'react';
const Step = styled.div`
    z-index: 2;
    
`;
const IconWrap = styled.div`
    background-color: ${props => props.theme.$borderGrey};
    border-radius: 100%;
    width: 36px;
    height: 36px;
    margin-bottom: 1rem;
    align-content:center;
`;
const StepTitle = styled(StyledH2)`
    color : ${props =>  props.theme.$textSecondary}
`;
const TimeLineStep =React.forwardRef((props: TimeLineStepProps, ref:LegacyRef<HTMLDivElement>) =>(
    <Step className={styles.step + " " + props.bgClass} ref ={ref}>
        <IconWrap className={styles.iconWrap} >
            <img src ={props.step.iconUrl}></img>
        </IconWrap>
        <StepTitle>
            {props.step.title}
        </StepTitle>
    </Step>
));
export default TimeLineStep;