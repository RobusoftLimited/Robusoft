function Contact() {
  return (
    <section id="contact" className="text-center">
      <div className="container">
        <h1>CONTACT US</h1>
        <p className="mb-5">
          We are here to help our clients succeed in their digital transformation endeavors.
          <br/>If you have some questions or need help, Please Contact Us <br />
        </p>

        <form className="contact-form col-md-11 col-lg-9 mx-auto">
          <div className="form-row">
            <div className="col form-group">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              name=""
              id=""
              className="form-control"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
