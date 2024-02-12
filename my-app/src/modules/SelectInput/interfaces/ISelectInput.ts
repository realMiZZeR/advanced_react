import {ISelectInputGroup} from '@/modules/SelectInput/interfaces/ISelectInputGroup';
import {CSSProperties} from 'react';

export interface ISelectInput {
  data: ISelectInputGroup[];
  style?: CSSProperties;
  onChange?(value: string): void;
}