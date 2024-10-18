import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Popconfirm } from 'antd';

const Content = () => {
  return (
    <ProForm
      name="basic"
      layout="horizontal"
      // submitter={{
      //   render: (props, doms) => {
      //     return [...doms, <Dropdown.Button menu={{ items, onClick: onMenuClick }}>操作</Dropdown.Button>];
      //   },
      // }}
      // onFinish={handleSubmit}
    >
      <ProFormText
        name="userUsername"
        label="开票日期"
        placeholder={'开票日期'}
        rules={[
          {
            required: true,
            message: '请输入开票日期',
          },
        ]}
      />
      <ProFormText
        name="userUsername"
        label="开票税号"
        placeholder={'开票税号'}
        rules={[
          {
            required: true,
            message: '请输入开票税号',
          },
        ]}
      />
      <ProFormText
        name="userUsername"
        label="开票名称"
        placeholder={'开票名称'}
        rules={[
          {
            required: true,
            message: '请输入开票名称',
          },
        ]}
      />
      <ProFormText
        name="userUsername"
        label="发票类型"
        placeholder={'发票类型'}
        rules={[
          {
            required: true,
            message: '请输入发票类型',
          },
        ]}
      />
      <ProFormText
        name="userUsername"
        label="发票号码"
        placeholder={'发票号码'}
        rules={[
          {
            required: true,
            message: '请输入发票号码',
          },
        ]}
      />
      <ProFormText
        name="userUsername"
        label="发票代码"
        placeholder={'发票代码'}
        rules={[
          {
            required: true,
            message: '请输入发票代码',
          },
        ]}
      />
    </ProForm>
  );
};

const Pop = () => {
  return (
    <Popconfirm
      icon={null}
      title={'开票信息录入'}
      description={<Content />}
      className="w-[100px]"
      trigger="hover"
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
      overlayClassName="confirm-tips"
    >
      <a className="cursor-pointer text-main-hover">开具发票</a>
    </Popconfirm>
  );
};

export default Pop;
