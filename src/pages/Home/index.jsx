import React, { useState } from "react";
import { EmptyList } from "../../components/common/EmptyList";
import { BlogList } from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/Searchbar";
import { blogList } from "../../config/data";

function Home() {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResult();
  };
  const handleSearchResult = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* Blog list & Eempty List */}

      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
