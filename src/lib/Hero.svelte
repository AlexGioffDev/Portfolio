<section class="hero-section" id="about">
    <div class="hero-container">
        <div class="element">
            <h1>Welcome!</h1>
            <h1>I'm <span>Alex Gioffre'</span></h1>
            <p>I'm a creative front-end web developer with a passion for crafting visually stunning and user-friendly websites.</p>
        </div>
    </div>
</section>

<style>
    .hero-section {
        min-height: 30vh;
        width: 100%;
        padding: 20rem 3rem;
    }

    .hero-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

    }

    .element {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        text-transform: uppercase;
        color: var(--secondary-color);
        animation: fade-left 1s 0s ease-in forwards;
    }

    .element h1 {
        font-size: 3.1rem;
    }

    .element span {
        color: var(--primary-color)
    }

    .element p {
        font-size: 1.5rem;
        text-transform: uppercase;
        max-width: 80%;
        text-align: justify;
        line-height: 1.8rem;
        font-weight: 400;
    }

    @media (min-width: 768px){
        .hero-section {
            padding: 20rem 5rem 0rem 5rem;
        }

        .element h1 {
            font-size: 5rem;
        }

        .element p {
            max-width: 75%;
            font-size: 2rem;
        }
    }

    @media (min-width: 1024px){
        .hero-section {
            padding-bottom: 10rem;
        }

        .element h1 {
            font-size: 8rem;
        }

        .element p {
            max-width: 90%;
            font-size: 4rem;
            line-height: 5rem;
        }
    }


    @keyframes fade-left {
        0% {
            transform: scale(2);
            opacity: 0;
        }

        55% {
            transform: scale(0.2);
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

</style>