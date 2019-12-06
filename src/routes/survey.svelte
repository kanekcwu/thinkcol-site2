<script>
    import { answersctx } from "../components/survey/ctx.js";
    import { arr_rm } from "usefuljs/useful.modern.js"
    import Q1 from "../components/survey/q1.svelte";
    import Q2 from "../components/survey/q2.svelte";
    import Q3 from "../components/survey/q3.svelte";
    import Q4 from "../components/survey/q4.svelte";
    import Q5 from "../components/survey/q5.svelte";
    import Q6 from "../components/survey/q6.svelte";
    import Q7 from "../components/survey/q7.svelte";
    import Q8 from "../components/survey/q8.svelte";

    let showpage1 = true;
    $: showpage2 = $answersctx["1"] !== undefined;
    $: showpage3 = showpage2 && $answersctx["2"]  !== undefined;
    $: showpage4 = showpage3 && $answersctx["3"]  !== undefined;
    $: showpage5 = showpage4 && $answersctx["4"]  !== undefined;
    $: showpage6 = showpage5 && $answersctx["5"]  !== undefined;
    $: showpage7 = showpage6 && $answersctx["6"]  !== undefined;
    $: showpage8 = showpage7 && $answersctx["7"]  !== undefined;


    $: showdone = showpage8 && $answersctx.values
</script>


<style>
    div :global(button) {
        background-color: var(--button-colour);
        border: 2px solid var(--button-text-colour);
        padding: 8px 15px;
        width: 5em;
        border-radius: 5px;
        transition: all 0.2s ease;
        cursor: pointer;
    }

    div :global(button:hover ){
        border-color: var(--button-active-colour);
        background-color: var(--button-active-colour);
        color:var(--button-active-text-colour);
    }







        div :global(.q .question) {
        display: inline-grid;
        grid-template-columns: min-content auto;
        grid-auto-rows: min-content;
        column-gap: 1em;
        row-gap: 1em;
        word-break: break-word;
        --text-colour: #0f6b0f;
        color: var(--text-colour);
    }


    div :global(.q .question > h1)  {
        grid-row: 1 / span 3;
        grid-column: 1 / span 1;
        font-size: 10em;
        padding: 0;
        margin: 0;
        line-height: 0.6em;
    }
    div :global(.q  .question > h2) {
        grid-row: 1 / span 1;
        grid-column: 2 / span 1;
        margin: 0;
        font-weight: bold;
    }
    div :global(.q .question > p)  {
        margin: 0;
    }


    div :global(.q) {
        display: grid;
        column-gap: 5em;
        height: calc(100vh - 57px);
    }

    /* desktop only */
    @media only screen and (min-width: 769px) {
        div :global(.q) {
            grid-template-columns: 2fr 3fr;
        }
    }


    /* mobile only */
    @media only screen and (max-width: 768px) {
        div :global(.q .left)  {
            display: none;
        }
    }

    div :global(.q > * ) {
        align-self: center;
    }
    
    div :global(.q .buttons)  {
        display:inline-grid;
        grid-auto-columns: min-content;
        grid-auto-flow: column;
        column-gap: 2em;
    }
</style>


<div>
    {#if showpage1}
        <Q1 />
    {/if}
    {#if showpage2}
        <Q2 />
    {/if}
    {#if showpage3}
        <Q3 />
    {/if}
    {#if showpage4}
        <Q4 />
    {/if}
    {#if showpage5}
        <Q5 />
    {/if}
    {#if showpage6}
        <Q6 />
    {/if}
    {#if showpage7}
        <Q7 />
    {/if}
    {#if showpage8}
        <Q8 />
    {/if}
</div>
