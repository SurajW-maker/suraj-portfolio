

        // Preloader
        $(window).on('load', function() {
            $('#preloader').fadeOut('slow');
        });

        // Back to top button
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        });
        
        $('.back-to-top').click(function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });

        // Smooth scrolling for navigation links
        $('a.nav-link').on('click', function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                var hash = this.hash;
                
                // Update active nav link
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
                
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 70
                }, 800);
            }
        });

        // Form submission
        $('#contactForm').on('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });

        // Animate progress bars when in viewport
        function animateProgressBars() {
            $('.progress-bar').each(function() {
                var elementPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                var percent = $(this).attr('style');
                if (elementPos < topOfWindow + 600) {
                    $(this).css(percent);
                }
            });
        }

        // Initialize on page load
        animateProgressBars();
        
        // Animate on scroll
        $(window).scroll(function() {
            animateProgressBars();
        });
