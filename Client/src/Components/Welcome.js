import img from '../wassets/images/Bls.png'
import '../wassets/css/style.css'
import $ from 'jquery'



function Welcome() {
    
	var fullHeight = () => {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var burgerMenu = () =>  {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				});
			}
		})
	};
	burgerMenu();
    return (
        <>
              
                <div className="page">
                    <nav id="colorlib-main-nav" role="navigation">
                        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
                        <div className="js-fullheight colorlib-table">
                            <div className="img" style={{ backgroundImage: 'url(../assets/wassets/images/Bls.png)' }} />
                            <div className="colorlib-table-cell js-fullheight">
                                <div className="row no-gutters">
                                    <div className="col-md-12 text-center">
                                        <h1 className="mb-4"><a href="index.html" className="logo"><img src={img}/></a></h1>
                                        <ul>
                                            <li className="active"><a href="index.html"><span>Home</span></a></li>
                                            <li><a href="about.html"><span>About</span></a></li>
                                            <li><a href="blog.html"><span>Blog</span></a></li>
                                            <li><a href="contact.html"><span>Contact</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div id="colorlib-page">
                        <header>
                            <div className="container">
                                <div className="colorlib-navbar-brand">
                                    <a className="colorlib-logo" href="index.html">Company Logo</a>
                                </div>
                                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
                            </div>
                        </header>
                        <section className="hero-wrap js-fullheight">
                            <div className="container px-0">
                                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                                    <div className="col-md-12 ftco-animate text-center">
                                        <div className="desc">
                                            <h1>Welcome To BLS</h1>
                                            <h3>A Software Development Company <span className="hover-underline-animation">Join US</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            
        </>



    );

}

export default Welcome