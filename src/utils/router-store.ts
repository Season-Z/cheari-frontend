export const getRouterStoreName = (name: string) => {
  let user = window.localStorage.getItem('user');

  if (user) {
    try {
      user = JSON.parse(user);
    } catch (error) {
      console.log('用户信息解析失败：', error);
    }
  }

  return user ? `${name}-${(user as any).id}` : name;
};

export const setRouterStack = (data: string[], name?: string) => {
  const n = name || getRouterStoreName('routerStack');
  window.localStorage.setItem(n, JSON.stringify(data));
};

export const getRouterStack = (name?: string): any => {
  const n = name || getRouterStoreName('routerStack');
  let data = window.localStorage.getItem(n);

  if (data) {
    try {
      data = JSON.parse(data);
    } catch (error) {
      console.log('路由堆栈解析失败', data);
    }
  }

  return data || [];
};

export const setRouterMap = (data: Record<string, { pathname: string; params: string }>, name?: string) => {
  const n = name || getRouterStoreName('routerMap');
  window.localStorage.setItem(n, JSON.stringify(data));
};

export const getRouterMap = (name?: string): any => {
  const n = name || getRouterStoreName('routerMap');
  let data = window.localStorage.getItem(n);

  if (data) {
    try {
      data = JSON.parse(data);
    } catch (error) {
      console.log('路由对象解析失败', data);
    }
  }

  return data;
};
