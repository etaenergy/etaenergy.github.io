var $b5edb57edb8111df$exports = {};
gsap.registerPlugin(ScrollTrigger);
(function($) {
    $(document).ready(function() {
        initialiseApp();
        function initialiseApp() {
            initialiseGSAPScrollTriggerPinningHorizontal();
            initialiseLenisScroll();
        }
        function initialiseGSAPScrollTriggerPinningHorizontal() {
            let sectionPin = document.querySelector('#section_pin');
            let containerAnimation = gsap.to(sectionPin, {
                scrollTrigger: {
                    trigger: '#section_to-pin',
                    start: 'top top',
                    end: ()=>"+=" + sectionPin.offsetWidth,
                    pin: true,
                    scrub: true
                },
                x: ()=>-(sectionPin.scrollWidth - document.documentElement.clientWidth) + "px",
                ease: 'none'
            });
            var imageWrappers = sectionPin.querySelectorAll('.image_wrapper');
            imageWrappers.forEach((imageWrapper)=>{
                var imageWrapperID = imageWrapper.id;
                gsap.to(imageWrapper, {
                    scrollTrigger: {
                        trigger: imageWrapper,
                        start: 'left center',
                        end: 'right center',
                        containerAnimation: containerAnimation,
                        toggleClass: {
                            targets: '.' + imageWrapperID,
                            className: 'active'
                        }
                    }
                });
            });
        }
        function initialiseLenisScroll() {
            const lenis = new Lenis({
                smoothWheel: true,
                duration: 1.2
            });
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time)=>{
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
        }
    });
})(jQuery);


//# sourceMappingURL=services.fe1aa9db.js.map
