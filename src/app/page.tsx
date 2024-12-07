'use client';
import { Button } from '@/app/_ui/button/button';
import { GithubOutlined } from '@ant-design/icons';
import { Flex, Layout, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

const layoutStyle: React.CSSProperties = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Home() {
  return (
    <Flex gap="large" wrap align="center">
      <Layout style={layoutStyle}>
        <Typography.Title level={1}>
          Welcome to Ablfaxl Boilerplate
        </Typography.Title>
        <Link target={'_blank'} href="https://github.com/ablfaxl">
          <Button iconPosition={'end'} icon={<GithubOutlined />}>
            Github
          </Button>
        </Link>
      </Layout>
    </Flex>
  );
}
