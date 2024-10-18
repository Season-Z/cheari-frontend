import { useRootContext } from '@/layout/context';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useGlobalContext } from '@/providers/global';
import { cyberFetch } from '@/request';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { saveUserInfo } = useGlobalContext();
  const [type, setType] = useState<string>('person');

  const { setPasswordModalVisible } = useRootContext();
  const router = useNavigate();

  const handleLogin = async (values) => {
    try {
      const result = await cyberFetch({ url: '/api/user/login', method: 'POST', data: { ...values, userType: 1 } });
      if (result.success) {
        message.success('登录成功');

        window.localStorage.setItem('token', result.result.token);
        saveUserInfo(result.result);

        router('/', { replace: true });
      }
    } catch (error) {
      console.log(error);
      message.error('登录失败，请重试！');
    }
  };

  return (
    <div className="flex">
      <img
        src={'/images/login-illustration.png'}
        width={800}
        height={100}
        className="h-screen w-auto"
        alt="illustration"
      />

      <CardBlock className="mx-auto w-[600px] pt-8 self-center shadow-md">
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          title="用户研究系统"
          initialValues={{
            autoLogin: true,
          }}
          onFinish={handleLogin}
        >
          <Tabs
            className="mb-[24px]"
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'person',
                label: '个人',
              },
              {
                key: 'organization',
                label: '机构',
              },
            ]}
          />

          <ProFormText
            name="userUsername"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder={'用户名'}
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          />
          <ProFormText.Password
            name="userPassword"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder={'密码'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
          <div className="mb-[24px]">
            <Link to={'/login/register'}>注册账号</Link>
            <a className="float-right" onClick={() => setPasswordModalVisible(true)}>
              忘记密码
            </a>
          </div>
        </LoginForm>
      </CardBlock>
    </div>
  );
};

export default Login;
