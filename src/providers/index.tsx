import { ReactNode } from 'react';
import GlobalProvider from './global';

export default function CommonProvider({ children }: { children: ReactNode }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
