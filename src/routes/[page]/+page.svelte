<script>
    import FlexPage from "$lib/pages/flex.svelte";
    import Redirect from "$components/Redirect.svelte";

    export let data;
    let page = data.page;
</script>


{#if page === "flex"}
    <FlexPage />    
{:else if page === "flex1"}
    <FlexPage />    
{:else}
    <Redirect to="/404" />
{/if}