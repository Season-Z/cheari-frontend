import { CardBlock } from '@/packages/@cyberutopian/components';
import { useGlobalContext } from '@/providers/global';
import { cyberFetch } from '@/request';
import { ProForm } from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AvatarView from './avatar-view';
import OrganizationForm from './organization-form';
import PersonForm from './person-form';

const BaseView: React.FC = () => {
  const { user, saveUserInfo } = useGlobalContext();
  const router = useNavigate();
  const imgPath = useRef<string>(user.userAvatar);

  const uploadSuccess = (path) => {
    imgPath.current = path;
  };

  const handleFinish = async (values) => {
    const { sex, op, ...rest } = values;

    const result = await cyberFetch({
      url: '/api/user',
      method: 'PUT',
      data: { userType: 1, ...rest, userAvatar: imgPath.current },
    });

    if (result.success) {
      saveUserInfo(result.result);
      message.success('更新基本信息成功');
      router('/members/person', { replace: true });
    }
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
            initialValues={user || {}}
          >
            {user?.userType === 1 ? <PersonForm /> : <OrganizationForm />}
          </ProForm>
        </div>
        <div>
          <AvatarView uploadSuccess={uploadSuccess} />
        </div>
      </div>
    </CardBlock>
  );
};
export default BaseView;
