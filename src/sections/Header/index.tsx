import React, { useCallback, useState } from 'react';
import styles from  './styles.module.scss';
import Button from '../../components/Button';
import { ALERT_CTA_DATA as alertCta, LOGO_IMAGE } from '../../data/data';

const HeaderLogo = () => {
    return (
        <div className={styles.header__logo}>
            <div className={styles.header__logo__image}>
                <img src={LOGO_IMAGE} alt="Comapny Logo"></img>
            </div>
        </div>
)};

const LazyAlertModal = React.lazy(() => import('../../components/AlertModal/Index'));
const Header = () => {
  const [showModal, setShowModal ] = useState(false);
  const  openModal = useCallback(() => setShowModal(true),[]);
  const  closeModal = useCallback(() => setShowModal(false),[]);
  
  return (
    <header className={styles.header}>
        <HeaderLogo/>
        <div className={styles.header__content}>
            <Button {...alertCta} onClick={openModal} type="alert" />
        </div>
        <LazyAlertModal show= {showModal} onClose={closeModal} />
    </header>
  )
}
export default Header;