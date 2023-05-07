import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SearchBox from "../components/SearchBox";
import { useState } from "react";

const SearchWeather = () => {
  return (
    <PageLayout>
      <SearchBox />
      <Outlet />
    </PageLayout>
  );
};

export default SearchWeather;
