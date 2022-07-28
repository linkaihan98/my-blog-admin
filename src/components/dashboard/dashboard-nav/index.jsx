/*
 * @Author: KAAN
 * @Date: 2022-07-13 14:48:11
 * @LastEditors: KAAN
 * @LastEditTime: 2022-07-13 16:13:24
 * @Descripttion: 
 */


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';
// antd
import { Layout, Avatar, Menu, Divider } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;


// antd: Menu - 侧边栏配置方法
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

// antd: Menu - 菜单配置表
const items = [
  getItem('最近', 'recent', <MailOutlined />),
  getItem('收藏', 'collection', <PieChartOutlined />),
  getItem('归档', 'category', <DesktopOutlined />),
  getItem('标签', 'tag', <ContainerOutlined />),
];


export default function SideBar() {

  const [collapsed, setCollapsed] = useState(false);

  // antd: Menu - 侧边栏收缩触发器
  const toggle = () => {
    console.log(collapsed)
    setCollapsed(!collapsed);
  };

  // 路由跳转
  const navigate = useNavigate();
  const handleNav = (target) => {
    navigate(`/dashboard/${target}`);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={250}
      style={{background: '#f9fafb'}}
    >
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebarHeader}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
          />
        </div>
        <div className={styles.expandLayout}>
          <div className={styles.sidebarOperate}>
            operate
          </div>
          <div className={styles.sidebarContent}>
            <Menu
              items={items}
              style={{ background: '#f9fafb' }}
              onClick={({key})=>handleNav(key)}
            />
          </div>
          <div className={styles.siderbarFooter}>
            {
              React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })
            }
          </div>
        </div>
      </div>
      
      
    </Sider>
  )
};

