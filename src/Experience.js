import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <section class="experience py-5" id="experience">
                <div class="container py-3">
                    <h3 class="heading">Experience</h3>
                    <div class="row exp-grids">
                        <div class="col-lg-4 col-md-6">
                            <img src="images/exp1.jpg" alt=" " class="img-fluid" />
                            <div class="exp wthree">
                                <h4>Web Designer <span>2007 - 2010</span></h4>
                                <div class="clearfix"></div>
                                <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui nunc.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                            <img src="images/exp2.jpg" alt=" " class="img-fluid" />
                            <div class="exp wthree">
                                <h4>App Developer <span>2007 - 2010</span></h4>
                                <div class="clearfix"></div>
                                <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui nunc.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-lg-0 mt-4">
                            <img src="images/exp3.jpg" alt=" " class="img-fluid" />
                            <div class="exp wthree">
                                <h4>Web Developer <span>2007 - 2010</span></h4>
                                <div class="clearfix"></div>
                                <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui nunc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;