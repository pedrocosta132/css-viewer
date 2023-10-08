<section id="hero">
    <div class="text">
        <p>Make your css changes in <span>real time</span>.</p>
    </div>
    <div class="thing-wrapper">
        <span class="thing" />
        <span class="thing thing_primary" />
        <span />
        <span class="thing thing_accent" />
    </div>
</section>

<style lang="scss">
    #hero {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        padding: 64px 0;
    }
    .thing-wrapper {
        display: none;
        grid-template-columns: 100px 100px;
        grid-template-rows: 100px 100px;
        justify-content: center;
        gap: 8px;
    }
    .thing {
        width: 100%;
        height: 100%;
        background-color: var(--secondary);
        border-radius: 1rem;

        &.thing_primary {
            background-color: var(--primary);
            border-radius: 1rem 0 1rem 1rem;
            animation: borderAnimation 6s infinite alternate linear;
        }

        &.thing_accent {
            background-color: var(--accent);
            border-radius: 50% 0 50% 50%;
        }
    }
    .text {
        max-width: 75%;

        & > p {
            font-size: 48px;
            font-weight: bold;

            & > span {
                color: var(--primary);
                font-weight: normal;
                text-decoration: underline;
            }
        }
    }

    @media screen and (min-width: 768px) {
        #hero {
            grid-template-columns: 1fr 1fr;
        }
        .text {
            max-width: 100%;
        }
        .thing-wrapper {
            display: grid;
        }
    }

    @keyframes -global-borderAnimation {
        0% {
            border-radius: 1rem;
        }
        50% {
            border-radius: 0 50% 50% 50%;
        }
        100% {
            border-radius: 50%;
        }
    }
</style>
