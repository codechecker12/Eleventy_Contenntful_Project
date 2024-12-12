const mailgun = require("mailgun-js");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  // Parse form data (handle application/x-www-form-urlencoded)
  let body;
  try {
    if (event.headers["content-type"] === "application/x-www-form-urlencoded") {
      body = querystring.parse(event.body);
    } else {
      body = JSON.parse(event.body);
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request body format" }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "All fields are required" }),
    };
  }

  const DOMAIN = "sandboxe26f71fb617c4d60b0929be8cb80274e.mailgun.org"; // Replace with your Mailgun domain
  const mg = mailgun({ apiKey: "98cc313647bcf82d91e9c34f75d7e554-da554c25-0488a152", domain: DOMAIN });

  const mailOptions = {
    from: `Website Contact Form <you@${DOMAIN}>`,
    to: "prathampatel0440@gmail.com", // Replace with actual emails
    subject: `[Auto-Generated] New Contact Form Submission`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await mg.messages().send(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
