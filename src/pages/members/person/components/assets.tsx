import { EnhanceSearchInput } from '@/components/form-field';
import Gap from '@/components/gap';
import { Tabs, TabsProps } from 'antd';
import { useState } from 'react';
import Case from './case';
import Community from './community';
import Order from './order';

const items: TabsProps['items'] = [
  {
    key: 'case',
    label: '我的方案',
  },
  {
    key: 'community',
    label: '我的社区',
  },
  {
    key: 'order',
    label: '我的订单',
  },
];

const Assets = () => {
  const [activeKey, setActiveKey] = useState<string>('case');
  const [search, setSearch] = useState<string>();

  return (
    <div>
      <Tabs
        activeKey={activeKey}
        items={items}
        onChange={(v) => setActiveKey(v)}
        tabBarExtraContent={
          <EnhanceSearchInput
            placeholder="搜索"
            className="w-[278px]"
            handleSearch={(e) => {
              setSearch(e);
            }}
          />
        }
      />
      <Gap size="large" />
      {activeKey === 'case' && <Case search={search} />}
      {activeKey === 'community' && <Community search={search} />}
      {activeKey === 'order' && <Order search={search} />}
    </div>
  );
};

export default Assets;
