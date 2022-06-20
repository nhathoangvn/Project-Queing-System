type loadData = {
  type: "LOAD_DATA";
  payload: any;
};
type updateData = {
  type: "LOAD_DATA";
  payload: any;
};
type getData = {
  type: "GET_DATA";
  payload: any;
};
type login = {
  type: "LOGIN";
  payload: {
    tendangnhap: string;
    matkhau: string;
  };
};
type signin = {
  type: "SIGN_IN";
  payload: boolean;
};
type checkEmail = {
  type: "CHECK_MAIL";
  payload: any;
};
export type taiKhoanAction =
  | loadData
  | updateData
  | getData
  | login
  | checkEmail
  | signin;
