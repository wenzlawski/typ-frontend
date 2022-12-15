<script lang="ts">
  import { goto } from "$app/navigation";
  import {browserGet, browserSet, post} from "$lib/utils/requestUtils";
  import { variables } from '$lib/utils/constants';
  import type { UserResponse } from "$lib/interfaces/user.interface";
  import type { CustomError } from "$lib/interfaces/error.interface";
  import { notificationData } from "$lib/store/notificationStore";
  import { changeText } from "$lib/helpers/buttonText";
  import axios from "axios";


  let email = '', password = '', errors: Array<CustomError>;

  const handleLogin = async () => {
    if (browserGet('refreshToken')) {
      localStorage.removeItem('refreshToken');
    }
    // const [jsonRes, err] = await post(fetch, "http://localhost:8000/api/v1/users/login/token", {
    const formData = new FormData()
    const res = await axios.post("http://localhost:8000/api/v1/users/login/token", {
      email: email,
      password: password
    });
    // const response: UserResponse = jsonRes;

    // if (err.length > 0) {
    //   errors = err;
    // } else if (response.user) {
    //   if (response.user.tokens && response.user.tokens.refresh) {
    //     browserSet('refreshToken', response.user.tokens.refresh);
    //   }
    //   notificationData.update(() => 'Login successful...');
    //   await goto('/');
    // }
  }
</script>


<svelte:head><title>Login</title></svelte:head>

<section>
  {#if errors}
    {#each errors as error}
      <p>{error.error}</p>
    {/each}
  {/if}
  <form method="POST">
    <input 
      type="email" 
      name="email" 
      aria-label="Email address"
      placeholder="Email address"
      required 
    />

    <input 
      type="password" 
      name="password" 
      aria-label="Password"
      placeholder="Password"
      required 
    />

    <button>Login</button>
  </form>

  <p>No account yet?<a href="/signup">Sign Up</a></p>
</section>
