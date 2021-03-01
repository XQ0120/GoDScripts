此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行

// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
   let CookieJDs = [
  
  'pt_key=AAJgN57wADAcnx-1pSPWFJOk-dLGZWuFZy3esGzT-gJFd2vK9ucJqblriIdHldw2oezeO6FX7eA;pt_pin=jd_659b672e8493d;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
