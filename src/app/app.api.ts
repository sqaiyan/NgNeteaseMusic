import axios from "axios";
const limit = 20;
export default {
  index_rec() {
    // 首页个人推荐内容：歌单，新歌，mv，电台
    let banner = axios("banner");
    let pl = axios("personalized");
    let ns = axios("personalized/newsong");
    let mv = axios("personalized/mv");
    let djprogram = axios("personalized/djprogram");
    return axios.all([banner, pl, ns, mv, djprogram]).then(
      axios.spread(function(a, b, c, d, e) {
        return Promise.resolve([
          a.data.banners,
          b.data.result,
          c.data.result,
          d.data.result,
          e.data.result
        ]);
      })
    );
  },
  index_plcate() {
    // 歌单类型分类列表
    return axios("playlist/catlist");
  },
  index_playlist(type, offset) {
    // 根据类型获取歌单列表
    return axios(
      "top/playlist?limit=" + limit + "&offset=" + offset + "&type=" + type
    );
  },
  index_dj() {
    // 首页电台页内容：电台分类，推荐节目，推荐电台，电台列表
    let cate = axios("djradio/catelist");
    let rec_p = axios("program/recommend");
    let rec_dj = axios("djradio/recommend");
    let djlist = this.index_djlist(0);
    return axios.all([cate, rec_p, rec_dj, djlist]).then(
      axios.spread(function(a, b, c, d) {
        return Promise.resolve([a, b, c, d]);
      })
    );
  },
  index_djlist(offset) {
    // 电台列表
    return axios("djradio/hot?limit=" + limit + "&offset=" + offset);
  },
  index_hqpl(cat, offset) {
    //精品歌单
    return axios("top/playlist/highquality", {
      params: {
        type: cat,
        offset: offset,
        limit: limit
      }
    });
  },
  likeall() {
    return axios("likelist");
  },
  playlist(id, offset) {
    return axios.get(
      "playlist/detail?id=" + id + "&offset=" + offset + "&limit=" + limit
    );
  },
  music_detail(id) {
    return axios("music/detail?id=" + id);
  },
  music_url(id) {
    return axios("music/url?id=" + id + "&br=128000");
  },
  comments(id, offset, type) {
    id = (type == 1 ? "" : type == 3 ? "A_DJ_1_" : "R_SO_4_") + id;
    return axios("comments?id=" + id + "&offset=" + offset + "&limit=" + limit);
  },
  fm() {
    return axios("fm");
  },
  lyric(id) {
		return axios("lyric?id=" + id)
	}
};
