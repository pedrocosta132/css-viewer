<script>
    import ControlButton from "$components/ControlButton.svelte";

    export let title = "Title";
    export let options = [
        { name: "Option 1", value: "option1" },
        { name: "Option 2", value: "option2" },
    ];
    export let value = "option1";

    const handleChangeValue = (newValue) => {
        value = newValue;
    };
</script>

<div class="card">
    <p>{title}</p>
    <div class="controls">
        {#each options as option}
            <ControlButton
                text={option.name}
                isActive={option.value === value}
                onClick={() => handleChangeValue(option.value)}
            />
        {/each}
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
