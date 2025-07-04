export enum ApiEndPoint {
  login = "api/Auth/login",
  register = "api/Auth/register",
  emailOtp = "api/Auth/EmailOTP",
  resetPasswords = "api/Auth/ResetPassword",
  changePasswords = "api/Auth/ChangePassword",

  categoryDetail = "api/Inventory/GetProductDetail",
  addCategory = "api/Inventory/AddOrUpdateProduct",
  categoryList = "api/Shipper/GetProductTypesList",
  attributeList = "api/Broker/GetBrokerList",
}
