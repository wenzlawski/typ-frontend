import axios from "axios";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const email = form.get('email');
    const password = form.get('password');
    // do whatever you want to do with email and password

    // const form_data = new FormData();
    // form_data.append("username", email);
    // form_data.append("password", password);

    const data = {
      username: email,
      password: password,
    };

    console.log(data);


    axios.post("http://localhost:8000/api/v1/users/login/token", data)
      .then((res) => {
        console.log("Token", res.data.token)
      })
      .catch((err) => {
        console.log("error", err)
      })
  }
};