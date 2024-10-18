import { LazyExoticComponent, Suspense } from 'react';
import Loading from '../loading';

export default function LazyImportComponent(props: { lazyChildren: LazyExoticComponent<any> }) {
  return (
    <Suspense fallback={<Loading />}>
      <props.lazyChildren />
    </Suspense>
  );
}
