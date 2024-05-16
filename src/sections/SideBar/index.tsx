import React, { useState } from 'react'
import styles from  './styles.module.scss';
import { Link } from 'react-router-dom';
import IconHeading from '../../components/IconHeading';
import { SIDEBAR_OPTIONS } from '../../data/data';
import { SideBarOptionProps } from '../../interfaces';


const SideBarOption: React.FC<SideBarOptionProps> = ({ title, url, isActive , iconUrl = "", onClick })=> {
    return(
        <li className={`${styles.sidebar__list__item} ${isActive ? styles.activeTab :''}`} onClick={onClick}> 
            <IconHeading heading={title} iconUrl={iconUrl} headingClass={styles.title} />
        </li>
    )
}

const SideNavigation = () => {
  const [activeTab, setActiveTab] = useState(0) ;
  return (
    <aside className={styles.sidebar}>
        <ul className={styles.sidebar__list}>
            {SIDEBAR_OPTIONS.map((option, index) => 
                <SideBarOption key={option?.id} 
                    {...option} 
                    isActive={index === activeTab}
                    onClick={() => setActiveTab(index)}
                    />
            )}
        </ul>
        
    </aside>
  )
}

export default SideNavigation