import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="footer__wrapper">
            <div className="footer__connect">
              <div className="footer__contact">
                <h1 className="footer__header">Contact</h1>
                <p>+372 52523-412</p>
                <p>email@email.com</p>
                <p></p>
              </div>
              <div className="footer__socials">
                <h1 className="footer__header">Socials</h1>
                <p>Facebook</p>
                <p>Instagram</p>
              </div>
            </div>
            <div className="footer__location">
              <h1 className="footer__header">Location</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102509.65306978923!2d-4.629242410706058!3d36.59203199017075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fcb76005e23f%3A0xcf24f3c3adf501a!2zQmVuYWxtw6FkZW5hLCBNw6FsYWdhLCBTcGFpbg!5e0!3m2!1sen!2see!4v1697727723137!5m2!1sen!2see"
                width="700"
                height="300"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
