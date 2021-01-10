const push = async (deviceToken, title, body) => {
  const p = Deno.run({ cmd: [ "node", "push.mjs", deviceToken, title, body ] });
  await p.status();
}
export { push };
