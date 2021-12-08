import React from "react";
import Form from "../common/form";

class SearchWidget extends Form {
  render() {
    return (
      <div>
        <form action="#" class="search-widget">
          {this.renderInput("text", "Enter Keyword...")}
          {this.renderButton("Search")}
        </form>
      </div>
    );
  }
}

export default SearchWidget;
