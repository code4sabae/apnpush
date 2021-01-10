const push = async (deviceToken, title, mes) => {
  const d = { deviceToken, title, body: mes };
  const method = "POST";
  const body = JSON.stringify(d);
  const headers = { "Content-Type": "application/json" };
  const res = await fetch("./api/", { method, headers, body });
  console.log(res);
};
export { push };
