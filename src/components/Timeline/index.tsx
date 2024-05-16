import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'
interface TimelineProps{
    stepData : any[],
    curStep : number
}

const Timeline = (props: TimelineProps) => {
    const {stepData, curStep} = props
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [offset, setOffset] = useState(0)



    useEffect(()=>{
        if(stepsRef.current.length > 0){
            const offsetWidthFirst = stepsRef.current[0]?.offsetWidth || 0;
            const offsetWidthLast = stepsRef.current[stepsRef.current.length - 1]?.offsetWidth || 0;
            setOffset(Math.floor((offsetWidthFirst) / 2 + (offsetWidthLast) / 2));
        }
        
    },[stepsRef.current])
    const calculateWidth = () =>{
        const width= Math.floor(((curStep - 1) / (stepData.length - 1))*100 )
        return Math.min(width, 100)
    }
    
    return(
    
    <div className= {styles.stepper}>
        {stepData && stepData.map((step, index) => {
            const isActive= index  === curStep
            const isCompleted = index + 1 < curStep
            const bgClass = isActive ? styles.active : isCompleted ? styles.completed : ''
            return (
                <div  className={styles.step + " " + bgClass} key={step.title + index}  ref ={el =>el &&  (stepsRef.current[index] = el)}>
                    <div  className={styles.iconWrap} >
                        <img src ={step.iconUrl}></img>
                    </div>
                    <p className={styles.title}>
                        {step.title}
                    </p>
                </div>
                
                ) })}

            <div className={`${styles.progressBar} `} style={{ width: `calc(100% - ${offset}px` , left:0}}>
                <div className={`${styles.progress} h-full bg-main-green`} style={{ width: `${calculateWidth()}%`}}>
                </div>
            </div>

    </div>
    )
  return (
    <div> Timeline Data</div>
  )
}

export default Timeline