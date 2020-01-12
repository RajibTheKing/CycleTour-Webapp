import React from 'react';

class ServiceStatic extends React.Component{

    render(){
        return(
            <section className="py-6 bg-gray-100">
                <div className="container">
                    <div className="text-center pb-lg-4">
                        <p className="subtitle text-secondary">One-of-a-kind vacation rentals </p>
                        <h2 className="mb-5">Rent your Bicycle without tension.</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="px-0 px-lg-3">
                                <div className="icon-rounded bg-primary-light mb-3">
                                    <svg className="svg-icon text-primary w-2rem h-2rem">
                                        <use xlinkHref="#destination-map-1"></use>
                                    </svg>
                                </div>
                                <h3 class="h5">Search Bikes</h3>
                                <p class="text-muted">Vestibulum sed tempor libero. Sed rutrum justo nunc, eu interdum sem vestibulum a</p>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div class="px-0 px-lg-3">
                                <div class="icon-rounded bg-primary-light mb-3">
                                    <svg class="svg-icon text-primary w-2rem h-2rem">
                                        <use xlinkHref="#pay-by-card-1"> 1 </use>
                                    </svg>
                                </div>
                                <h3 class="h5">Rent Bikes</h3>
                                <p class="text-muted">Vestibulum sed tempor libero. Sed rutrum justo nunc, eu interdum sem vestibulum a</p>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div class="px-0 px-lg-3">
                                <div class="icon-rounded bg-primary-light mb-3">
                                    <svg class="svg-icon text-primary w-2rem h-2rem">
                                        <use xlinkHref="#heart-1"> 2</use>
                                    </svg>
                                </div>
                                <h3 class="h5">24/7 Support</h3>
                                <p class="text-muted">Vestibulum sed tempor libero. Sed rutrum justo nunc, eu interdum sem vestibulum a</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default ServiceStatic