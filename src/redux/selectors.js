export const userSelector = (state) =>
  state.users.users ? state.users.users : null;
export const isLoadingSelector = (state) =>
  state.users.isLoading ? state.users.isLoading : null;
export const isErrorSelector = (state) =>
  state.users.isError ? state.users.isError : null;
export const errorMessageSelector = (state) =>
  state.users.errorMessage ? state.users.errorMessage : null;
export const messageTypeSelector = (state) =>
  state.message.message[0].type ? state.message.message[0].type : null;
export const messageSelector = (state) =>
  state.message.message[0].message ? state.message.message[0].message : null;
