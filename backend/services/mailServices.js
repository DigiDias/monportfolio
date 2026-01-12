import e from "express";
import Mailjet from "node-mailjet";

export const sendMailMailjet = async ({ subject, text, html }) => {
  try {
    const mj = Mailjet.apiConnect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE,
      process.env.SMTP_USER
    );

    const formatAddresses = (field) =>
      Array.isArray(field)
        ? field.map((email) => ({ Email: email }))
        : [{ Email: field }];

    const request = mj.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            
            Email: process.env.SMTP_USER,
            Name: "Contact Site Digidias.re"
          },
          To: formatAddresses(process.env.SMTP_USER),
       
          Subject: subject,
          TextPart: text,
          HTMLPart: html
        }
      ]
    });

    const result = await request;
    console.log("✅ Email envoyé :", result.body);
    return result.body;

  } catch (err) {
    console.error("❌ Erreur envoi mail :", err);
    throw err;
  }
};

export default {
  sendMailMailjet,
};
