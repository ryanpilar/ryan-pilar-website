import React from "react";
import emailjs from "emailjs-com";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: "",
        subject: "",
        phone: "",
        email: "",
      },
      isSubmitting: false, // Add a state variable for tracking the loading state
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length === 0 ? "Name is not empty" : "";
        break;
      case "subject":
        errors.subject = value.length < 5 ? "Subject must be 5 characters" : "";
        break;
      case "phone":
        errors.phone = value.length < 5 ? "phone is not empty" : "";
        break;
      case "email":
        errors.email = value.length < 5 ? "Subject is not empty" : "";
        let appos = value.indexOf("@");
        let dots = value.lastIndexOf(".");

        if (appos < 1 || dots - appos < 2) {
          errors.email = "please enter valid email";
        }

        break;

      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // if (
    //   this.state.errors.name.length === 0 &&
    //   this.state.errors.subject.length === 0 &&
    //   this.state.errors.phone.length === 0 &&
    //   this.state.errors.email.length === 0
    // ) {
    //   alert("form is valid");
    // } else {
    //   alert("form is invalid");
    // }

    this.setState({ isSubmitting: true }); // Set isSubmitting to true when the form is submitted

    emailjs
      .sendForm(
        'service_7pq2c9r',           // emailJS service ID
        'template_ij9pscd',          // emailJS template ID
        e.target,
        'PAyraLkWOrcJTFjn6'          // emailJS user ID, not sure if this is necessary yet.
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for reaching out! This pop-up is to let you know that your message was been delivered and that I will get back to you shortly.");
        },
        (error) => {
          console.log(error.text);
          console.log('e.target', e.target)
          alert("Something has gone wrong with your form submission. If this message persists, try emailing me directly at ryan_pilar@outlook.com.");
        }
      )
      .finally(() => {
        this.setState({ isSubmitting: false }); // Reset isSubmitting to false after email is sent
      });
  };

  render() {
    const { errors, isSubmitting } = this.state;
    return (
      <form onSubmit={this.submitHandler.bind(this)} className="form_class">
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Name*"
              onChange={this.handleChange}
            />
            <p>{errors.name}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Your Email*"
              onChange={this.handleChange}
            />
            <p>{errors.email}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              placeholder="Subject*"
              onChange={this.handleChange}
            />
            <p>{errors.subject}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Phone*"
              onChange={this.handleChange}
            />
            <p>{errors.phone}</p>
          </div>
        </div>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="6"
          placeholder="Your Message ..."
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="btn send_btn theme_btn" disabled={isSubmitting}>

          

          {isSubmitting ? (
            "Sending ..." // Render a spinning icon while isSubmitting is true
          ) : (
            "Send Message"
          )}

        </button>
      </form>
    );
  }
}

export default Form;
