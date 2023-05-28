import { useState, useEffect } from "react";
import {
  getPopularYoutubeData,
  getSearchYoutubeData,
} from "../utils/getYoutubeData";
import VideoItem from "./VideoItem";
import styled from "styled-components";

const VideoList = (props) => {
  const { searchText } = props;
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getCurrentVideo = async () => {
      const currentVideoList = await getPopularYoutubeData();
      setVideoList(currentVideoList);
    };
    getCurrentVideo();
  }, []);

  useEffect(() => {
    const getSearchVideo = async () => {
      const currentVideoList = await getSearchYoutubeData(searchText);
      setVideoList(currentVideoList);
    };
    if (searchText) getSearchVideo();
  }, [searchText]);

  if (!videoList) return <p>Error</p>;

  return (
    <StVideoListSection>
      {videoList.map(({ id, snippet }, idx) => (
        <VideoItem key={`${id.videoId}+${idx}`} snippet={snippet} />
      ))}
    </StVideoListSection>
  );
};

export default VideoList;

const StVideoListSection = styled.section`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;

  margin-top: 3%;
`;
