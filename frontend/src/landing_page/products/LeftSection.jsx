import React from 'react';
import { Link } from 'react-router-dom';

function LeftSection({content}) {
    return (
        <div className="container left-section">
            <div className="row align-items-center">
                <div className="col-6 left-image">
                    <img src={content.imageLink} alt="kite image" />
                </div>
                <div className="col-2"></div>
                <div className="col-4 content">
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                    <div className="row ">
                        {content.link1 ?
                        (
                            <div className="col-6 content-links">
                                <Link  to={content.link1.link}>{content.link1.title} <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                            ) :null
                        }
                        {content.link2 ? 
                        (
                            <div className="col-6 content-links">
                                <Link to={content.link2.link}>{content.link2.title} <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        ) : null
                        }
                    </div>
                    <div className="row">
                        <div className="col-6 content-badges">
                            <Link to={content.googlePlayLink}><img src="media/images/googlePlayBadge.svg" alt="googlePlayimage" /></Link>
                        </div>
                        <div className="col-6 content-badges">
                            <Link to={content.appstoreLink}><img src="media/images/appstoreBadge.svg" alt="appstoreimage" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;