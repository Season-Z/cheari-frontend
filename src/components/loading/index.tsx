/*
 * @Author: zhouxishun
 * @Date: 2023-09-06 10:16:10
 * @LastEditors: zhouxishun
 * @LastEditTime: 2023-10-10 11:17:11
 * @Description:
 */

import { Spin } from 'antd';

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Spin />
    </div>
  );
};

export default Loading;
