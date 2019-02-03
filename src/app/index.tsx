import { Layout } from 'antd';
import React from 'react';
import { RouteStore } from 'react-router-store';
import { RouterContents } from './components/RouterContents';
import { RouterNavigation } from './components/RouterNavigation';
import './index.less';
import styles from './index.module.less';
import 'antd/dist/antd.css';
import 'prismjs/themes/prism-okaidia.css';

const {Content, Header} = Layout;

export interface AppProps {
  routeStore: RouteStore;
}

export function App({routeStore}: AppProps) {
  return (
    <Layout>
      <Header className={styles.header}>
        <RouterNavigation/>
      </Header>
      
      <Content className={styles.content}>
        <RouterContents routeStore={routeStore}/>
      </Content>
    </Layout>
  );
}