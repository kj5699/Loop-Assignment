import React from 'react';
import { styled, useTheme } from 'styled-components';
import { theme } from '../../data/theme';
import { StyledH4, StyledP2 } from '../StyledFonts';
interface EndorsementCardProps{
    data : any[]
}

const Card = styled.div`
    background: #FFFFFF;
    padding : 4px 24px;
    border-radius : 0.5rem;
    display: flex;
    flex-direction: column;
`;
const DataItem =styled.div`
    display: flex;
    justify-content: space-between;
    align-items : center;
    padding: 20px 0;
    &:not(:last-of-type){
        border-bottom : 1px solid #EEEEEE;
    }
`;
const DataTitle =styled(StyledP2)<{ $large?: boolean; }>`
    font-size: ${props => props.$large ?'14px' :'12px'};
    line-height: ${props => props.$large ?'20px' :'18px'};
    font-weight: 400;
    color : ${props =>  props.theme.$textSecondary}
`;
const DataValue =styled(StyledH4)<{ $large?: boolean; }>`
    font-size: ${props => props.$large ?'20px' :'16px'};
    line-height: ${props => props.$large ?'24px' :'24px'};
    font-weight: 500;
    color : ${props =>  props.theme.$textPrimary}
`;
const EndorsementCard: React.FC<EndorsementCardProps> = (props: EndorsementCardProps) => {
  const { data : [data1, data2] } = props
  const fontTheme = useTheme()
  return (
    <Card>
        <DataItem >
                <DataTitle theme={fontTheme} $large >{data1.dataTitle}</DataTitle>
                <DataValue theme={fontTheme} $large> &#x20B9; {data1.dataValue}</DataValue>
        </DataItem>
        <DataItem >
                <DataTitle theme={fontTheme}>{data2.dataTitle}</DataTitle>
                <DataValue theme={fontTheme}>&#x20B9; {data2.dataValue}</DataValue>
        </DataItem>
    </Card>
  )
}

export default EndorsementCard