export type IDevice = {
  idDevice: string;
  deviceName: string;
  ipAddress: string;
  statusWork: boolean;
  statusConnection: boolean;
  service: string[];
  taikhoan?: string;
  matkhau?: string;
  typeDevice?: string;
};
