export const fetchUser = (userId) =>
  $.ajax({
    url: `/api/users/${userId}`,
    method: "GET",
  });
export const signup = (user) =>
  $.ajax({
    url: `/api/users`,
    method: "POST",
    data: { user },
  });
export const updateUser = (user) =>
  $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user },
  });
export const deleteUser = (userId) =>
  $.ajax({
    url: `/api/users/${userId}`,
    method: "DELETE",
  });
