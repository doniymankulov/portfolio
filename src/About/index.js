import React from 'react';
import {HiCode} from "react-icons/hi";
import adam from "./../img/photo_2021-08-30_22-31-34.svg"
import adam2 from "./../img/Group 5.svg"
import adam3 from "./../img/Group 4.svg"
import {
    SiAdobephotoshop,
    SiCreatereactapp, SiCsswizardry,
    SiHtml5,
    SiJavascript, SiMui,
    SiSemanticuireact,
    SiTypescript
} from "react-icons/si";
import {FaCss3Alt} from "react-icons/fa";

const About = () => {
    return (
        <div>
            <div id="about">
                <div className="container">
                    <div className="about">
                        <div className="card-1">

                            <div className="cards">
                                <SiAdobephotoshop className="s"/>
                            </div>
                            <div className="cards">
                                <SiJavascript className="s"/>
                            </div>
                            <div className="cards">
                                <SiTypescript className="s"/>
                            </div>
                            <div className="cards">
                                <SiHtml5 className="s"/>
                            </div>
                        </div>
                       <div className="card-2">
                           <div className="cards">
                               <SiSemanticuireact className="s"/>
                           </div>
                           <div className="cards">
                               <FaCss3Alt className="s"/>
                           </div> <div className="cards">
                           <SiMui className="s"/>
                       </div>
                       </div>
                        <div className="About2">
                            <div className="container">
                                <div className="carrd">
                                    <h1>About me</h1>
                                    <p>Hello again everyone! So, you already <br/>know that my name is Daniel. A little <br/> about myself: student, 16 y.o., athlete-boxer <br/>player, I love creativity since childhood,<br/> I live in Bishkek,Kyrgyzstan. Why programming? <br/>Everything is elementary - I like it, the <br/> profession of the future, thanks to which <br/>I can provide myself and fulfill <br/>my dream - travel, at the moment I specialize <br/> in web developer front-end, and turnkey <br/> websites. Why should you choose  <br/>me? I approach each order with great  <br/>responsibility and love, as I want to make <br/> a name for myself, exclude plagiarism <br/> and negligence, fully study the project, the <br/> client and its target audience, work <br/>for quality, trying to make an order as <br/>quickly and uniquely as possible, taking <br/>into account all the edits and wishes. <br/>
                                        By trusting me, you will get the maximum <br/>return for your project, save your nerves and <br/> time.
                                        If you are interested in me ,<br/> you want to know <br/> something more or  use my services, <br/> then I will provide all my contacts below.</p>

                                </div>
                                <div className="crug">
                                </div>
                                <div className="crug-2">
                                </div>
                                <div className="crug-3">
                                </div>
                                <div className="caard">
                                    <img src={adam} alt=""/>
                                </div>
                                <div className="caard2">
                                    <img src={adam2} alt=""/>
                                </div>
                                <div className="caard3">
                                    <img src={adam3} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;