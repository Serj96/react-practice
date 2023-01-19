export const selectUsers = store => store.users.users;
export const selectLoading = store => store.users.loading;
export const selectError = store => store.users.error;

export const selectFilteredUsers = store => {
  if (!store.filter) {
    return store.users.users;
  }

  return store.users.users.filter(user =>
    user.name.toLowerCase().includes(store.filter.toLowerCase())
  );
};
