<script>
    export let color = 'var(--primary)';
    export let textColor = 'var(--background)';
    export let text = 'Text';
</script>

<div class="alert" style="background-color: {color};">
    <p style="color: {textColor}">{text}</p>
</div>

<style>
    .alert {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: rgba(0,0,0,0.2) 0px 0px 5px 0px;

        & > p {
            font-size: 20px;
            text-align: center;
            margin: 0;
        }
    }
</style>