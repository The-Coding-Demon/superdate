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
        <div className="GitHubContact">
          <p>
            Adalbert Gyuris |
            <a href="https://github.com/Adalbert95" target="_blank">
              {" "}
              GitHub
            </a>
          </p>
          <p>
            Anamaria Gherghisan |
            <a href="https://github.com/AnamariaGherghisan" target="_blank">
              {" "}
              GitHub
            </a>
          </p>
          <p>
            Enrico Carnevale |
            <a href="https://github.com/ThatGuyWithAHammer" target="_blank">
              {" "}
              GitHub
            </a>
          </p>
          <p>
            Nadiar Paim |
            <a href="https://github.com/nadiarpaim" target="_blank">
              {" "}
              GitHub
            </a>
          </p>
          <p>
            Steven Smith |
            <a href="https://github.com/The-Coding-Demon" target="_blank">
              {" "}
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
