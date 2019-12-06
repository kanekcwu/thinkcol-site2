<script>
    import { getContext , onMount } from "svelte";
    import { answersctx } from "./ctx.js";

    

    const onclickanswer = b => {
        answersctx.update(x => {
            x["4"] = b;
            return x;
        });
    }

    let tgt;

    onMount(()=>{
        if(tgt)tgt.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
</script>


<div class="q" bind:this={tgt}>
    <div class="left">
        <img src="q1.png" alt="question-1" />
    </div>
    <div class="right">
        <div class="question">
            <h1>4</h1>
            <h2>Do you think your current data can provide you with enough insights?</h2>
            <p>
            In order to support decision making, data has to be inspected, cleansed and transformed before it can form insights.
            </p>
            <div class="buttons">
                <button on:click={()=>onclickanswer(true)}>Yes</button>
                <button on:click={()=>onclickanswer(false)}>No</button>
            </div>
        </div>
    </div>
</div>