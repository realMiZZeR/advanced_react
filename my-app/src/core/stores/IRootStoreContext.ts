import {BlenderStore} from '@/modules/Blender/stores/BlenderStore';
import {IBlenderStore} from '@/modules/Blender/stores/IBlenderStore';

export interface IRootStoreContext {
  blender: IBlenderStore,
}

// Синглтон со всеми хранилищами.
export const RootStoreValue: IRootStoreContext = {
  blender: new BlenderStore(),
}