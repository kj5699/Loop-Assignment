import styles from './styles.module.scss'
import { styled, useTheme } from 'styled-components';
import { StyledH1, StyledP1, StyledP2 } from '../StyledFonts';
interface InsuranceInfoProps {
    title : string;
    image : string;
    tags : string[];
};

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

    const theme = useTheme();
    return (<div className={styles.info}>
        <div className={styles.info__image}>
            <img src ={image}></img>
        </div>
        <div className={styles.info__content}>
            <InsuranceTitle theme={theme}>{title}</InsuranceTitle>
            <div className={styles.info__content__tags}>

                {tags.map((tag: string, index: number) => 
                    <Tag key= {`${tag}_${index}`} theme={theme}>{tag}</Tag>
                )}

            </div>
        </div>
    </div>)
}
export default InsuranceInfo