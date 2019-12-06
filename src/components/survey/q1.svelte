<script>
    import { getContext } from "svelte";
    import { answersctx } from "./ctx.js";

    

    const onclickanswer = b => {
        answersctx.update(x => {
            x["1"] = b;
            return x;
        });
    }
</script>




<div class="q">
    <div class="left">
        <img src="q1.png" alt="question-1" />
    </div>
    <div class="right">
        <div class="question">
            <h1>1</h1>
            <h2>Do you have any AI talent in your team?</h2>
            <p>
            We believe in building your in-house capabilities in the long run so that your company is AI ready.
            </p>
            <div class="buttons">
                <button on:click={()=>onclickanswer(true)}>Yes</button>
                <button on:click={()=>onclickanswer(false)}>No</button>
            </div>
        </div>
    </div>
</div>