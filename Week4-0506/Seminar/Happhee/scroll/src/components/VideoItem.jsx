import React from "react";
import styled from "styled-components";

const VideoItem = (props) => {
  const { snippet } = props;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <StVideoItem>
      <img alt="비디오_썸네일" src={thumbnails.high.url} />
      <p className="channelTitle">{channelTitle}</p>
      <p>{title}</p>
    </StVideoItem>
  );
};

export default VideoItem;

const StVideoItem = styled.article`
  width: 20rem;

  &:hover {
    cursor: pointer;
  }

  & > p {
    margin: 0;
  }
  .channelTitle {
    font-size: 1.3rem;
    color: green;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 1rem;
  }
`;
