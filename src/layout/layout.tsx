import ErrorBoundary from '@/components/error-boundary';
import { useModifyPassword } from '@/components/modify-password-modal';
import { routes } from '@/router';
import { routerStates } from '@cyberutopian/hooks';
import { Layout } from '@cyberutopian/layout';
import { LayoutType } from '@cyberutopian/layout/dist/typings/layout';
import debounce from 'lodash/debounce';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { colorsEnums } from '../specific/enums';
import Content from './components/content/content';
import Header from './components/header';
import Navigation from './components/navigation';
import { navigationWidth } from './config';
import { RootProvider } from './context';
import './index.css';

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  // 用户密码修改
  const { setShowModal: setPasswordModalVisible, ModifyPasswordModal } = useModifyPassword(false);
  // 菜单是否展开
  const [isExpanded, setIsExpanded] = useState(true);
  // const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  // 浏览器可视区宽度高度
  const [clientRect, setClientRect] = useState({
    clientWidth: document.body.clientWidth < 1400 ? 1400 : document.body.clientWidth,
    clientHeight: document.body.clientHeight,
  });

  const onExpand: LayoutType['onExpand'] = (expanded) => {
    setIsExpanded(expanded);
  };

  // 菜单宽度
  const navWidth = useMemo(() => {
    return isExpanded ? navigationWidth.large : navigationWidth.small;
  }, [isExpanded]);

  // 内容宽度
  const contentWidth = useMemo(() => clientRect.clientWidth - navWidth - 4, [navWidth, clientRect.clientWidth]);
  // 内容高度
  const contentHeight = useMemo(() => clientRect.clientHeight - 64, [clientRect.clientHeight]);

  const oldPathname = useRef<string>('');
  useEffect(() => {
    if (oldPathname.current && oldPathname.current !== pathname) {
      Reflect.deleteProperty(routerStates, oldPathname.current);
    }
    // @ts-ignore
    oldPathname.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const resizeCallback = debounce(() => {
      // 最小宽度1200
      setClientRect({
        clientWidth: document.body.clientWidth < 1400 ? 1400 : document.body.clientWidth,
        clientHeight: document.body.clientHeight,
      });
    }, 200);

    window.addEventListener('resize', resizeCallback);
    return () => {
      window.removeEventListener('resize', resizeCallback);
    };
  }, []);

  return (
    <RootProvider value={{ setPasswordModalVisible }}>
      <ErrorBoundary>
        <Layout
          className="w-full h-full bg-no-repeat bg-cover text-14 flex justify-start items-start"
          style={{ backgroundImage: 'url("/images/layout-bg.png")' }}
          loading={false}
          theme={{ color: colorsEnums['main'], bg: '#E8F8FF' }}
          routes={routes}
          onExpand={onExpand}
        >
          <Navigation />
          <main className="bg-transparent relative h-full flex-1 shrink-0" style={{ width: `${contentWidth}px` }}>
            <Header />
            <Content width={contentWidth} height={contentHeight} style={{ height: `${contentHeight}px` }}>
              {children}
            </Content>
          </main>
          {ModifyPasswordModal}
        </Layout>
      </ErrorBoundary>
    </RootProvider>
  );
};

export default memo(LayoutWrapper);
