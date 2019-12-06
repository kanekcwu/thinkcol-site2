<script>
    import { getContext , onMount } from "svelte";
    import { answersctx } from "./ctx.js";

    

    const onclickanswer = b => {
        answersctx.update(x => {
            x["6"] = b;
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
            <h1>6</h1>
            <h2>Is your team equipped with AI knowledge and skills?</h2>
            <p>
            Not everyone has to be an expert on AI.  Ideally, team members should be capable in identifying what AI can and cannot do.
            </p>
            <div class="buttons">
                <button on:click={()=>onclickanswer(true)}>Yes</button>
                <button on:click={()=>onclickanswer(false)}>No</button>
            </div>
        </div>
    </div>
</div>