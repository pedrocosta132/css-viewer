<script>
    export let width = '100%';
    export let height = '100%';
    export let bgColor = 'var(--secondary)';
    export let itemColor = 'var(--primary)';
    export let itemX = 3;
    export let itemSize = '33.3%';
    export let justifyContent = 'center';
    export let alignItems = 'center';
    export let gap = '1rem';
    export let styleItem = null;
    export let styleIllustration = null;
</script>

<div class="illustration" style="width: {width};height: {height};background-color: {bgColor};justify-content: {justifyContent};align-items: {alignItems};gap: {gap};{styleIllustration ? styleIllustration : ''}">
    {#each Array(itemX) as _, index (index)}
		<span style="background-color: {itemColor};width: {itemSize};height: {itemSize};{styleItem ? styleItem : ''}"/>
	{/each}
</div>

<style>
    .illustration {
        display: flex;
        padding: 1rem;
    }
</style>