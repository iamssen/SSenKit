import { Layout } from 'antd';
import 'antd/dist/antd.css';
import 'prismjs/themes/prism-okaidia.css';
import React from 'react';
import { RouterContents } from './router-components/RouterContents';
import { RouterNavigation } from './router-components/RouterNavigation';
import './style.less';
import styles from './style.module.less';

export function App() {
  return (
    <Layout>
      <Layout.Header className={styles.header}>
        <RouterNavigation/>
      </Layout.Header>
      
      <Layout.Content className={styles.content}>
        <RouterContents/>
      </Layout.Content>
    </Layout>
  );
}