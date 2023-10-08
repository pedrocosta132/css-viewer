<script>
    import Header from "$components/Header.svelte";
</script>

<main>
    <slot />
</main>

<style>
    main {
        width: 100%;
        min-height: 100vh;
        margin: 0 auto;
        padding: 0 8px;
    }
</style>
