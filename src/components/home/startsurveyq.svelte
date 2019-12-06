<style>
    div {
        display: inline-grid;
        grid-auto-rows: repeat(2, auto);
        grid-auto-columns: repeat(2,1fr);
        column-gap: 2em;
    }

    h3 {
        grid-column: 1 / span 2;
    }

    button {
        background-color: var(--button-colour);
        border: 2px solid var(--button-text-colour);
        padding: 10px;
        border-radius: 5px;
        transition: all 0.2s ease;
        cursor: pointer;
    }

    button:hover {
        border-color: var(--button-active-colour);
        background-color: var(--button-active-colour);
        color:var(--button-active-text-colour);
    }
</style>


<script>
    import { goto } from "@sapper/app";

    const startsurvey = ()=> goto("survey");
</script>

<div>
    <h3>8 easy questions to assess your AI</h3>
    <button on:click={startsurvey}>Start survey</button>
    <button>Learn More</button>
</div>