import React from 'react';
import styles from './index.module.scss';

const Tooltip = ({ position }) => {
   return (
      <div
         style={{
            left: position[0],
            top: position[1],
         }}
         className={styles.tooltip}
      >
         {position}
      </div>
   );
};
export default Tooltip;
