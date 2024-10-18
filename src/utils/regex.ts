/*
 * @Author: longhe.li
 * @Date: 2023-10-07 14:32:11
 * @LastEditors: longhe.li
 * @LastEditTime: 2023-10-07 14:57:13
 * @Description: 存放需要共享的正则表达式
 */
export const regex = {
  username: /^(?!_)[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
  phone: /^1\d{10}$/,
};
