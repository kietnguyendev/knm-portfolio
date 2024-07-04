
import { Player } from '@lottiefiles/react-lottie-player';
import images from "~/assets/images";

function Skills() {
    return (
        <section id="skills" className="skills-container">
            <div className="container">
                <h2 className="hash-title">
                    <a href="#skills">WHAT I DO</a>
                </h2>
                <div className="row row-cols-2 row-cols-lg-1">
                    <div className="col" data-aos="animate__zoomIn">
                        <p className="skills-title">
                            Crazy full stack developer who wants to explore
                            every tech stack.
                        </p>
                        <ul className="skills-desc">
                            <li>
                                <div className="skills-group">
                                    <span>Programming languages</span>
                                </div>
                                <ul>
                                    <li>
                                        &#8226;&nbsp; JavaScript, TypeScript
                                    </li>
                                    <li>&#8226;&nbsp; C# .Net</li>
                                    <li>
                                        &#10149; I'm quite confident that I can catch up with other languages when needed very fast
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="skills-group">
                                    <span>Front-end</span>
                                </div>
                                <ul>
                                    <li>
                                        &#8226;&nbsp; ReactJS: Hook, Redux, Formik, React Hook Form, Yup, React Query, Axios,...
                                    </li>
                                    <li>&#8226;&nbsp; NextJS (TypeScript)</li>
                                    <li>&#8226;&nbsp; HTML, CSS, Responsive, SASS (7-1 pattern)</li>
                                    <li>&#8226;&nbsp; Semantic, SEO</li>
                                    <li>
                                        &#8226;&nbsp; Boostrap, Material UI, TailwindCss, AG-Grid, Telerik UI,...
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="skills-group">
                                    <span>Back-end</span>
                                </div>
                                <ul>
                                    <li>&#8226;&nbsp; Protocols: REST, HTTP(S)</li>
                                    <li>
                                        &#8226;&nbsp; Frameworks/Libraries: Node.js, Express.js, ASP․NET Core
                                    </li>
                                    <li>
                                        &#8226;&nbsp; OOP, Web socket SignalR
                                    </li>
                                    <li>
                                        &#8226;&nbsp; Database: SQL Server
                                        (Store Procedure, Function,
                                        Trigger,...), Postgres, MongoDB
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="skills-group">
                                    <span>Dev Tools</span>
                                </div>
                                <ul>
                                    <li>&#8226;&nbsp; Git, Github, Gitlab</li>
                                    <li>
                                        &#8226;&nbsp; Postman, VS Code, Figma
                                    </li>
                                    <li>
                                        &#8226;&nbsp; React Developer Tool, Redux Dev Tool
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col" data-aos="animate__zoomIn">
                        <Player
                            src={images.skillsImg}
                            autoplay
                            loop
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
