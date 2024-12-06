'use client';
import { ConfigProvider } from 'antd';
import { defaultAntdTheme } from '@/app/_ui/styles/theme-color';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: defaultAntdTheme,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
