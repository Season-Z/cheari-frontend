import ErrorBoundary from '@/components/error-boundary';
import { useModifyPassword } from '@/components/modify-password-modal';
import { Spin } from 'antd';
import { memo } from 'react';
import { RootProvider } from './context';
import './index.css';

const BlankLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const { loadUserInfo, loadUserInfoLoading } = useGlobalContext();
  // 用户密码修改
  const { setShowModal: setPasswordModalVisible, ModifyPasswordModal } = useModifyPassword();

  return (
    <RootProvider value={{ setPasswordModalVisible }}>
      <ErrorBoundary>
        <Spin spinning={false}>
          <div
            className="h-screen bg-cover"
            style={{
              backgroundImage:
                "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            }}
          >
            {children}
          </div>
        </Spin>
        {ModifyPasswordModal}
      </ErrorBoundary>
    </RootProvider>
  );
};

export default memo(BlankLayout);
