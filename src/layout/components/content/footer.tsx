/*
 * @Author: zhouxishun
 * @Date: 2023-09-19 09:29:00
 * @LastEditors: zhouxishun
 * @LastEditTime: 2023-10-30 11:10:03
 * @Description:
 */

import Icon from '@/icon';

interface FooterType extends React.HTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterType> = ({ className, style }) => {
  return (
    <footer className={`${className} py-[32px] text-center flex flex-col justify-center text-text-3`} style={style}>
      <div className="footer-msg text-[14px]">
        <span>帮助</span>
        <span className="mx-[40px]">隐私</span>
        <span>条款</span>
      </div>
      <div className="footer-company text-[12px] mt-[8px]">
        <span>Copyright</span>
        <span className="mx-[4px] align-middle">
          <Icon type="icon-banquan" className="text-text-3" />
        </span>
        <span>2023 杭州寻臻科技有限责任公司</span>
      </div>
    </footer>
  );
};

export default Footer;
