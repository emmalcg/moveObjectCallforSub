const loading = () => {
    const div = document.querySelector('.typing');
    div.classList.add('show');



    const tl = new gsap.timeline({
        onComplete: () => {
            div.classList.remove('show');
        }
    });

    tl.to('.text', {text: {value: "MoveObjects On"}, duration: 4, delay: 0.2, ease: "none"})
    tl.to('.typing span', {delay: 2, duration: 0.5, opacity: 0})
    tl.to('.typing', {duration: 1, opacity: 0})
    // tl.to('.typing', {delay: 2, duration: 1, scale: 0})
}

loading();

const runScripts = () => {
    const borders = document.querySelectorAll('.border');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.intersectionRatio >= 0.1) {
                entry.target.classList.add('in-view')
            } else {
                entry.target.classList.remove('in-view')
            }
        })
    }, {
        threshold: [0, 0.1, 1]
    })
    
    borders.forEach((border => {
        observer.observe(border)
    }))  
}

runScripts();

const delay = (n) => {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done()
        }, n);
    })
}

const pageTransition = () => {
    const tl = gsap.timeline();
    tl.to('.loading-screen', {
        duration: 1,
        width: '100%',
        left: '0%',
        ease: 'Expo.easeInOut'
    })

    tl.to('.loading-screen', {
        duration: 1,
        width: '100%',
        left: '100%',
        ease: 'Expo.easeInOut',
        delay: 0.3
    })

    tl.set('.loading-screen', { left: '-100%'})
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async();

                pageTransition();
                await delay(1000);
                done()
            }
        ,
        
        async enter(data) {
            runScripts();
        },

        
        
        }
    ],
})





