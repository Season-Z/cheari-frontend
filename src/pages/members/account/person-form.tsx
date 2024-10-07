import { ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Fragment } from 'react';

const PersonForm = () => {
  return (
    <Fragment>
      <ProFormText
        width="md"
        name="name"
        label="用户名"
        rules={[
          {
            required: true,
            message: '请输入您的用户名!',
          },
        ]}
      />

      <ProFormSelect
        width="sm"
        name="country"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择您性别!',
          },
        ]}
        options={[
          {
            label: '男',
            value: 'male',
          },
          {
            label: '女',
            value: 'female',
          },
        ]}
      />
      <ProFormText
        width="md"
        name="ssss"
        label="职业"
        rules={[
          {
            required: true,
            message: '请输入您的职业!',
          },
        ]}
      />

      <ProFormTextArea
        width="xl"
        name="address"
        label="单位"
        rules={[
          {
            required: true,
            message: '请输入您的单位!',
          },
        ]}
      />
    </Fragment>
  );
};

export default PersonForm;
