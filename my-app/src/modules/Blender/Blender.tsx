import React from 'react';
import {BlendResult} from '@/modules/Blender/components/BlendResult';
import styles from '@/modules/Blender/Blender.module.css';
import {BlenderInput} from '@/modules/Blender/components/BlenderInput';
import {testBlenderData} from '@/modules/Blender/constants/testBlenderData';

// Количество полей выбора для слияний.
const inputs = [
  {
    id: 0,
    data: testBlenderData,
  },
  {
    id: 1,
    data: testBlenderData,
  },
  {
    id: 2,
    data: testBlenderData,
  },
  {
    id: 3,
    data: testBlenderData,
  },
]

// Компонент, позволяющий смешивать сущности.
export const Blender = () => {

  return (
      <div className={styles.container}>
        <BlendResult />
        <div className={styles.inputList}>
          {inputs.map(input => (
            <BlenderInput key={input.id} id={input.id} data={input.data} />
          ))}
        </div>
      </div>
  )
}