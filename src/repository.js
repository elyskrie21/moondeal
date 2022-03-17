export function logout() {
  try {
    localStorage.removeItem("token");
  } catch (err) {}
}

export function connectToExtension() {
  console.log('starting script'); 
  let extensionId = "aagceompcdekekhpcnpedafbgogickof";

  window.chrome.runtime.sendMessage(
    extensionId,
    { test: true },
    (response, err) => {
      console.log("This is the res " + response)
      if (!response.success) {
        console.log("Extension did not get message")
      } else {
        console.log("Message was sent successfully")
      }

      if(err) {
        // console.log(err); 
      }
    } 
  );
}
