import React, { useCallback, useEffect, useState } from 'react';
import styles from  './styles.module.scss';
import Button from '../../components/Button';
import AlertModal from '../../components/AlertModal/Index';
import { ALERT_CTA_DATA as alertCta, API_URLS, LOGO_IMAGE } from '../../data/data';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlertsData } from './alertsSlice';

const HeaderLogo = () => {
    return (
        <div className={styles.header__logo}>
            <div className={styles.header__logo__image}>
                <img src={LOGO_IMAGE} alt="Comapny Logo"></img>
            </div>
        </div>
)};

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
        <AlertModal show= {showModal} onClose={closeModal} />
    </header>
  )
}

export default Header;