import React from 'react';

function LeftSection({content}) {
    return (
        <div className="container left-section">
            <div className="row align-items-center">
                <div className="col-6 left-image">
                    <img src={content.imageLink} alt="kite image" />
                    {console.log(content)}
                </div>
                <div className="col-2"></div>
                <div className="col-4 content">
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                    <div className="row ">
                        {content.link1 ?
                        (
                            <div className="col-6 content-links">
                                <a href={content.link1.link}>{content.link1.title} <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                            ) :null
                        }
                        {content.link2 ? 
                        (
                            <div className="col-6 content-links">
                                <a href={content.link2.link}>{content.link2.title} <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        ) : null
                        }
                    </div>
                    <div className="row">
                        <div className="col-6 content-badges">
                            <a href={content.googlePlayLink}><img src="media/images/googlePlayBadge.svg" alt="googlePlayimage" /></a>
                        </div>
                        <div className="col-6 content-badges">
                            <a href={content.appstoreLink}><img src="media/images/appstoreBadge.svg" alt="appstoreimage" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;