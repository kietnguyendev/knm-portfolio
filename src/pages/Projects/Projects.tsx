import { useEffect, useState } from "react";

import { Card, CardContent, CardHover } from "~/components/Card";
import { dataProjects } from "~/data";

function Projects() {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if (dataProjects) {
            setData(dataProjects);
        }
    }, []);

    return (
        <section id="projects" className="projects-container">
            <div className="container">
                <h2 className="hash-title">
                    <a href="#projects">OPEN SOURCE PROJECTS</a>
                    <a href="#projects">PROJECTS</a>
                </h2>

                <div className="row row-cols-xxl-3 row-cols-lg-2 row-cols-md-1 gy-4">
                    {data.map((item: any, index: number) => {
                        return (
                            <div className="col" key={index}>
                                <Card>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <CardContent>
                                            <span className="content__icon"><i className="fa-solid fa-computer"></i></span>
                                            <p className="content__name">{item.project_name}</p>
                                            <span className="content__text">{item.title}</span>
                                        </CardContent>
                                        <CardHover>
                                            <ul>
                                                <li>
                                                    <span className="card-hover__icon">
                                                        <i className="fa-solid fa-briefcase"></i>
                                                    </span>
                                                    <span className="card-hover__text">
                                                        {item.project_name}
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="card-hover__icon">
                                                        <i className="fa-regular fa-comment-dots"></i>
                                                    </span>
                                                    <span className="card-hover__text">
                                                        {item.desc}
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="card-hover__icon">
                                                        <i className="fa-solid fa-code"></i>
                                                    </span>
                                                    <span className="card-hover__text">
                                                        {item.tech}
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="card-hover__icon">
                                                        <i className="fa-solid fa-link"></i>
                                                    </span>
                                                    <span className="card-hover__text font-style-i">
                                                        {item.link}
                                                    </span>
                                                </li>
                                            </ul>
                                        </CardHover>
                                    </a>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;
