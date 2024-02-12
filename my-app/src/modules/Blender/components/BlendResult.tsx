import {observer} from 'mobx-react';
import {useRootStore} from '@/core/stores/RootStore';

// Результат слияния сущностей.
export const BlendResult = observer(() => {
  const {blender} = useRootStore();

  return (
    <div>
      <h1>{blender.result}</h1>
    </div>
  )
});