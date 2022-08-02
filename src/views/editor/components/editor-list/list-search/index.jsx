/*
 * @Author: KAAN
 * @Date: 2022-08-02 14:51:48
 * @LastEditors: KAAN
 * @LastEditTime: 2022-08-02 14:52:52
 * @Descripttion: 
 */

import React, { useState, useEffect} from 'react';

import styles from './index.module.scss';
// antd
import { Space, Divider, Input } from 'antd';
import {
  SearchOutlined,
  UnorderedListOutlined,
  SortAscendingOutlined
} from '@ant-design/icons';

// 输入框内容变化时的回调
const onChange = (e) => {
  console.log(e);
};


export default function ListSearch() {

  return (
    <div className={styles.listSearch}>
      <div className={styles.searchBox}>
        <div className={styles.searchInput}>
          <Input
            placeholder="搜索全部笔记"
            prefix={<SearchOutlined />}
            allowClear
            bordered
            onChange={onChange}
          />
        </div>
      </div>
      <div className={styles.listOrder}>
        <Space
          split={<Divider type="vertical" />}
          size={1}
        >
          <div className="icon-type-wrap">
            <UnorderedListOutlined />
          </div>
          <div className="icon-rule-wrap">
            <SortAscendingOutlined />
          </div>
        </Space>
      </div>
    </div>
  );
};
