<script>
    export let title = 'Title';
    export let options = [
        {name: 'Option 1', value: 'option1'},
        {name: 'Option 2', value: 'option2'}
    ];
    export let value = 'option1';

    const handleChangeValue = (newValue) => {
        value = newValue;
    }
</script>

<div class="card">
    <p>{title}</p>
    {#each options as option}
        <button type="button" class={option.value === value ? "active" : undefined} on:click={() => handleChangeValue(option.value)}>{option.name}</button>
    {/each}
</div>

<style>
    .card {
        width: 100%;
        max-width: 330px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        border: 1px solid var(--secondary);
        border-radius: 8px;
        transition: 300ms;

        &:hover {
            border: 1px solid var(--primary);
        }
    }
    p {
        text-transform: uppercase;
        font-weight: bold;
    }
    button {
        width: 100%;
        padding: 8px 16px;
        border: 1px solid var(--secondary);
        border-radius: 8px;
        background-color: var(--background);
        text-transform: capitalize;
        cursor: pointer;

        &.active {
            color: var(--background);
            border: 1px solid var(--primary);
            background-color: var(--primary);
        }
    }
</style>