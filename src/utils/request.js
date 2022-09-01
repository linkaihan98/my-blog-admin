/*
 * @Author: KAAN
 * @Date: 2022-09-01 15:33:34
 * @LastEditors: KAAN
 * @LastEditTime: 2022-09-01 16:07:36
 * @Descripttion: 
 */

import axios from 'axios';
import { notification } from "antd";

axios.defaults.timeout = 3000;
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.withCredentials = true;

// request请求拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      "Content-Type": "application/json",
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

/** 
 * response响应拦截器
 * response code=0后端处理请求失败，code=1成功
 */
axios.interceptors.response.use(
  res => {
    console.log(res, "axios");

    // 请求成功但不能操作
    if (res.code === 0) {
      // 弹出操作错误信息
      notification.error({
        message: res.message,
        description: res.message,
      });
      return;
    } else if (res.code === 1) {
      console.log(res.data, "res.data");
      // 返回请求结果
      return res;
    } else {
      throw new Error('reponse err');
    };
  },
  error => {
    console.log(error, 'err');
    const { status } = error.response;
    // 请求失败
    switch (status) {
      case 400:
        error.message = "错误请求";
        break;
      case 401:
        error.message = "未授权，请重新登录";
        break;
      case 403:
        error.message = "拒绝访问";
        break;
      case 404:
        error.message = "请求错误,未找到该资源";
        window.location.href = "/NotFound";
        break;
      case 405:
        error.message = "请求方法未允许";
        break;
      case 408:
        error.message = "请求超时";
        break;
      case 500:
        error.message = "服务器端出错";
        break;
      case 501:
        error.message = "网络未实现";
        break;
      case 502:
        error.message = "网络错误";
        break;
      case 503:
        error.message = "服务不可用";
        break;
      case 504:
        error.message = "网络超时";
        break;
      case 505:
        error.message = "http版本不支持该请求";
        break;
      default:
        error.message = `连接错误${error.response.status}`;
    };
    // 请求失败提醒
    notification.error({
      message: "请求失败",
      description: error.message,
      onClose: ()=>{
        // history.replace('/r')
      },
    });
  }
);

// 封装get请求
export const get = async (url) => {
  const res = await axios.get(url, {});
  if (res) {
    return res.data;
  };
};

/**
 * 封装post请求
 * @param(String) url 请求地址
 * @param(Object) data  请求数据
 */
export const post = async (url, data) => {
  const res = await axios.post(url, data);
  // console.log(res)
  if (res) {
    return res.data;
  };
};
