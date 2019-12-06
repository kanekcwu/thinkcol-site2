<script>
    import { getContext , onMount } from "svelte";
    import { answersctx } from "./ctx.js";

    

    const onclickanswer = b => {
        answersctx.update(x => {
            x["2"] = b;
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
            <h1>2</h1>
            <h2>Have you thought of any AI ideas to solve your business pain points?</h2>
            <p>
            Everyone’s first step in the AI ecosystem is different.  It all starts with tackling your business pain points.
            </p>
            <div class="buttons">
                <button on:click={()=>onclickanswer(true)}>Yes</button>
                <button on:click={()=>onclickanswer(false)}>No</button>
            </div>
        </div>
    </div>
</div>