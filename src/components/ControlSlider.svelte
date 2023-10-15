<script>
    export let value = 0;
    export let min = -10;
    export let max = 10;

    const handleChangeValue = (e) => {
        value = e.target.value;
    }
</script>

<div class="slider">
    <span>{value}</span>
    <input 
        type="range" 
        min={min}
        max={max}
        value={value}
        on:change|preventDefault={handleChangeValue} 
    />
</div>

<style>
    .slider {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    span {
        min-width: 32px;
        text-align: center;
    }
    input[type=range] {
        flex: 1;
    }
</style>