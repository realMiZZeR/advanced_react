import {Blender} from '@/modules/Blender/Blender';

import '@/core/styles/global.css';
import styles from '@/pages/index.module.css';
import {RootStoreProvider} from '@/core/stores/RootStore';

// Корень проекта.
export default function App() {
  return (
    <div className={styles.container}>
      <RootStoreProvider>
        <Blender />
      </RootStoreProvider>
    </div>
  )
}