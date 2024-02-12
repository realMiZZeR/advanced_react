import {ComponentType, CSSProperties} from 'react';
import {ISelectInput} from '@/modules/SelectInput/interfaces/ISelectInput';

// Компонент высшего порядка для стилизации различных полей ввода.
export const stylizeInput = (InputComponent: ComponentType<ISelectInput>) => {
  return function StylizedInput(props: ISelectInput) {
    const styles: CSSProperties = {
      backgroundColor: 'transparent',
      border: '5px solid white',
      outline: 'none',
      padding: 0,
      margin: 0,
      width: 50,
      height: 50,
      fontSize: 16,
      color: 'white',
    }

    return <InputComponent {...props} style={{...props.style, ...styles}} />
  }
}