import sgMail from "@sendgrid/mail";
import { readPDFFile } from "./tools.js";

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

export const sendEmail = async (blogPost, pdf) => {
//   const attachment = await (await readPDFFile(pdf)).toString("base64");
  const msg = {
    to: "emanuelefurlani.go@gmail.com", 
    from: "emanuelefurlani.go@gmail.com",
    subject: "The blog Post you created",
    html: `<p>Hello <strong>${blogPost.author.name}!</strong></p><p>Here is your <strong>Blog Post!</strong></p><p>Please see it attached</p><p>Best Regards. <br/> Strive School.</p>`,
    // attachments: [
    //   {
    //     content: attachment,
    //     filename: "Blog post.pdf",
    //     type: "application/pdf",
    //     disposition: "attachment",
    //   },
    // ],
  };

  await sgMail.send(msg);
};
