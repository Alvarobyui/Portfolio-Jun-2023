import styles from "./Contacts.module.css";
import { useState } from "react";
/* import sendIcon from "../assets/actions/send.png";
 */
export const Contacts = () => {
  const[result, setResult] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    
    formData.append("access_key", "ce3069e4-d8d4-4039-b966-562795683b98");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("Sent! Thank you for contacting me");
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <form
      className={styles.wrapper}
      target="_blank"
      /* action="https://formsubmit.co/your@email.com"
      method="POST" */
      onSubmit={onSubmit}
    >
      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
      </div>
      <div className={styles.textareas}>
        <textarea
          className={styles.textarea}
          type="text"
          name="message"
          placeholder="Your message"
          required
        />
        <button className={styles.send} type="submit">
          <img className={styles.icon} src="/assets/actions/send.png" alt="" />
        </button>
      </div>
      <p className={styles.result}>{result}</p>
    </form>
  );
};