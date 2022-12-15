<script>
    import axios from "axios";

    const res = axios('http://localhost:8000/api/v1/demo/posts').then((res) =>
        console.log(res.data)
    );
    // console.log(res.statusText)
    
</script>

<svelte:head><title>Signup</title></svelte:head>


<section>
    <form method="POST">
        <input type="text" placeholder="firstname" name="first" required/><br>
        <input type="text" placeholder="lastname" name="last" required/><br>
        <input type="text" placeholder="email" name="email" required/><br>
        <input type="password" placeholder="password" name="password" required/><br>

        <button>Login</button>
    </form>

    <p>No account yet?<a href="/signup">Sign Up</a></p>
</section>