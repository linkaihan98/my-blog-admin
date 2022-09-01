/*
 * @Author: KAAN
 * @Date: 2022-09-01 15:33:49
 * @LastEditors: KAAN
 * @LastEditTime: 2022-09-01 16:24:44
 * @Descripttion: 
 */

import { get, post } from '../utils/request.js';

/**
 * 登录接口
 * @param {string} username 用户名
 * @param {string} password 密码
 */
export const adminLogin = async (data) => {
  const res = await post('admin/login', data);
  return res;
};

/**
 * 获取文章列表
 */
export const getArticles = async () => {
  const res = await get('admin/articles');
  return res;
};
