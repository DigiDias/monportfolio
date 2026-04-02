import mailServices from "../services/mailServices.js";




const sendMail = async (req, res) => {
const { nom, prenomF, email, telephone, sujet, message } = req.body;
    try {
        const result = await mailServices.sendMailMailjet({
      subject: sujet,
      text: message,
      email,
      html: `

  <div style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; padding:20px; border-radius:6px;">
      
      <h2 style="color:#333; border-bottom:2px solid #007bff; padding-bottom:10px;">
        Nouveau message depuis le formulaire de contact @Digidias
      </h2>

      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Prénom :</strong> ${prenomF}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <p><strong>Sujet :</strong> ${sujet}</p>

      <div style="margin-top:15px; padding:10px; background:#f8f9fa; border-left:4px solid #007bff;">
        <p style="margin:0;"><strong>Message :</strong></p>
        <p style="margin:5px 0 0;">${message}</p>
      </div>

      <p style="margin-top:30px; font-size:12px; color:#777;">
        Message envoyé depuis le formulaire de contact du site @DiGiDias.
      </p>

    </div>
  </div>
`
    ,
html2: `
<div style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding:20px;">
  <div style="max-width:600px; margin:auto; background:#ffffff; padding:30px; border-radius:8px;">

    <h2 style="color:#333; margin-bottom:20px;">
      Bonjour ${prenomF},
    </h2>

    <p style="color:#555; font-size:16px; line-height:1.6;">
      Nous vous remercions pour votre message.
    </p>

    <p style="color:#555; font-size:16px; line-height:1.6;">
      Votre demande a bien été prise en compte et nous reviendrons vers vous dans les plus brefs délais.
    </p>

    <div style="margin:30px 0; padding:15px; background:#f8f9fa; border-left:4px solid #007bff;">
      <p style="margin:0; color:#333;">
        ✔ Demande reçue avec succès
      </p>
    </div>

    <p style="color:#555; font-size:16px; line-height:1.6;">
      Merci pour votre confiance.
    </p>

    <p style="margin-top:30px; color:#333;">
      Cordialement,<br/>
      <strong>L'équipe @Digidias</strong>
    </p>

    <hr style="margin:30px 0; border:none; border-top:1px solid #eee;" />

    <p style="font-size:12px; color:#999; text-align:center;">
      Cet email est une confirmation automatique suite à votre demande.
    </p>

  </div>
</div>
`


    });
        res.status(200).json({ message: "Email envoyé avec succès", data: result });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'envoi de l'email", error: error.message });
    }
};

export default {
    sendMail,
};

