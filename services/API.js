const API = {
  url: "/data/menu.json",
  fetchMenu: async () => {
    let r = await fetch(API.url);
    r = await r.json();

    return r;
  },
};

export default API;
