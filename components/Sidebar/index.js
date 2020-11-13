import styles from './index.module.scss';
const Sidebar = ({}) => {
   return (
      <div className={styles.sidebar}>
         <h1>Urban Morphological Zones</h1>
         <p>
            <strong>Warning:</strong> this visualization may take a significant
            amount of time to load on your machine.
         </p>
         <p>
            An Urban Morphological Zone is a set of urban areas laying less than
            200m apart. These areas are defined from land cover classes
            contributing to the urban tissue and function.
         </p>
         <p>
            This visualization explores those zones at a continent-level scale.
            Zoom and pan to explore the data.
         </p>
         <p>
            Data is provided by the{' '}
            <a href="https://www.eea.europa.eu/data-and-maps/data/urban-morphological-zones-2006-1">
               European Environmental Agency
            </a>
            .
         </p>
         <p>
            The dataset's 130,932 polygons are rendered using WebGL on a globe
            projection from <a href="https://deck.gl">deck.gl</a>. The code for
            this visualization is available on{' '}
            <a href="https://github.com/dbabbs/urban-morphological-zones">
               Github
            </a>
            .
         </p>
      </div>
   );
};

export default Sidebar;
