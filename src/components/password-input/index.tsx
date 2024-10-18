/*
 * @Author: longhe.li
 * @Date: 2023-09-18 16:57:56
 * @LastEditors: longhe.li
 * @LastEditTime: 2023-11-28 15:21:23
 * @Description:
 */
import { checkPasswordSpecialSymbolsCount } from '@/utils';
import { Input, InputProps, Popover, Progress } from 'antd';
import { FC, useEffect, useMemo, useState } from 'react';

export interface PasswordInputProps {
  value?: string;
  onChange?: () => void;
  placeholder: string;
  size?: InputProps['size'];
}

const scoreInfo = [
  {
    score: 90,
    message: '安全',
  },
  {
    score: 80,
    message: '强大',
  },
  {
    score: 60,
    message: '一般',
  },
  {
    score: 40,
    message: '弱',
  },
];

const PasswordInput: FC<PasswordInputProps> = ({ value, onChange, placeholder, size }) => {
  const [calcScore, setCalcScore] = useState(0);

  useEffect(() => {
    let score = 0;
    if (value) {
      if (value.length > 8) {
        score += 25;
      } else {
        score += 10;
      }

      const numMatch = value.match(/[\d]/gi);
      if (numMatch?.length) {
        if (numMatch.length >= 3) {
          score += 25;
        } else {
          score += 10;
        }
      }

      const alphabetMatch = value.match(/[a-zA-Z]/gi);
      if (alphabetMatch?.length) {
        if (alphabetMatch.length >= 3) {
          score += 25;
        } else {
          score += 10;
        }
      }

      const symbolMatch = checkPasswordSpecialSymbolsCount(value);
      if (symbolMatch > 1) {
        score += 25;
      } else if (symbolMatch === 1) {
        score += 15;
      }
    }
    setCalcScore(score);
  }, [value]);

  const msgStatus = useMemo(() => {
    if (value) {
      // if (!checkPassword(value)) {
      //   return { msg: '密码格式错误', status: 'exception' };
      // }

      const nowScoreInfo = scoreInfo.find((item) => calcScore >= item.score);
      if (nowScoreInfo) {
        return { msg: nowScoreInfo.message, status: 'success' };
      }
    }
    return null;
  }, [value, calcScore]);

  return (
    <Popover
      trigger={'focus'}
      placement="rightTop"
      rootClassName="max-w-[280px]"
      content={
        <div>
          {msgStatus && (
            <div>
              <div className={msgStatus.status === 'success' ? 'text-[green]' : 'text-[#F5222DFF]'}>
                强度：{msgStatus.msg}
              </div>
              <Progress status={msgStatus.status as any} showInfo={false} percent={calcScore} />
            </div>
          )}

          <div>
            <div>不得少于6位字符，且不得大于64位字符</div>
            <ul>
              <li>1. 密码含有数字&字母</li>
              <li>2. 密码含有符号</li>
              <li>3. 含有字母大小写；</li>
            </ul>
            <div>至少符合2项</div>
          </div>
        </div>
      }
    >
      <Input.Password size={size} allowClear placeholder={placeholder} value={value} onChange={onChange} />
    </Popover>
  );
};

export default PasswordInput;
