import { getDomainRoutes } from '@/layout/config/data';
import { useGlobalState } from '@cyberutopian/hooks';
import { useRef } from 'react';

const useGlobalData = () => {
  const domains = useRef(getDomainRoutes());
  const [global, setGlobal] = useGlobalState({ domainRouteKey: domains.current.domainRoutes?.[0].key });

  return { global, setGlobal, domains: domains.current };
};

export default useGlobalData;
