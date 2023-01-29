import React from "react";
import { BlogList } from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/Searchbar";
import { blogList } from "../../config/data";

function Home() {
  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <SearchBar />
      {/* Blog list & Eempty List */}
      <BlogList blogs={blogList} />
    </div>
  );
}

export default Home;
