import {  useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'
import { TimelineProps } from '../../interfaces';
import TimeLineStep from './timelineStep';

const calculateWidthPercent = (curStep:number, total:number ) =>{
    const width= Math.floor(((curStep - 1) / (total - 1))*100 )
    return Math.min(width, 100)
};

const Timeline = (props: TimelineProps) => {
    const {stepData, curStep} = props
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [offset, setOffset] = useState(0)
    useEffect(()=>{

        console.log(stepsRef);
        if(stepsRef.current.length > 0){
            const offsetWidthFirst = stepsRef.current[0]?.offsetWidth || 0;
            const offsetWidthLast = stepsRef.current[stepsRef.current.length - 1]?.offsetWidth || 0;
            setOffset(Math.floor((offsetWidthFirst) / 2 + (offsetWidthLast) / 2));
        }
        
    },[stepsRef.current])

    return(
    <div className= {styles.stepper}>
        {stepData && stepData.map((step, index) => {
            const isActive= index  === curStep
            const isCompleted = index + 1 < curStep
            const bgClass = isActive ? styles.active : isCompleted ? styles.completed : ''
            return <TimeLineStep step={step} 
                    key={step.title + index}  
                    ref ={el => el &&  (stepsRef.current[index] = el)}
                    bgClass={bgClass}
                    /> 
        })}
        <div className={`${styles.progressBar} `} style={{ width: `calc(100% - ${offset}px` , left:0}}>
            <div className={`${styles.progress}`} style={{ width: `${calculateWidthPercent(curStep, stepData.length)}%`}}>
            </div>
        </div>

    </div>
    )
  return (
    <div> Timeline Data</div>
  )
}
export default Timeline