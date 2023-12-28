export function getCookie(name: string) {
  if (typeof document === "undefined") {
    return undefined;
  }

  let cookieArray = document.cookie.split("; ");
  let cookieObject = cookieArray.find((row) => row.startsWith(name + "="));
  return cookieObject
    ? decodeURIComponent(cookieObject.split("=")[1])
    : undefined;
}

export function setCookie(name: string, value: string, days?: number) {
  if (typeof document === "undefined") {
    return undefined;
  }

  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
