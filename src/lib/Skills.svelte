<script>
    let languages = [
        {
           "name": "HTML",
           "percentage": "100%"
        },
        {
            "name": "CSS",
            "percentage": "100%"
        },
        {
            "name": "JS",
            "percentage": "80%"
        },
        {
            "name": "Python",
            "percentage": "65%"
        },
        {
            "name": "React",
            "percentage": "90%"
        },
        {
            "name": "NextJS",
            "percentage": "60%"
        },
        {
            "name": "Bootstrap",
            "percentage": "100%"
        },
        {
            "name": "TailwindCSS",
            "percentage": "100%"
        },
        {
            "name": "Svelte",
            "percentage": "40%"
        },
        {
            "name": "Swift",
            "percentage": "40%"
        },
        {
            "name": "iOS",
            "percentage": "20%"
        }
    ]
</script>

<section id="skills">
    <div class="skills-container">
        <h1 class="title">Skills</h1>
        <div class="wrapper">
            <div class="groups">
                {#each languages as language}
                <div class="group-item">
                    <h1>{language.name}</h1>
                    <div class="bar-container">
                        <div class="bar" style="width: {language.percentage};" />
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>


<style>
    section {
        margin: 0;

        width: 100vw;
        background-color: var(--primary-color);
        min-height: 40rem;
        padding: 5rem 0 5rem 0;
       
        color: var(--background-color);
    }
    .skills-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    

    .skills-container h1.title {
        color: var(--background-color);
        font-size: 3.4rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    .wrapper {
        width: 100%;
        max-height: 35rem;
        overflow: auto;
        display: flex;
        flex-direction: column;
    }

    .groups {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        width: 100%;
    }

    .group-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }

    .group-item h1 {
        font-size: 2rem;
    }

    .group-item .bar-container {
        border: 1px solid var(--secondary-color);
        width: 75%;
        padding: 1.5rem 0;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
    }

    .group-item .bar-container .bar {
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        background-color: var(--background-color);
        color: var(--secondary-color);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 1024px){
        .skills-container {
            padding: 10rem;
            flex-direction: row;
            gap: 4rem;
            height: 30rem;
        }

        .skills-container h1.title {
            font-size: 6rem;
        }

        
    }


</style>