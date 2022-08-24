export const success = () => {
  console.log("inside success");
  return {
    type: "SUCCESS",
  };
};
export const fail = () => {
  return {
    type: "FAIL",
  };
};