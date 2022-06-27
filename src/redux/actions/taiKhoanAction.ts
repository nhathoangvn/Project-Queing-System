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
type filterByRole = {
  type: "FILTER_BY_ROLE";
  payload: any;
};
type filterBySearchText = {
  type: "FILTER_BY_SEARCHTEXT";
  payload: any;
};
type updateAccount = {
  type: "UPDATE_ACCOUNT";
  payload: any;
};
type addAccount = {
  type: "ADD_ACCOUNT";
  payload: any;
};
type selectedAccount = {
  type: "SELECTED_ACCOUNT";
  payload: any;
};
export type taiKhoanAction =
  | loadData
  | updateData
  | getData
  | login
  | checkEmail
  | signin
  | filterByRole
  | filterBySearchText
  | updateAccount
  | addAccount
  | selectedAccount;
