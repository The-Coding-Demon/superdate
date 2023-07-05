import EnvelopeSolid from "./assets/EnvelopeSolid.png";
import PhoneSolid from "./assets/PhoneSolid.png";

export const DetailsinContact = () => {
  return (
    <div className="main-contact-container">
      <div>
        <h1 className="contact-title">Contact Us</h1>
      </div>
      <div className="contact-info-container">
        <h2 className="contact-info">Getting in touch with us is easy!</h2>
        <div className="contact-details">
          <div className="contact-email">
            <p className="contact-email">
              <img className="contact-email-img" src={EnvelopeSolid}></img>
              superdate@gmail.com
            </p>
          </div>

          <div className="contact-phone">
            <p className="contact-phone">
              <img className="contact-phone-img" src={PhoneSolid}></img> +44
              5395 2368
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
