/*
 * @Author: KAAN
 * @Date: 2022-07-13 14:14:36
 * @LastEditors: KAAN
 * @LastEditTime: 2022-08-02 17:34:41
 * @Descripttion: 
 */

import React from 'react';
import EditorList from './components/editor-list';
import EditorMain from './components/editor-main';

import styles from './index.module.scss';

// antd
import { Layout, Divider } from 'antd';

export default function Editor() {
  return (
    <Layout className={styles.editor}>
      <EditorList className={styles.editorLeft}></EditorList>
      <Divider type='vertical'></Divider>
      <EditorMain className={styles.editorRight}></EditorMain>
    </Layout>
  );
};
