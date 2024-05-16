import React from 'react'
import Header from '../sections/Header';
import SideNavigation from '../sections/SideBar';
import Loading from '../components/Loading';
import { Outlet } from 'react-router-dom';
import styles from  './styles.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
            <SideNavigation/>
            <section className={styles.main__content}>
                <React.Suspense fallback={<Loading />}>
                        <Outlet  />
                </React.Suspense>
            </section>
        </main>
    </div>
  )
}

export default Dashboard;