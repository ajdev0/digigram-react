import React from "react";
import CategoryWidget from "./categoryWidget";
import RecentPostWidget from "./recentPostWidget";
import SearchWidget from "./searchWidget";
import TagsWidget from "./tagsWidget";
function Widget() {
  return (
    <div class="widget">
      <SearchWidget />
      <CategoryWidget />
      <RecentPostWidget />
      <TagsWidget />
    </div>
  );
}

export default Widget;
