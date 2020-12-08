/**
 * @description: Login interface parameters
 * @userName 用户名
 * @pwd 用户密码
 * @remember 是否记住密码
 */
export interface LoginParams {
  userName: string;
  pwd: string;
  remember?: boolean;
}

/**
 * @description: Get user information
 */
export interface GetUserInfoByUserIdParams {
  userId: string | number;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  systemUserInfo: SystemUserInfo;
}

/**
 * @description: Get user information return value
 */

export interface SystemUserInfo {
  systemUserId: string;
  systemUserToken: string;
  systemUserName: string;
  systemUserMobile?: string;
  systemUserMail?: string;
}
export interface GetUserInfoByUserIdModel {
  role: RoleInfo;
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 介绍
  desc?: string;
}
