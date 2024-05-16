import React, { useEffect } from 'react'
import Timeline from '../../components/Timeline';
import styles from  './styles.module.scss';
import Button from '../../components/Button';
import InsuranceInfo from '../../components/insuranceInfo';
import {TIMELINE_STEPS, WARNING_DATA, generateEndorsemnetCards } from '../../data/data';
import IconHeading from '../../components/IconHeading';
import EndorsementCard from '../../components/EnrollmentCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEndorsementData } from './endorsementSlice';
import Loading from '../../components/Loading';
import { EndorsementDataGridProps } from '../../interfaces';

const EndorsementDataGrid:React.FC<EndorsementDataGridProps> = ({ data }) =>(
    <div className={styles.enrollmentSection__bottom__dataGrid}>
        {generateEndorsemnetCards(data).map((dataItem) => (
            <div className={styles.enrollmentSection__bottom__dataGrid__item}>
                <IconHeading heading={dataItem.title} 
                            iconUrl={dataItem.iconUrl} 
                            className={styles.enrollmentSection__bottom__dataGrid__item__heading} />
                
                <EndorsementCard data = {dataItem.cardData} />
            </div>
        ))}         
    </div>

)

const Enrollment = () => {
  const { data, status } = useSelector((state:any) => state?.endorsements);
  const dispatch:any = useDispatch();
  useEffect(() => { 
    if(status === 'idle' && fetchEndorsementData ){
        dispatch(fetchEndorsementData());
    }
  },[])

  if(status === 'loading'){
    return <Loading />
  }
  if(data && status ==='succeeded'){
  return (
    <section className={styles.enrollmentSection}>
        <div className={styles.enrollmentSection__top}>
            <div className={styles.enrollmentSection__top__header}>
                <InsuranceInfo  {...data?.insurance}  />
                <Button label={'Download Member List'} onClick={null} iconUrl={'/assets/downLoadIcon.svg'}  />
            </div>
            <div className={styles.enrollmentSection__top__timeline}>
                <Timeline stepData={TIMELINE_STEPS} curStep={0} />
            </div>
        </div>

        <div className={styles.enrollmentSection__bottom}>
            <EndorsementDataGrid  data={data}/>
            <IconHeading heading={WARNING_DATA.text} 
                        iconUrl={WARNING_DATA.icon} 
                        headingClass={styles.enrollmentSection__bottom__warningText}
                        />

        </div>
    </section>
  )}
}

export default Enrollment