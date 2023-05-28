export const getSearchYoutubeData = async (searchText) => {
  const key = import.meta.env.VITE_YOUTUBE_KEY;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&maxResults=50&type=video&key=${key}`;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const res = await fetch(url, options);

  const resOk = res && res.ok;
  if (resOk) {
    const resData = await res.json();

    return resData.items;
  }
};
export const getPopularYoutubeData = async () => {
  const key = import.meta.env.VITE_YOUTUBE_KEY;
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=kr&key=${key}`;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const res = await fetch(url, options);

  const resOk = res && res.ok;
  if (resOk) {
    const resData = await res.json();

    return resData.items;
  }
};
