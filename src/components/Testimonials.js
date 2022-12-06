import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./Testimonials.css";

export const Testimonials = () => {
    return (
        <div className="Testimonials">
            <br/>
            <h2>From our customers</h2>
            <div class="container mt-5 mb-5">

                <div class="row g-2">
                    <div class="col-md-4">
                        <div class="card p-3 text-center px-4 testimonial-card">

                            <div class="user-image">

                                <img src="assets/person1.jpg" class="rounded-circle" width="80" />

                            </div>

                            <div class="user-content">

                                <h5 class="mb-0">Akash Dutta</h5>
                                <span>Software Developer</span>
                                <p>With lots of possitive feedback from our customers. We would like to thanks training team & Mr. Ayush for making this happen without any complications. We got tie ups with used car dealers & car showrooms.</p>

                            </div>

                            <div class="ratings">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>

                            </div>

                        </div>
                    </div>

                    <div class="col-md-4 ">

                        <div class="card p-3 text-center px-4 testimonial-card">

                            <div class="user-image">

                                <img src="assets/person2.jpg" class="rounded-circle" width="80" />

                            </div>

                            <div class="user-content">

                                <h5 class="mb-0">Arpan Ghosh</h5>
                                <span>Web Developer</span>
                                <p>With lots of positive feedback from our customers, we would like to thank the installation & training team for the outstanding performance in training our guys, the enthusiasm with which your team handled our boys was truly exceptional, we are truly grateful and would like to express our sincere gratitude, and also we thank Mr.Ayush for making all this happen without any complications.</p>

                            </div>

                            <div class="ratings">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-4">

                        <div class="card p-3 text-center px-4 testimonial-card">

                            <div class="user-image">

                                <img src="assets/person3.jpg" class="rounded-circle" width="80" />

                            </div>

                            <div class="user-content">

                                <h5 class="mb-0">Debojyoti D'Souza</h5>
                                <span>Software Architect</span>
                                <p>New technology, fabulous machinery, less time taken by you guys!! Result was perfect, delivered car with a smile on your face.. thanks.. Will recommend all!!</p>

                            </div>

                            <div class="ratings">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
