import React from 'react'
import { styled } from 'styled-components';
import './style.scss'
import { ButtonProps } from '../../interfaces';
import { ButtonTypeClassMap } from '../../data/data';

const StyledIconLeft = styled.div`
    height:16px;
    width:16px;
    img{
        height: 100%;
        width:  100%;
    }
`;
const StyledButton = styled.button<{ $direction: string}>`
    display:flex;
    align-items:center;
    gap: 0.5rem;
    flex-direction : ${props => props.$direction ==='right' ? 'row-reverse' : 'row' }
`;

const Button:React.FC<ButtonProps> = ({ label , onClick, iconUrl, iconDirection = 'left', type= "primary"}) => {
  const buttonClass = ButtonTypeClassMap[type]
  return (
    <StyledButton onClick= {onClick} className={buttonClass} $direction={iconDirection}>
        {iconUrl &&
            <StyledIconLeft>
                <img src={iconUrl} alt=''></img>
            </StyledIconLeft>
        }
        {type !== "icon" ? label : ''}
    </StyledButton>
  )
}

export default React.memo(Button);