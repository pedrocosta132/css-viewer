<script>
    export let text = 'Button';
    export let isActive = false;
    export let onClick = () => {};
</script>

<button 
    type="button" 
    class={isActive ? "active" : undefined} 
    on:click={onClick}
>{text}</button>

<style>
    button {
        padding: 8px 16px;
        border: 0;
        border-radius: 100px;
        background-color: var(--mute);
        text-transform: capitalize;
        cursor: pointer;
        transition: 200ms;

        &.active {
            color: var(--background);
            background-color: var(--primary);
        }
    }
</style>