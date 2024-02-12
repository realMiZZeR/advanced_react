import {Blender} from '@/modules/Blender/Blender';

import '@/core/global.css';
import styles from '@/pages/index.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <Blender />
    </div>
  )
}