import "./Contact.css";
import gmailpng from "../Assets/Icons/gmail.png";
import instapng from "../Assets/Icons/instagram.png";
import watsapppng from "../Assets/Icons/whatsapp.png";
import linkdinpng from "../Assets/Icons/linkedin.png";

export default function Contact({ onClose }) {
  return (
    <>
      <div className="border-contact">
        <h2>Contact Me </h2>
        <hr />

        <div className="contact-icons">
          <a href="mailto:vishnukantmule@gmail.com">
            <img className="iconpng" src={gmailpng} alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/in/vishnukant-mule-5a9ba5221/">
            <img className="iconpng" src={linkdinpng} alt="LinkedIn" />
          </a>
          <a href="https://wa.me/9326513775">
            <img className="iconpng" src={watsapppng} alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/i___mr_akshay___i/">
            <img className="iconpng" src={instapng} alt="Instagram" />
          </a>
        </div>
      </div>
      <div>
        <button className="closebutton" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
}
