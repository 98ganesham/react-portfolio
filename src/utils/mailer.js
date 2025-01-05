import emailjs from "@emailjs/browser";
const sendMail = (data) => {
	const mailServiceKey = "service_j0cofji";
	const templateKey = "template_adk0q37";
	const publicKey = "YK0VT9H_dzjCekHtB";
	const templatePrams = {
		name: data.name,
		email: data.email,
		phone: data.phone,
		description: data.description,
	};
	return emailjs.send(mailServiceKey, templateKey, templatePrams, publicKey);
};
export default sendMail;
