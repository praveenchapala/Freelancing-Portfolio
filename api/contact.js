import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, projectType, budget, message } = req.body;

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "shipwithpraveen@gmail.com",
      subject: `🚀 New Project Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Project Type:</strong> ${projectType}</p>

        <p><strong>Budget:</strong> ${budget}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
    });
  }
}