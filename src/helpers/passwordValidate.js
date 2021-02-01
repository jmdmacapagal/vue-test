export const passwordValidate = (password) => {
  let reg = /^.{8,50}$/;
  return password == '' ? null : reg.test(password) ? true : false;
};
