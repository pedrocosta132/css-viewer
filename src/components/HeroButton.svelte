<script>
    export let isActive;

    const handleActive = () => {
        isActive = true;
    }
</script>

<button 
    type="button" 
    style="animation-play-state: {isActive ? 'running' : 'paused'}"
    on:click={handleActive}
>
    Click to see more
</button>

<style>
    button {
        padding: 1rem 2rem;
        border: 0;
        border-radius: 50px;
        color: var(--background);
        background-color: var(--primary);
        animation: vanish 500ms ease-out forwards;
        cursor: pointer;
    }

    @keyframes -global-vanish {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(20vh);
            opacity: 0;
        }
    }
</style>