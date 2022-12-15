<script>
    import axios from "axios";

    async function loadPosts() {
		const res = await axios('http://localhost:8000/api/v1/demo/test');
        console.log(res.statusText)
        
		if (res.statusText == "OK") {
			const data = await res.data;

            console.log(data)
			return data;
		}

		const { message } = await res.data;

		return {
			error: new Error(message)
		};
	};
</script> 


<div>
    <h1 class="text-3xl font-bold underline mb-6">
        Blog Posts
    </h1>

    {#await loadPosts()}
    ...
    {:then posts}
        {#each posts as post}
            <h1>{post.title}</h1>
            <h4>Publish date: {post.date}</h4>
            <p>{post.text}</p>
        {/each}
    {/await}
</div>