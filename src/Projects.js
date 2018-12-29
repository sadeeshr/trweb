import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div class="gallery py-5" id="projects">
                <div class="container py-3">
                    <h3 class="heading">Projects</h3>
                    <div class="row gallery_grid-more project-grids w3ls">
                        <div class="col-lg-3 col-md-4 col-6 w3layoutsits_w3layouts_gallery_grid1">
                            <a href="#popup2">
                                <img src="images/exp1.jpg" alt=" " class="img-fluid" />
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 w3layoutsits_w3layouts_gallery_grid1">
                            <a href="#popup3">
                                <img src="images/exp2.jpg" alt=" " class="img-fluid" />
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 w3layoutsits_w3layouts_gallery_grid1 mt-md-0 mt-4">
                            <a href="#popup4">
                                <img src="images/exp3.jpg" alt=" " class="img-fluid" />
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 w3layoutsits_w3layouts_gallery_grid1 mt-lg-0 mt-4">
                            <a href="#popup5">
                                <img src="images/exp1.jpg" alt=" " class="img-fluid" />
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 w3layoutsits_w3layouts_gallery_grid1 mt-4">
                            <a href="#popup6">
                                <img src="images/exp2.jpg" alt=" " class="img-fluid" />
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 w3layoutsits_w3layouts_gallery_grid1 mt-4">
                            <a href="#popup7">
                                <img src="images/exp3.jpg" alt=" " class="img-fluid" />
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 w3layoutsits_w3layouts_gallery_grid1 mt-4">
                            <a href="#popup8">
                                <img src="images/exp1.jpg" alt=" " class="img-fluid" />
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 w3layoutsits_w3layouts_gallery_grid1 mt-4">
                            <a href="#popup9">
                                <img src="images/exp2.jpg" alt=" " class="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;