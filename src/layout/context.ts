import { createContext } from '@/packages/@cyberutopian/hooks';
import { Dispatch, SetStateAction } from 'react';

export interface RootContextType {
  /** @param 密码修改弹窗触发器 */
  setPasswordModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const [RootProvider, useRootContext, RootContext] = createContext<RootContextType>();
