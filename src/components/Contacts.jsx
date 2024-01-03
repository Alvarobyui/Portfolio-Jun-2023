import styles from "./Contacts.module.css";
import { useState } from "react";
/* import sendIcon from "../assets/actions/send.png";
 */
import { useTranslation } from "react-i18next";

export const Contacts = () => {
  const { t } = useTranslation("contact");
  const[result, setResult] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(t("sending"));
    const formData = new FormData(event.target);
    
    formData.append("access_key", "ce3069e4-d8d4-4039-b966-562795683b98");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(t("sent"));
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
          placeholder={t("yourName")}
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder={t("yourEmail")}
          required
        />
      </div>
      <div className={styles.textareas}>
        <textarea
          className={styles.textarea}
          type="text"
          name="message"
          placeholder={t("yourMessage")}
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