const body = document.querySelector('body');

const wiper = document.createElement('div');
wiper.classList.add('wiper')
body.appendChild(wiper);

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
    
    // const mainText = document.querySelectorAll('.move')

    // const mainPageObserver 
    
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

        // async once(data) {

        // }
        
        }
        
        
        
    //     {
    //         name: "fadeIn",
    //         once({ current, next, trigger }) {
    //             return new Promise(resolve => {
    //                 const tl = gsap.timeline({
    //                     onComplete() {
    //                         resolve()
    //                     }
    //                 })

    //                 tl
    //                     .set(next.container, { opacity: 0 })
    //                     .to(next.container, { opacity: 1, delay: 1 })
    //             })
    //         },
    //         name: 'next',
    //         leave({ current, next, trigger }) {
    //             return new Promise(resolve => {

    //                 const tl = gsap.timeline({
    //                     onComplete() {
    //                         resolve()
    //                     }
    //                 })

    //                 tl
    //                 .set(wiper, {x: 0}, 0)
    //                 .to(wiper, {x: 0}, 0)
                    


    //             })

    //         },
    //         enter({ current, next, trigger }) {
    //             runScripts();

    //             return new Promise(resolve => {
                    
    //                 const tl = gsap.timeline({
    //                     onComplete() {
    //                         resolve()
    //                     }
    //                 })

    //                 tl
    //                 .to(wiper, {x: '100%'}, 0)
                    
    //             })
    //         }
    //     }

    ],
    // views: [],
    // debug: true
})




// barba.init({
//     preventRunning: true,
//     sync: true,
//     debug: true,
//     logLevel: 'warning',

//     transitions: [
//         {
//             async leave(data) {
//                 const done = this.async();

//                 pageTransition();
//                 await delay(1000);
//                 done()
//             },

            
//         },
//     ]
// })
