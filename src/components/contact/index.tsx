import { MailOutlined, PhoneOutlined, WechatOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { Fragment } from 'react';

const Contact = () => {
  return (
    <Popconfirm
      icon={null}
      title={null}
      description={
        <Fragment>
          <p className="mb-3">联系我们</p>
          <div className="flex gap-2">
            <PhoneOutlined />
            010 68017358
          </div>
          <div className="flex gap-2">
            <MailOutlined />
            lengy@cheari.com
          </div>
          <div className="flex gap-2">
            <WechatOutlined />
            739254206
          </div>
        </Fragment>
      }
      className="w-[100px]"
      trigger="hover"
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
      overlayClassName="confirm-tips"
    >
      <a className="cursor-pointer text-main-hover">联系我们</a>
    </Popconfirm>
  );
};

export default Contact;
