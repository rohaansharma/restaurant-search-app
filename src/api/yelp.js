import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer EgjQz-WtfQU1nh3S47zbYFvWMR5xFs9YuaJa0wCoqncTjObbO69Gc1jUbF1ov1WXiUzTjj5sJct0T5Y-R5PQJPjY93zOg1aV2l81jMaxEBlq6TiTjzveEKsMpaiAYXYx",
  },
});
