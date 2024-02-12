import {action, computed, makeObservable, observable} from 'mobx';
import {IBlenderStore} from '@/modules/Blender/stores/IBlenderStore';

export class BlenderStore implements IBlenderStore {

  // Массив для слияния.
  public values: string[];

  constructor(initialValues: string[] = []) {
    this.values = initialValues;
    makeObservable(this, {
      values: observable,
      setValues: action,
      result: computed,
    });
  }

  // Добавляет значение для слияния.
  public setValues(id: number, value: string) {
    const changedValues = this.values.slice();
    changedValues[id] = value;
    this.values = changedValues;
  }

  // Результат слияния.
  public get result() {
    if (this.values.length === 0) {
      return '?'
    }

    return this.values.join('');
  }
}