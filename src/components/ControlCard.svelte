<script>
    import ControlButton from "$components/ControlButton.svelte";
    import ControlSlider from "./ControlSlider.svelte";

    export let title = "Title";
    export let type = "select";
    export let options = null;
    export let value = "option1";

    const handleChangeValue = (newValue) => {
        value = newValue;
    };
</script>

<div class="card">
    <p>{title}</p>
    <div class="controls">

        {#if type === 'select'}    
            {#each options as option}
                <ControlButton
                    text={option.name}
                    isActive={option.value === value}
                    onClick={() => handleChangeValue(option.value)}
                />
            {/each}
        {:else if type === 'slider'}
            <ControlSlider 
                {...options}
                bind:value={value}
            />
        {/if}

    </div>
</div>

<style>
    .card {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    p {
        text-transform: uppercase;
        font-weight: bold;
    }
    .controls {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
    }
</style>
