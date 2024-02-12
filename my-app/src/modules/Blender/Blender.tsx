import React, {useEffect, useState} from 'react';
import {BlendResult} from '@/modules/Blender/components/BlendResult';
import styles from '@/modules/Blender/Blender.module.css';
import {BlenderContext, IBlenderContext} from '@/modules/Blender/BlenderContext';
import {BlenderInput} from '@/modules/Blender/components/BlenderInput';
import {testBlenderData} from '@/modules/Blender/constants/testBlenderData';

export const Blender = () => {

  const [values, setValues] = useState<string[]>([]);

  // Сделал так для теста, два BlenderInput - два initialValue.
  useEffect(() => {
    const initialValue = testBlenderData[0].options[0];
    setValues([initialValue, initialValue]);
  }, []);

  const context: IBlenderContext = {
    values: values,
    setValues: setValues,
  };

  return (
    <BlenderContext.Provider value={context}>
      <div className={styles.container}>
        <BlendResult />
        <div className={styles.inputList}>
          <BlenderInput id={0} data={testBlenderData} />
          <BlenderInput id={1} data={testBlenderData} />
        </div>
      </div>
    </BlenderContext.Provider>
  )
}