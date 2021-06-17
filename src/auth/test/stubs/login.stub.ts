import { LoginStatus } from 'src/auth/interfaces/login-status.interface';

export const loginStub = (): LoginStatus => {
  return {
    email: 'jane@gmail.com',
    accessToken: 'jsdfhgslijslreigurselgiuel.jsdhfksdhfgsdkuhfgdk.nagdyjw36',
    expiresIn: '6h',
  };
};
