// import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import { useRootContext } from '@/layout/context';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
// import { FormattedMessage } from '@umijs/max';
import { Tabs } from 'antd';
// import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Settings from '../../../../config/defaultSettings';

// const useStyles = createStyles(({ token }: any) => {
//   return {
//     action: {
//       marginLeft: '8px',
//       color: 'rgba(0, 0, 0, 0.2)',
//       fontSize: '24px',
//       verticalAlign: 'middle',
//       cursor: 'pointer',
//       transition: 'color 0.3s',
//       '&:hover': {
//         color: token.colorPrimaryActive,
//       },
//     },
//     lang: {
//       width: 42,
//       height: 42,
//       lineHeight: '42px',
//       position: 'fixed',
//       right: 16,
//       borderRadius: token.borderRadius,
//       ':hover': {
//         backgroundColor: token.colorBgTextHover,
//       },
//     },
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100vh',
//       overflow: 'auto',
//       backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
//       backgroundSize: '100% 100%',
//     },
//   };
// });

// const Lang = () => {
//   const { styles } = useStyles();

//   return (
//     <div className={styles.lang} data-lang>
//       {SelectLang && <SelectLang />}
//     </div>
//   );
// };

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<any>({});
  const [type, setType] = useState<string>('person');

  const { setPasswordModalVisible } = useRootContext();

  // const { initialState, setInitialState } = useModel('@@initialState');
  // const { styles } = useStyles();
  // const intl = useIntl();

  // const fetchUserInfo = async () => {
  //   const userInfo = await initialState?.fetchUserInfo?.();
  //   if (userInfo) {
  //     flushSync(() => {
  //       setInitialState((s) => ({
  //         ...s,
  //         currentUser: userInfo,
  //       }));
  //     });
  //   }
  // };

  // const handleSubmit = async (values) => {
  // try {
  //   // 登录
  //   const msg = await login({ ...values, type });
  //   if (msg.status === 'ok') {
  //     const defaultLoginSuccessMessage = intl.formatMessage({
  //       id: 'pages.login.success',
  //       defaultMessage: '登录成功！',
  //     });
  //     message.success(defaultLoginSuccessMessage);
  //     await fetchUserInfo();
  //     const urlParams = new URL(window.location.href).searchParams;
  //     window.location.href = urlParams.get('redirect') || '/';
  //     return;
  //   }
  //   console.log(msg);
  //   // 如果失败去设置用户错误信息
  //   setUserLoginState(msg);
  // } catch (error) {
  //   const defaultLoginFailureMessage = intl.formatMessage({
  //     id: 'pages.login.failure',
  //     defaultMessage: '登录失败，请重试！',
  //   });
  //   console.log(error);
  //   message.error(defaultLoginFailureMessage);
  // }
  // };

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
          // logo={<img alt="logo" src="/logo.svg" />}
          title="用户研究系统"
          // subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
          initialValues={{
            autoLogin: true,
          }}
          // actions={[<FormattedMessage key="loginWith" id="pages.login.loginWith" defaultMessage="其他登录方式" />]}
          onFinish={async (values) => {
            console.log(values);
            // await handleSubmit(values );
          }}
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
            name="username"
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
            name="password"
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
