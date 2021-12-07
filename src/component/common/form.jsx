import React, { Component } from "react";
class Form extends Component {
  state = {};
  renderInput(type = "text", placeholder) {
    return (
      <div className="py-2">
        <input type={type} className="form-control" placeholder={placeholder} />
      </div>
    );
  }
  renderTextarea(rows, placeholder) {
    return (
      <div className="py-2">
        <textarea
          rows={rows}
          className="form-control"
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
  renderButton(label) {
    return (
      <button type="submit" className="btn btn-primary rounded-pill mt-4">
        {label}
      </button>
    );
  }
}

export default Form;
