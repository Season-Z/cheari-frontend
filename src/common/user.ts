export interface UserInfoTpe {
  userId: number;

  userType: number | null;

  userPhone: string | null;

  userName: string | null;

  userUsername: string | null;

  userPassword: string | null;

  userCompany: string | null;

  userCompanyCode: string | null;

  userCompanyAddress: string | null;

  userCompanyLeader: string | null;

  userContactor: string | null;

  userContactorPhone: string | null;

  userToken: string | null;

  userAvatar: string | null;

  userExpert: number | null;

  userScore: number | null;
}

export const userTypeEnum = {
  1: '个人',
  2: '企业',
  3: '国家机关',
  4: '事业单位',
  5: '其它',
};
