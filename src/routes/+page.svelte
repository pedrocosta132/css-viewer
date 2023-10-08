<script>
    import HeroButton from '../components/HeroButton.svelte';
    import Logo from '../components/Logo.svelte';
    export let data;
    let active = false;
</script>

<div class="buttons">
    <HeroButton bind:isActive={active}/>
</div>
<Logo isActive={active}/>

<style>
    .buttons {
        position: fixed;
        bottom: 15vh;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
    }
</style>


