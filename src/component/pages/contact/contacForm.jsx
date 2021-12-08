import Form from "../../common/form";

class ConactForm extends Form {
  state = {};
  render() {
    return (
      <div class="col-lg-6 py-3 wow fadeInUp">
        <div class="subhead">Contact Us</div>
        <h2 class="title-section">Drop Us a Line</h2>
        <div class="divider"></div>

        <form action="#">
          <div className="py-2">{this.renderInput("text", "Full name")}</div>
          <div className="py-2">{this.renderInput("text", "Email")}</div>
          <div className="py-2">{this.renderTextarea(6, "Enter message")}</div>
          {this.renderButton("Send Message")}
        </form>
      </div>
    );
  }
}

export default ConactForm;
