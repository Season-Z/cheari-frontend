import { ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Fragment } from 'react';

const OrganizationForm = () => {
  return (
    <Fragment>
      <ProFormText
        width="md"
        name="name"
        label="单位名称"
        rules={[
          {
            required: true,
            message: '请输入单位名称!',
          },
        ]}
      />
      <ProFormText
        width="md"
        name="name"
        label="组织机构代码"
        rules={[
          {
            required: true,
            message: '请输入组织机构代码!',
          },
        ]}
      />
      <ProFormTextArea
        width="xl"
        name="address"
        label="单位地址"
        rules={[
          {
            required: true,
            message: '请输入您的单位地址!',
          },
        ]}
      />

      <ProFormSelect
        width="sm"
        name="country"
        label="单位性质"
        rules={[
          {
            required: true,
            message: '请选择您单位性质!',
          },
        ]}
        options={[
          {
            label: '企业',
            value: '1',
          },
          {
            label: '国家机关',
            value: '2',
          },
          {
            label: '事业单位',
            value: '3',
          },
          {
            label: '其他',
            value: '4',
          },
        ]}
      />
      <ProFormText
        width="md"
        name="name"
        label="法人"
        rules={[
          {
            required: true,
            message: '请输入法人!',
          },
        ]}
      />
      <ProFormText
        width="md"
        name="name"
        label="联系人"
        rules={[
          {
            required: true,
            message: '请输入联系人!',
          },
        ]}
      />
      <ProFormText
        width="md"
        name="name"
        label="联系人电话"
        rules={[
          {
            required: true,
            message: '请输入联系人电话!',
          },
        ]}
      />
    </Fragment>
  );
};

export default OrganizationForm;
