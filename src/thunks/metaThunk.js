import APIHelper from './index';

const URL = 'https://www.cloudflare.com/cdn-cgi/trace';
export default class MetaThunk {
  static async fetch() {
    try {
      const api = await new APIHelper(URL, true);
      const res = await api.get();
      let data = res.data.replace(/[\r\n]+/g, '","').replace(/\=+/g, '":"');
      data = '{"' + data.slice(0, data.lastIndexOf('","')) + '"}';
      return JSON.parse(data);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
