import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div class="container" id="home">
                    <nav class="py-4">
                        <div id="logo">
                            <h1> <a href="#index.html"><img style={{ width: "60%", height: "60%" }} src="images/logo.png" alt="Popup Image" class="img-fluid" /></a></h1>
                        </div>

                        <label for="drop" class="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul class="menu mt-2">
                            <li class="mr-lg-4 mr-3 active"><a href="#">home</a></li>
                            <li class="mr-lg-4 mr-3"><a href="#about">features</a></li>
                            <li class="mr-lg-4 mr-3"><a href="#services">pricing</a></li>
                            <li class="mr-lg-4 mr-3"><a href="#experience">about</a></li>
                            {/* <li class="mr-lg-4 mr-3">
                                <label for="drop-2" class="toggle">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span> </label>
                                <a href="#">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span></a>
                                <input type="checkbox" id="drop-2" />
                                <ul>
                                    <li><a href="#blog">Blog</a></li>   
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#text">Quoted Text</a></li>
                                </ul>
                            </li>*/}
                            <li><a href="#contact">contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;