import React from 'react';
import { styled, useTheme } from 'styled-components';
import { StyledH1 } from '../StyledFonts';
interface IconHeadingProps {
    heading: string;
    iconUrl: string;
    iconClass?: string;
    headingClass?: string;
    className?: string;
}
const StyledIconHeading = styled.div`
    display: flex;
    align-items: center;
`;
const StyledIcon = styled.div`
    display: flex;
    margin-right: 0.75rem;
`;
const StyledTitle = styled(StyledH1)`
    display: flex;
    margin-right: 0.75rem;
    color : ${props =>  props.theme.$textPrimary}
`;

const IconHeading = (props: IconHeadingProps) => {
  const { heading, iconUrl } = props;
  const theme  = useTheme()
  return (
    <StyledIconHeading className={props.className}>
        {iconUrl && 
            <StyledIcon className={props.iconClass}>
                <img src={iconUrl} alt={heading}></img>
            </StyledIcon>
        }
            <StyledTitle className ={props.headingClass} theme={theme}>
                {heading}
            </StyledTitle>
    </StyledIconHeading>
  )
}

export default IconHeading