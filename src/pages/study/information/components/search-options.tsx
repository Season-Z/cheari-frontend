import { SearchField } from '@/components/form-field';
import { useRouterState } from '@/packages/@cyberutopian/hooks';
import { Button, DatePicker, Input } from 'antd';
import { useState } from 'react';
import KeywordModal from './keyword-modal';

const SearchOptions = () => {
  const [visible, setVisible] = useState(false);

  const [value, setValue] = useRouterState<any>();

  const fieldsChange = (value?: string) => {
    setValue((v) => ({ ...v, keyword: value }));
  };

  return (
    <div className="flex justify-start items-center flex-wrap gap-4">
      <SearchField label="发布时间">
        <DatePicker.RangePicker placeholder={['开始时间', '结束时间']} />
      </SearchField>

      <SearchField label="产品搜索">
        <Input placeholder="请输入产品名称" />
      </SearchField>

      <SearchField label="品牌搜索">
        <Input placeholder="请输入品牌名称" />
      </SearchField>

      <SearchField label="监测时间">
        <DatePicker.RangePicker placeholder={['开始时间', '结束时间']} />
      </SearchField>

      <SearchField label="渠道搜索">
        <Input placeholder="请输入渠道名称" />
      </SearchField>

      <SearchField label="关键字搜索">
        <Input placeholder="请输入关键字名称" />
      </SearchField>

      <Button type="primary">生成报告</Button>
      <Button onClick={() => setVisible(true)}>关键字配置</Button>

      <KeywordModal visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

export default SearchOptions;
