import Form from "../common/form";

class CommentForm extends Form {
  render() {
    return (
      <div class="comment-form-wrap pt-5">
        <h2 class="mb-5">Leave a comment</h2>
        <form action="#" class="">
          <div class="form-row form-group">
            <div class="col-md-6">
              {this.renderInput("text", "name", "name")}
            </div>
            <div class="col-md-6">
              {this.renderInput("email", "email", "email")}
            </div>
          </div>
          <div class="form-group">
            {this.renderInput("url", "website", "website")}
          </div>
          <div class="form-group">{this.renderTextarea("8", "")}</div>
          <div class="form-group">{this.renderButton("Post Comment")}</div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
