
// components
import SearchForm from './SearchForm';

const Hero = () => {
    return (
        <section className="pt-5 pb-5 homepage-search-block position-relative" style={{ backgroundImage: "url('../img/hero.jpeg')" }}>
	        <div className="banner-overlay"></div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-8">
	                    <div className="homepage-search-title">
                            <h1 className="mb-2 font-weight-normal" style={{ color: 'white' }}><span className="font-weight-bold">Ebédelnél valami finomat?</span></h1>
                            <h5 className="mb-5 text-warning font-weight-normal">Keress a városodban menüs éttermet!</h5>
                        </div> {/* homepage-search-title */}
	                    <div className="homepage-search-form">
                            <SearchForm />
                        </div> {/* homepage-search-form */}
                        <h6 className="mt-4 text-shadow font-weight-normal" style={{ color:'white' }}>Legújabb éttermek</h6>
                        RestaurantCarousel
                    </div> {/* col-md-8 */}
                    
                </div> {/* row d-flex align-items-center */}
            </div> {/* container */}
        </section>
    )
}

export default Hero;