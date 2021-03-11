import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import maleImage from '../../../images/male.png'
import femaleImage from '../../../images/female.png'
import CSS from './LeaguesDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebook, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faCalendarAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
import Banner from '../../../images/bg.jpg'

const LeaguesDetails = () => {
    const { id } = useParams();


    const [details, setDetails] = useState({});


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]))
    }, [])
    const { strBanner, intFormedYear, strCountry, strSport, strGender, strTwitter, strYoutube, strDescriptionEN, strDescriptionFR } = details;

    return (
        <div className="container my-5">
            <div className="banner">
                {
                    strBanner === null ? <img src={Banner} alt="" /> : <img className="img-fluid" src={strBanner} alt="" />
                }
            </div>

            <div className="bg-info">
                <div className="row banner-info bg-secondary">
                    <div className="col-md-6">
                        <h5><FontAwesomeIcon icon={faCalendarAlt} /> Founded: {intFormedYear}</h5>
                        <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h5>
                        <h5><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
                    </div>
                    <div className="col-md-6 banner-image">
                        {strGender === "Male" ? <img src={maleImage} alt="" /> : <img src={femaleImage} alt="" />}
                    </div>
                </div>
                <div>
                    <p>{strDescriptionEN}</p>
                    <br />
                    <p>{strDescriptionFR}</p>
                </div>
            </div>
            <div>
                    <Card.Footer className="text-center footer-icon">
                        <a className="twitter" href="https://twitter.com/"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                        <a className="facebook" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="youtube" href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
                    </Card.Footer>
                </div>
        </div>
    );
};

export default LeaguesDetails;