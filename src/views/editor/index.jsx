/*
 * @Author: KAAN
 * @Date: 2022-07-13 14:14:36
 * @LastEditors: KAAN
 * @LastEditTime: 2022-09-15 16:24:32
 * @Descripttion: 
 */

import React, { useState, useEffect, createContext } from 'react';
import EditorList from './components/editor-list';
import EditorMain from './components/editor-main';

import styles from './index.module.scss';

// antd
import { Layout, Divider } from 'antd';

// api
import { getArticles } from '@/api';

export const EditorContext = createContext();

export default function Editor() {
  
  const [articleList, setArticleList] = useState([]);

  // 获取文章列表数据
  useEffect(() => {
    getArticles().then((res) => {
      // console.log(res.data.articles, "articles");
      setArticleList(res.data.articles);
    });
  }, [])
  
  return (
    <EditorContext.Provider value={
      {
        articleList,
        updateArticle: (value) => {
          setArticleList(value);
        }
      }}>
      <Layout className={styles.editor}>
        <EditorList className={styles.editorLeft}></EditorList>
        <Divider type='vertical'></Divider>
        <EditorMain className={styles.editorRight}></EditorMain>
      </Layout>
    </EditorContext.Provider>
  );
};
