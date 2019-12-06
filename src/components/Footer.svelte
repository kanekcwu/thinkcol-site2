<style>
    footer {
        display: flex;
        flex-direction: column;
        bottom:0;
        left:0;
        right:0;
        background-color: #304864;
        color: white;
        padding: 2em;
        word-wrap: break-word;
    }

    /* desktop only */
    @media only screen and (min-width: 769px) {
        footer{
            display:grid;
            grid-template-columns: repeat(3,1fr);
            grid-auto-rows: min-content auto min-content;
            column-gap: 2em;
        }
        footer > * {
            justify-self: center;
        }
        footer #copyright {
            grid-column: 2 / span 1;
            text-align: center;
        }
    }

    /* mobile only */
    @media only screen and (max-width: 768px) {
        h3 {
            text-decoration: underline;
        }
    }


    form button {
        background-color: #ff5e00;
        color:white;
    }
    form button,form input {
        padding: 0.7em 1em;
        border-radius: 5px;
        border: 0;
    }

    p {
        font-size: 0.9em;
    }


</style>


<script>
    const handleSignup = e=>{
        const fd = new FormData(e.target);
        const fdobj = Object.fromEntries(fd);
    }
</script>

<footer>
    <div>
        <h3>About Us</h3>
        <p>Our mission is to promote collaborative thinking with A.I. Technology</p>
    </div>
    <div>
        <h3>Contact</h3>
        <div>
            <p>4/F, 4 Shell Street</p>
            <p>Tin Hau, Hong Kong</p>
            <p>Phone: +852 3705 1019</p>
            <p>E-Mail: info@thinkcol.com</p>
        </div>
    </div>
    <div>
        <h3>Stay Connected</h3>
        <form on:submit|preventDefault={handleSignup}>
            <p>Subscribe to our newsletter</p>
            <input type="email" name="email" required />
            <button type="submit">Sign-up</button>
        </form>
        
    </div>

    <p id="copyright">Copyright ThinkCol, 2019 , All Rights Reserved.<p>
</footer>