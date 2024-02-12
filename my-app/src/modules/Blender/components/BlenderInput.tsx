import {stylizeInput} from '@/hoc/stylizeInput';
import {SelectInput} from '@/modules/SelectInput/SelectInput';
import {useBlenderContext} from '@/modules/Blender/BlenderContext';
import {ISelectInputGroup} from '@/modules/SelectInput/interfaces/ISelectInputGroup';

interface IBlenderInput {
  id: number;
  data: ISelectInputGroup[];
}

const StylizedSelectInput = stylizeInput(SelectInput);

// Инпут, хранящий логику для блендера.
export const BlenderInput = ({id, data}: IBlenderInput) => {
  const {setValues} = useBlenderContext();

  const onChange = (value: string) => {
    setValues(prev => prev.map((item, index) => index === id ? value : item));
  }

  return <StylizedSelectInput data={data} onChange={onChange} />
}