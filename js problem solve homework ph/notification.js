function sendNotification(email) {
  if (
    typeof email !== "string" ||
    email.indexOf("@") === -1 ||
    email.split("@").length !== 2
  ) {
    return "Invalid Email";
  }
  const parts = email.split("@");
  const username = parts[0];
  const domainName = parts[1];
  const Notification = username + " sent you an email from " + domainName;
  return Notification;
}
const Notificatio1 = "fahim234.@hotmail.com";
const NotificationSend = sendNotification(Notificatio1);
console.log(NotificationSend);
