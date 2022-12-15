import axios from "axios";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const email = form.get('email');
    const password = form.get('password');
    const first = form.get("first");
    const last = form.get("last");
    // do whatever you want to do with email and password

    // const form_data = new FormData();
    // form_data.append("username", email);
    // form_data.append("password", password);

    const data = {
      username: email,
      password: password,
      first: first,
      last: last,
    };

    console.log(data);

    const res = await axios('http://localhost:8000/api/v1/demo/test');
    console.log(res.statusText)

    if (res.statusText == "OK") {
      const data = await res.data;

      console.log(data);
      return data;
    }

    const { message } = await res.data;

    return {
      error: new Error(message)
    };

    // axios.post("http://localhost:8000/api/v1/demo/test", data)
    //   .then((res) => {
    //     console.log("Token", res.data.token)
    //   })
    //   .catch((err) => {
    //     console.log("error", err)
    //   })
  }
};