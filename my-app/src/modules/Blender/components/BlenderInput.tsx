import {stylizeInput} from '@/hoc/stylizeInput';
import {SelectInput} from '@/modules/SelectInput/SelectInput';
import {ISelectInputGroup} from '@/modules/SelectInput/interfaces/ISelectInputGroup';
import {observer} from 'mobx-react';
import {useRootStore} from '@/core/stores/RootStore';

interface IBlenderInput {
  id: number;
  data: ISelectInputGroup[];
}

const StylizedSelectInput = stylizeInput(SelectInput);

// Инпут, хранящий логику для блендера.
export const BlenderInput = observer(({id, data}: IBlenderInput) => {

  const {blender} = useRootStore();

  const onChange = (value: string) => {
    blender.setValues(id, value)
  }

  return <StylizedSelectInput data={data} onChange={onChange} />
})