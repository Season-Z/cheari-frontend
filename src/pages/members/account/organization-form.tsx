import { ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Fragment } from 'react';

const OrganizationForm = () => {
  return (
    <Fragment>
      <ProFormText
        width="md"
        name="userCompany"
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
        name="userCompanyCode"
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
        name="userCompanyAddress"
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
        name="userType"
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
            value: 'enterprise',
          },
          {
            label: '国家机关',
            value: 'government',
          },
          {
            label: '事业单位',
            value: 'institutions',
          },
          {
            label: '其他',
            value: 'other',
          },
        ]}
      />
      <ProFormText
        width="md"
        name="userCompanyLeader"
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
        name="userContactor"
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
        name="userContactorPhone"
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
