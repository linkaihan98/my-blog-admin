/*
 * @Author: KAAN
 * @Date: 2022-08-29 15:53:16
 * @LastEditors: KAAN
 * @LastEditTime: 2022-09-01 14:57:13
 * @Descripttion: 加载文章列表，显示标题简要
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';
// antd
import { List } from 'antd';
import {
  SearchOutlined,
  UnorderedListOutlined,
  SortAscendingOutlined
} from '@ant-design/icons';

// test data
const data = [
  {
    id: '1',
    title: 'Ant Design Title 1',
    abs: 'abs1abs1abs1abs1abs1abs1abs1abs1abs1abs1abs1',
  },
  {
    id: '2',
    title: 'Ant Design Title 2',
    abs: 'abs1abs1abs1abs1abs1abs1abs1abs1abs1abs1abs1',
  },
  {
    id: '3',
    title: 'Ant Design Title 3',
    abs: 'abs1abs1abs1abs1abs1abs1abs1abs1abs1abs1abs1',
  },
  {
    id: '4',
    title: 'Ant Design Title 4',
    abs: 'abs1abs1abs1abs1abs1abs1abs1abs1abs1abs1abs1',
  },
];

export default function AbstractMode() {

  const [isHover, setIsHover] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [active, setActive] = useState(styles.active);

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

  }, [])

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
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
            title={item.title}
            description={item.abs}
          />
        </List.Item>
      )}
    />
  );
};
