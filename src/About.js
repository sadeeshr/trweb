import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section class="about py-5" id="about">
                <div class="container py-3">
                    <h3 class="heading">About Me</h3>
                    <div class="row about-grids">
                        <div class="col-lg-4">
                            <h4 class="">Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int.</h4>
                            <p class="my-4">Nulla viverra pharetra sem, eget pulvinar neque et pharetra ac int. lorem ipsum Vestibulum. Sed placerat placerat dolor. Vestibulum at dui nunc. Nullam eu elit neque lectus. Aliquam erat ipsum volutpat. Nullam ac mattis mi. Donec tincidunt leoelit dictum viverra luctus pharetra ac .</p>
                            <a href="#"> Download CV <span class="fa ml-2 fa-download"></span> </a>
                        </div>
                        <div class="col-lg-4 col-md-6 my-lg-0 my-5">
                            <img src="images/about.jpg" alt="" class="img-fluid" />
                        </div>
                        <div class="col-lg-4 bar-grids">
                            <div class="wthree_skills">
                                <h6 class="mb-2">Designing & Developing<span> 95% </span></h6>
                                <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. lorem ipsum </p>
                                <div class="my-4">
                                    <h6 class="mb-2">Java and Scripting<span> 85% </span></h6>
                                    <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. lorem ipsum </p>
                                </div>
                                <h6 class="mb-2">Photoshop & Editing<span>90% </span></h6>
                                <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. lorem ipsum </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;