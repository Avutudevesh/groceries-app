import keys from "../../../keys";
const requestBody = (emailId, password) => ({
	client_id: keys.IDENTITY_CLIENT_ID,
	fields: [
		{
			id: "password",
			value: password,
		},
		{
			id: "username",
			value: emailId,
		},
	],
	id: "usernamePassword",
});

export default requestBody;
