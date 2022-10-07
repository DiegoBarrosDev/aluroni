import styles from './Cabecalho.module.scss';
import {Outlet} from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';
import React from 'react';

export default function Cabecalho ({children}:{children?:React.ReactNode}){
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
                    A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet/>
        {children}
      </div>
    </>

  );
}