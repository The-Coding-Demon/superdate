import EnvelopeSolid from "./assets/EnvelopeSolid.png";
import PhoneSolid from "./assets/PhoneSolid.png";

export const DetailsinContact = () => {
  return (
    <div className="MainContactContainer">
      <div>
        <h1 className="ContactTitle">Contact Us</h1>
      </div>
      <div className="ContactInfoContainer">
        <h2 className="ContactInfo">Getting in touch with us is easy!</h2>
        <div className="ContactDetails">
          <div className="ContactEmail">
            <p className="ContactEmail">
              <img className="ContactEmailImg" src={EnvelopeSolid}></img>
              superdate@gmail.com
            </p>
          </div>

          <div className="ContactPhone">
            <p className="ContactPhone">
              <img className="ContactPhoneImg" src={PhoneSolid}></img> +44 5395
              2368
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
