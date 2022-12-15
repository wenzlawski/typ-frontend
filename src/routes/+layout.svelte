<script>
    import Nav from '../lib/components/Nav.svelte';
    import "../app.css";

</script>

<main class='dark:bg-gray-900 font-sans'>
    <Nav />

    <div class="container">
        <slot class="container" />
    </div>
</main>


<style lang='scss'>
    main{
        margin: auto;
        font-family: 'Noto Sans JP', sans-serif;
    }

    .container{
        max-width: 100%;
        margin: auto;
    }

</style>