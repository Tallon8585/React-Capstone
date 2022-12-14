import "../styles/contact.scss";

export default function Contact() {
  function sentMessage(e) {
    alert("Message Sent!");
  }
  return (
    <div className="contact-page">
      <div className="top-content">
        <h1>How to contact us</h1>
        <p>Phone: 444-555-6666</p>
        <p>Email: contact@contact.com</p>
      </div>
      <hr />
      <div className="bottom-content">
        <h1>Message Us: </h1>
        <form>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="email" placeholder="Email"></input>
          <textarea
            className="message-box"
            type="text"
            placeholder="Write us something"
          ></textarea>

          <button onClick={() => sentMessage()}>Send</button>
        </form>
      </div>
    </div>
  );
}
