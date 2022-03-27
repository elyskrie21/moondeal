export function logout() {
  try {
    localStorage.clear()
    window.location.pathname('/signin')
  } catch (err) {}
}

export function connectToExtension(token) {
  console.log('starting script'); 
  const extensionId = "aagceompcdekekhpcnpedafbgogickof"; 

  window.chrome.runtime.sendMessage(
    extensionId,
    { test: true, token: token },
    (response) => {
      console.log("This is the res " + JSON.stringify(response))
      if (!response.success) {
        console.log("Extension did not get message")
      } else {
        console.log("Message was sent successfully")
      }
      console.log("here");
    } 
  );

  console.log('script ended')
}

export function isAuthenticated() {
  return localStorage.getItem("token") != null; 
}