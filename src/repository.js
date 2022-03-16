export function logout() {
  try {
    localStorage.removeItem("token");
  } catch (err) {
  }
}
