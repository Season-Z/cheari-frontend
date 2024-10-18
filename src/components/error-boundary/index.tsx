/*
 * @Author: zhouxishun
 * @Date: 2023-09-06 10:02:47
 * @LastEditors: zhouxishun
 * @LastEditTime: 2023-11-14 10:23:52
 * @Description:
 */
import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // 你同样可以将错误日志上报给服务器
    console.error(error);

    if (error.message.includes('Failed to fetch dynamically imported module')) {
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <div>发生异常错误</div>;
    }

    return this.props.children;
  }
}
