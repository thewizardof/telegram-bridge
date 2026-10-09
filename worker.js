export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // آدرس تلگرام را جایگزین آدرس ورکر می‌کنیم
    const telegramUrl = "https://api.telegram.org" + url.pathname + url.search;
    
    const newRequest = new Request(telegramUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    return fetch(newRequest);
  },
};
