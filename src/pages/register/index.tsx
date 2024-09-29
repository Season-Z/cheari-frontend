import { CardBlock } from '@cyberutopian/components';
import { Tabs } from 'antd';
import React, { useState } from 'react';
import Organization from './organization';
import Person from './person';

const Register: React.FC = () => {
  const [type, setType] = useState<string>('person');

  return (
    <div className="flex">
      <div
        className={'w-auto h-screen grid place-content-center relative'}
        style={{ background: 'linear-gradient(225deg, #795FFE 0%, #4E9DF9 49%, #41FDA4 100%)' }}
      >
        <div
          style={{ background: 'url(/images/illustration-overlay.png) repeat' }}
          className="w-full h-full absolute"
        ></div>
        <img
          src={'/images/register-illustration.png'}
          alt=""
          width={518}
          height={402}
          className="relative w-[518px] h-[402px]]"
        />
      </div>
      <CardBlock className="mx-auto w-[600px] pt-8 self-center shadow-md">
        <Tabs
          activeKey={type}
          onChange={setType}
          className="mb-[32px]"
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
        {type === 'person' ? <Person /> : <Organization />}
      </CardBlock>
    </div>
  );
};

export default Register;
