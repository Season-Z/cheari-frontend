import dayjs from 'dayjs';
import JSEncrypt from 'jsencrypt/lib/index.js';

export * from './regex';
export * from './router-store';

export function checkPasswordSpecialSymbolsCount(password: string) {
  if (!password) {
    return 0;
  }
  const matchCount = "()`~!@#$%^&*_-+|{}\\[]:;'<>,.?/".split('').filter((c) => password.includes(c)).length;
  return matchCount;
}

export function checkPassword(password: string) {
  if (!password) {
    return false;
  }
  if (password?.length < 8 || password?.length > 64) {
    return false;
  }

  let matchCount = 0;
  if (/\d/.test(password) && /[a-zA-Z]/.test(password)) {
    matchCount += 1;
  }
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    matchCount += 1;
  }
  if (checkPasswordSpecialSymbolsCount(password)) {
    matchCount += 1;
  }
  if (matchCount >= 2) {
    return true;
  }
}

export const formatTime = (time?: string | dayjs.Dayjs, format?: string) => {
  if (!time || time === '0001-01-01T00:00:00Z' || time === '1970-01-01 00:00:00') {
    return '-';
  }
  return dayjs(time).format(format || 'YYYY-MM-DD HH:mm:ss');
};

/** 路由权限校验 */
export const routerRoleAuth = (rolePaths: (string | RegExp)[], pathname: string) => {
  return rolePaths?.some((v) => pathname === v || (v instanceof RegExp && v.test(pathname)));
};

/** 加密密码 */
export const encryptPassword = (password: string) => {
  const rsaKey = localStorage.getItem('rsaKey') || '';
  const sign = new JSEncrypt();
  sign.setPublicKey(rsaKey);
  return sign.encrypt(password) as string;
};

/** 耗时格式化 */
export const formatElapsedSeconds = (seconds: number) => {
  if (seconds <= 60) {
    return `${seconds}s`;
  }

  const minutes = Math.floor(seconds / 60);
  if (seconds < 60 * 60) {
    const remainingSeconds = seconds % 60;

    if (!remainingSeconds) {
      return `${minutes}min`;
    }
    return `${minutes}min${remainingSeconds}s`;
  }

  if (seconds < 60 * 60 * 24) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (!remainingMinutes) {
      return `${hours}h`;
    }
    return `${hours}h${remainingMinutes}min`;
  }

  return '1d+';
};

export const getBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
