import { RegistrationStatus } from '../../interfaces/registration-status.interface';

export const registrationStub = (): RegistrationStatus => {
  return {
    success: true,
    message: 'Successfully Registered',
  };
};
