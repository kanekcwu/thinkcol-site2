<style>

    form {
        display:grid;
        grid-auto-flow: row;
        row-gap: 1em;
        background-color: #66C7CD;
        padding: 2em;
        padding-top:4em;
        margin:auto;
    }

    form input {
        padding: 1em;
    }
    form textarea {
        padding: 1em;
    }


    form input, form textarea {
        background-color: rgba(255, 255, 255, 0.2);
        color: #000000;
        border: 0;
    }

    form input, form textarea , 
    form input::placeholder, form textarea::placeholder {
        color: black;
    }

    form input,form ,form textarea{
        border-radius: 5px;
    }


    form button {
        margin: 1em 0em;
        padding: .3em 2em;
        background-color: #30486c;
        border:0;
        border-radius: 5px;
        color: white;
        justify-self: center;
    }

    span {
        background-color: #30486c;
        color:white;
        padding: 2em;
        border-radius: 5px;
        display: block;
        margin: 0em 5em;
        margin-top:30px;
        position:relative;
        bottom:-40px;
    }

    @media only screen and (max-width: 500px) {
        span {
            margin: 0em 1.5em;
            padding:1em;
        }
    }


    @media only screen and (min-width: 750px) {
        span {
            position: absolute;
            top: 2em;
            left: 6em;
            height:270px;
            width:850px;
        }
        form {
            padding: 50px 2em .5em 2em;
            max-width: 40em;
        }
        form input, form textarea {
            margin-left: 85px;
        }
    }


    div.field {
        display:grid;
        grid-template-columns: min-content auto;
        grid-auto-rows: min-content;
        column-gap: 0.5em;
        margin: 1em 0;
    }

    div.field > :global(svg) {
        align-self: center;
    }

    div.field > p {
        margin: 0;
    }
    div.field#address > p:nth-of-type(2) {
        grid-column: 2 / span 1;
    }

</style>

<script>
    import Icon from "fa-svelte";
    import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
    import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
    import { ajax } from "usefuljs/useful.modern.js";


    const handleSubmit = e =>{
        const fd = new FormData(e.target);
        const fdobj = Object.fromEntries(fd);
        ajax({
            url:"https://wjf34y418i.execute-api.us-east-1.amazonaws.com/default/thinkcol-contact-email",
            method:"post",
            body:fdobj
        });
    }
</script>

<div>
    <span>
        <h2>Contact Us</h2>
        <div class="field" id="address">
            <Icon icon={faMapMarkerAlt} />
            <p> 4/F, 4 Shell Street</p>
            <p>Tin Hau, Hong Kong</p>
        </div>
        <div class="field">
            <Icon icon={faEnvelope} />
            <p>info@thinkcol.com</p>
        </div>
        <div class="field">
            <Icon icon={faPhone} />
            <p>+852 3705 1019</p>
        </div>
        
        
    </span>
    <!--
    <form on:submit|preventDefault={handleSubmit}>
        
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="E-mail" required />
        <textarea placeholder="Contact us to find out how we can achieve your AI goals.  We will get back to you as soon as possible." name="message" required />
        <button type="submit">Send</button>
    </form>-->
</div>