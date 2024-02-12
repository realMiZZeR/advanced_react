// Интерфейс для хранилища слияния сущностей.
export interface IBlenderStore {
  values: string[];
  setValues(id: number, value: string): void;
  result: string;
}