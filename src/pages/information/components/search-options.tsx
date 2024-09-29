import { EnhanceSearchInput } from '@/components/form-field';
import { useRouterState } from '@cyberutopian/hooks';
import { Button, DatePicker } from 'antd';

const SearchOptions = () => {
  const [value, setValue] = useRouterState<any>();

  const fieldsChange = (value?: string) => {
    setValue((v) => ({ ...v, keyword: value }));
  };

  return (
    <div className="flex justify-end items-center gap-4">
      <div className="flex items-center">
        <label>发布时间：</label>
        <DatePicker.RangePicker placeholder={['开始时间', '结束时间']} />
      </div>
      <div className="flex items-center">
        <label>监测时间：</label>
        <DatePicker.RangePicker placeholder={['开始时间', '结束时间']} />
      </div>
      <EnhanceSearchInput placeholder="关键字" className="w-[278px]" handleSearch={fieldsChange} />
      <Button type="primary">生成报告</Button>
    </div>
  );
};

export default SearchOptions;
