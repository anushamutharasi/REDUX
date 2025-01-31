export const depositeAction = (amount) => {
  return { type: "Deposite", payload: amount };
};
export const withdraAction = (amount) => {
  return { type: "Withdraw", payload: amount };
};
export const FirstnameAction = (Fullname) => {
  return { type: "NameUpdate", payload: Fullname };
};
export const MobileAction = (MObile) => {
  return { type: "MobileUpdate", payload: MObile };
};
export const reset = () => {
  return { type: "reset" };
};