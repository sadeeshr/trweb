import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="py-5">
                <div class="container">
                    <div class="w3layoutsinfo-grids">
                        <div class="w3layouts-grid-left w3layouts-grid-right text-center">
                            <div class="social mb-4">
                                <ul>
                                    <li><a href="#"><span class="fa mr-2 fa-facebook"></span></a></li>
                                    <li><a href="#"><span class="fa mr-2 fa-twitter"></span></a></li>
                                    <li><a href="#"><span class="fa mr-2 fa-skype"></span></a></li>
                                    {/*<li><a href="#"><span class="fa mr-2 fa-pinterest"></span></a></li>
                                    <li><a href="#"><span class="fa mr-2 fa-vk"></span></a></li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="copyright text-center">
                        <p>© 2018 tringphone.com All Rights Reserved</p>
                        <a href="#home" class="move-top scroll"><span class="fa fa-angle-up" aria-hidden="true"></span></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;