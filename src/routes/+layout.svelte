<script>
    // import Header from "$components/Header.svelte";
    import TopBar from "../components/TopBar.svelte";

</script>

<TopBar />
<main>
    <slot />
</main>

<style>
    main {
        width: 100%;
        min-height: calc(100vh - 21px);
        margin: 0 auto;
        padding: 0 8px;
    }
</style>
