<script>
    import HeroButton from "../components/HeroButton.svelte";
    import Logo from "../components/Logo.svelte";
    import PageCard from "../components/PageCard.svelte";
    import FlexIllustration from "../components/Illustrations/Flex.svelte";

    export let data;
    let active = false;
</script>

<div class="cards" style="display:{active ? 'flex' : 'none'}">
    <div class="list">
        <PageCard title="flex" to="/flex" animationDelay="700ms">
            <FlexIllustration slot="illustration" width="150px" height="100px" itemSize="20px"/>
        </PageCard>
        <PageCard title="flex" to="/flex" animationDelay="900ms">
            <FlexIllustration slot="illustration" width="150px" height="100px" itemSize="20px"/>
        </PageCard>
        <PageCard title="flex" to="/flex" animationDelay="1100ms">
            <FlexIllustration slot="illustration" width="150px" height="100px" itemSize="20px"/>
        </PageCard>
    </div>
</div>
<div class="buttons">
    <HeroButton bind:isActive={active} />
</div>
<Logo isActive={active} />

<style>
    .buttons {
        position: fixed;
        bottom: 15vh;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
    }
    .cards {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: show 500ms;

        & .list {
            /* max-height: 70vh;
            overflow-y: scroll; */
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;

            @media screen and (min-width: 390px) {
                grid-template-columns: 1fr 1fr;
            }

            @media screen and (min-width: 768px) {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
    }
    @keyframes -global-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
