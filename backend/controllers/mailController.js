import mailServices from "../services/mailServices.js";




const sendMail = async (req, res) => {
const { nom, email, telephone, sujet, message } = req.body;
    try {
        const result = await mailServices.sendMailMailjet({
      subject: sujet,
      text: message,
html: `
  <div style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; padding:20px; border-radius:6px;">
      
      <h2 style="color:#333; border-bottom:2px solid #007bff; padding-bottom:10px;">
        Nouveau message depuis le formulaire de contact @Digidias
      </h2>

      <p><strong>Nom :</strong> ${nom}</p>
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

    });
        res.status(200).json({ message: "Email envoyé avec succès", data: result });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'envoi de l'email", error: error.message });
    }
};

export default {
    sendMail,
};

