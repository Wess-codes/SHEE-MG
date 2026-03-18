import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "SHEE-MG Website <onboarding@resend.dev>",
      to: "info@shee-mg.co.ke",
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    console.log("Email sent:", data);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
