import React from 'react';


function RightSection({content}) {
    return (
        <div className="container right-section">
            <div className="row align-items-center">
                <div className="col-4 content">
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                    {content.link1 ? (
                            <div className="col-6 content-links">
                                <a href={content.link1.link}>{content.link1.title} <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        ) : null}
                </div>
                <div className="col-2"></div>
                <div className="col-6 right-image">
                    <img src={content.imageLink} alt="kite image" />
                    {console.log(content)}
                </div>
            </div>
        </div>
    );
}

export default RightSection;