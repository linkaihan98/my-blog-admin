/*
 * @Author: KAAN
 * @Date: 2022-08-29 15:53:16
 * @LastEditors: KAAN
 * @LastEditTime: 2022-09-05 18:21:01
 * @Descripttion: 加载文章列表，显示标题简要
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getArticles } from '@/api';

import styles from './index.module.scss';
// antd
import { List } from 'antd';
import {
  SearchOutlined,
  UnorderedListOutlined,
  SortAscendingOutlined
} from '@ant-design/icons';

// test data [array]
// 已删除

export default function AbstractMode() {

  const [articleList, setArticleList] = useState([]);
  const [isHover, setIsHover] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  // 获取文章列表列表数据
  const getArticleList = () => {
    getArticles().then((res) => {
      // console.log(res.data.articles, "articles");
      setArticleList(res.data.articles);
    });
  };
  
  const handleMouseEnter = (id) => {
    setIsHover(id);
  };

  const handleMouseLeave = () => {
    setIsHover(0);
  };

  const navigate = useNavigate();
  const handleClick = (id) => {
    setCurrentIndex(id);
    // navigate(`/dashboard/editor/${id}`);
  };

  useEffect(() => {
    getArticleList();
  }, [])

  return (
    <List
      itemLayout="horizontal"
      dataSource={articleList}
      className={styles.listMode}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          className={[
            styles.itemCard,
            (item.id === isHover || item.id === currentIndex) ? styles.active : '',
          ]}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave()}
          onClick={() => handleClick(item.id)}
        >
          <List.Item.Meta
            title={
              <div className={styles.noteTitle}>
                <span>{item.title}</span>
              </div>
            }
            description={
              item.summary ? (
                <div className={styles.noteAbstract}>
                  <span>{item.summary}{item.summary}{item.summary}</span>
                </div>
              ) : null
            }
          />
        </List.Item>
      )}
    />
  );
};
