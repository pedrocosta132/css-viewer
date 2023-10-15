<script>
    import FlexPage from "$lib/pages/flex.svelte";
    import BoxShadowPage from "$lib/pages/box-shadow.svelte";
    import Redirect from "$components/Redirect.svelte";

    export let data;
    let page = data.page;
</script>


{#if page === "flex"}
    <FlexPage />    
{:else if page === "box-shadow"}
    <BoxShadowPage />    
{:else}
    <Redirect to="/404" />
{/if}