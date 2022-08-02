/*
 * @Author: KAAN
 * @Date: 2022-08-02 14:53:09
 * @LastEditors: KAAN
 * @LastEditTime: 2022-08-02 17:50:13
 * @Descripttion: 
 */

import React from 'react';
// import { Outlet } from 'react-router-dom';

import ListSearch from './list-search';

// antd
import { Layout, List } from 'antd';

export default function EditorList() {
  return (
    <div>
      <ListSearch></ListSearch>
    </div>
  );
};
