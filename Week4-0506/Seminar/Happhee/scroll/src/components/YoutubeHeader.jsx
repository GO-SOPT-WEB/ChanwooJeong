import React from "react";

const YoutubeHeader = (props) => {
  const { handleOnChange, handleSearchFormSubmit } = props;

  return (
    <header>
      <h1>🎥 햅히가 보여주는 Youtube 🎥</h1>
      <form onSubmit={handleSearchFormSubmit}>
        <input type="text" onChange={handleOnChange} />
        <button type="submit">검색하기</button>
      </form>
    </header>
  );
};

export default YoutubeHeader;
