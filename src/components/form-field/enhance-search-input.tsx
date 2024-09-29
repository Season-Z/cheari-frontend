/*
 * @Author: zhouxishun
 * @Date: 2023-12-01 15:58:15
 * @LastEditors: zhouxishun
 * @LastEditTime: 2023-12-01 17:02:17
 * @Description: 加强版输入框
 */
import Icon from '@/icon';
import { Input, InputProps } from 'antd';
import { FC, useState } from 'react';

interface EnhanceSearchInputType extends InputProps {
  handleSearch: (data?: string) => void;
}

const EnhanceSearchInput: FC<EnhanceSearchInputType> = (props) => {
  const { handleSearch, ...restProps } = props;

  const [value, setValue] = useState<string>();

  const fieldsChange = () => {
    return handleSearch(value);
  };

  return (
    <Input
      {...restProps}
      suffix={<Icon type="icon-Search" className="text-fill-6 text-16" onClick={fieldsChange} />}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onPressEnter={fieldsChange}
    />
  );
};

export { EnhanceSearchInput };
