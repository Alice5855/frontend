import React, { Component } from "react";

class About extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div>
                    <div className="mx-4 my-5">
                        <h1 className="abtTitle" style={{color: '#50A0F4'}}>
                            <img src="http://localhost:3000/images/Justlogo.png" alt="Logo" width={'50px'} style={{display: 'inline'}} />
                            Virtual Agency
                        </h1>
                    </div>
                    <div className="divider" />
                    <div>
                        <div class="container col-xxl-8 px-4 py-5">
                            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div class="col-10 col-sm-8 col-lg-6">
                                    <img src="http://localhost:3000/images/bak1.jpg" class="d-block mx-lg-auto img-fluid" alt="Introduce" width="700" height="500" loading="lazy" />
                                </div>
                                <div class="col-lg-6">
                                    <h1 class="display-5 fw-bold lh-1 mb-3">Make, Believe </h1>
                                    <p class="lead">
                                        Virtual Agency는 국경과 세대를 넘어 많은 이에게 사랑 받는 2차원 엔터테인먼트를, Provider와 Consumer를 이어주는 연결다리가 되어 더욱 많은 이들에게 꿈꾸었던, 바랐던 것들을 이룰 수 있도록 함을 목표로 하고 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider" />
                    <div>
                        <div class="container col-xxl-8 px-4 py-5">
                            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div class="col-10 col-sm-8 col-lg-6">
                                    <img src="http://localhost:3000/images/bak1.jpg" class="d-block mx-lg-auto img-fluid" alt="Introduce" width="700" height="500" loading="lazy" />
                                </div>
                                <div class="col-lg-6">
                                    <h1 class="display-5 fw-bold lh-1 mb-3">Slogan n shit</h1>
                                    <p class="lead">
                                        Slogan 2 https://cover-corp.com/
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;