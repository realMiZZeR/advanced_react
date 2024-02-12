import React, {createContext, useContext} from 'react';

// Извлечение данных из контекста блендера.
export const useBlenderContext = () => {
  const data = useContext(BlenderContext);

  if (data === null) {
    throw new Error('Blender context doesnt exist');
  }

  return data;
}

// Переменные для контекста блендера.
export interface IBlenderContext {
  values: string[];
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
}

export const BlenderContext =
  createContext<IBlenderContext | null>(null);