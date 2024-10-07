import { UploadOutlined } from '@ant-design/icons';
import { ProForm } from '@ant-design/pro-components';
import { CardBlock } from '@cyberutopian/components';
import { Button, message, Upload } from 'antd';
import React from 'react';
import useStyles from './index.style';
import OrganizationForm from './organization-form';

const validatorPhone = (rule: any, value: string[], callback: (message?: string) => void) => {
  if (!value[0]) {
    callback('Please input your area code!');
  }
  if (!value[1]) {
    callback('Please input your phone number!');
  }
  callback();
};

const BaseView: React.FC = () => {
  const { styles } = useStyles();
  // 头像组件 方便以后独立，增加裁剪之类的功能
  const AvatarView = ({ avatar }: { avatar: string }) => (
    <>
      <div className={styles.avatar_title}>头像</div>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <Upload showUploadList={false}>
        <div className={styles.button_view}>
          <Button>
            <UploadOutlined />
            更换头像
          </Button>
        </div>
      </Upload>
    </>
  );
  // const { data: currentUser, loading } = useRequest(() => {
  //   return queryCurrent();
  // });
  const getAvatarURL = () => {
    // if (currentUser) {
    //   if (currentUser.avatar) {
    //     return currentUser.avatar;
    //   }
    const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
    return url;
    // }
    // return '';
  };
  const handleFinish = async () => {
    message.success('更新基本信息成功');
  };
  return (
    <CardBlock>
      <div className="flex justify-start items-start gap-40">
        <div className="w-2/3">
          <ProForm
            layout="vertical"
            onFinish={handleFinish}
            submitter={{
              searchConfig: {
                submitText: '保存',
              },
              render: (_, dom) => dom[1],
            }}
            // initialValues={{
            //   ...currentUser,
            //   phone: currentUser?.phone.split('-'),
            // }}
          >
            {/* <PersonForm /> */}
            <OrganizationForm />
          </ProForm>
        </div>
        <div>
          <AvatarView avatar={getAvatarURL()} />
        </div>
      </div>
    </CardBlock>
  );
};
export default BaseView;
