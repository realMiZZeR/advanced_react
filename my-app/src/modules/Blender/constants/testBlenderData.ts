import {ISelectInputGroup} from '@/modules/SelectInput/interfaces/ISelectInputGroup';

// Массив для DOM-элемента «select».
export const testBlenderData: ISelectInputGroup[] = [
  {
    title: 'Простые',
    options: ['1', '3', '5', '7', '11', '13', '17'],
  },
  {
    title: 'Отрицательные',
    options: ['-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9', '-10'],
  },
] as const;