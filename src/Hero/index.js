import React from 'react';
import logos from "./../img/i'm.svg"
import circle from "./../img/kolso.svg"

const Hero = () => {

    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--nav">
                        <h1 style={{fontSize: 40}}>HELLO</h1>
                        <h1 style={{fontSize: 60}}>I’M DANIEL <br/> YMANKULOV</h1>
                        <h5> I've been a web developer for a year now. <br/> Do you need a ready-made
                            website, website <br/>
                            layout, or maybe a turnkey website? Then contact me
                        </h5>
                        <button>CONTACT ME</button>
                    </div>
                    <div className="hero--images">
                        <img src={logos} alt="img" className='img'/>
                        <div className="hero--images__circle">
                            {/*<div className="logos">*/}
                            {/*    <p className="ps" >PS</p>*/}
                            {/*</div>*/}
                            {/*<div className="typeS">*/}
                            {/*    <p>TS</p>*/}
                            {/*</div>*/}
                            {/*<div className="mui">*/}
                            {/*    <p>UI</p>*/}
                            {/*</div>*/}
                            {/*<div className="logo">*/}
                            {/*    <p>JS</p>*/}
                            {/*</div>*/}
                            <div className="typeS">
                                <p>TS</p>
                            </div>
                        </div>

                        <div className="mui">
                            <p>UI</p>
                        </div>
                        <div className="logo">
                            <p>JS</p>
                        </div>
                        {/*<img src={circle} alt="img" className="hero-circle"/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;