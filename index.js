
        
        anime({
            targets: 'header',
            translateY: [
                {value: 320, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 0, duration: 300, delay:2000, easing: 'easeInOutQuad' },
            ],
            opacity: [
                {value: 1, duration: 1, delay:0, easing: 'easeOutExpo' },  //началльные положения
            ],
        });
        anime({
            targets: '.text-1',
            translateX: [
                {value: -400, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 0, duration: 400, delay:1200, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: '.box1',
            translateX: [
                {value: 100, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 0, duration: 400, delay:1100, easing: 'easeInOutQuad' },
            ],
            width: [
                {value: 120, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 296.45, duration: 400, delay:1100, easing: 'easeInOutQuad' }, 
            ],
        });
        anime({
            targets: '.text-2',
            translateY: [
                {value: 400, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 0, duration: 400, delay:1200, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: '.box2',
            translateX: [
                {value: 100, duration: 1, delay:0, easing: 'easeOutExpo' }, //началльные положения
                {value: 0, duration: 400, delay:1100, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: '.logo',
            scale: [
                {value: 1.4, duration: 500, delay:500, easing: 'easeInOutQuad' },
                {value: 1, duration: 500, delay:1000, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: 'nav',
            opacity: [
                {value: 1, duration: 500, delay:2100, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: 'main',
            opacity: [
                {value: 1, duration: 500, delay:2100, easing: 'easeInOutQuad' },
            ],
        });
        anime({
            targets: 'footer',
            opacity: [
                {value: 1, duration: 500, delay:2100, easing: 'easeInOutQuad' },
            ],
        });   
        $(function() {
            $('.team_slider').slick({
                infinite: true,
                arrows: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 2,
                slidesToScroll: 1,
                
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            arrows: false,
                            dots: true,
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            arrows: false,
                            dots: true,
                            slidesToShow: 1,
                        }
                    }
                ]
            
            });
        });
        window.addEventListener('DOMContentLoaded', function() {

            var videos = document.querySelectorAll('.video');
            
            videos.forEach(function(video) {
                video.addEventListener('click', function() {
        
                    if (video.classList.contains('ready')) {
                        return;
                    }
                
                    video.classList.add('ready');
                
                    var src = video.dataset.src;
                
                    video.insertAdjacentHTML('afterbegin', '<iframe src="'+ src +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
                    
                });
            });
        });