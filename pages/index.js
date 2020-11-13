import React, { useState, useEffect, useRef } from 'react';
import Map from '../components/Map';
import styles from '../styles/app.module.scss';
import SEO from '../components/SEO';
import Sidebar from '../components/Sidebar';
const Index = () => {
   return (
      <>
         <SEO />
         <div className={styles.app}>
            <Sidebar />
            <Map />
         </div>
      </>
   );
};

export default Index;
