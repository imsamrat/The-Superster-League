import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import maleImage from '../../../images/male.png'
import femaleImage from '../../../images/female.png'
import CSS from './LeaguesDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebook, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faCalendarAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';

const LeaguesDetails = () => {
    const { id } = useParams();


    const [details, setDetails] = useState({});


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]))
    }, [])
    const { strBanner, intFormedYear, strCountry, strSport, strGender, strTwitter, strYoutube } = details;

    return (
        <div className="container my-5">
            <img className="img-fluid" src={strBanner} alt="" />
            <div className="row">
                <div className="col-md-6">
                    <p><FontAwesomeIcon icon={faCalendarAlt} /> Founded: {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                </div>
                <div className="col-md-6 banner-image">
                    {strGender === "Male" ? <img src={maleImage} alt="" /> : <img src={femaleImage} alt="" />}
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores, animi quae possimus corrupti non harum, similique reiciendis consectetur doloribus dolorem voluptas vitae asperiores debitis aperiam libero! Iste, dolorem magnam.
            Sit quibusdam eius, tempora doloribus tenetur voluptate ad neque deleniti, eligendi facilis ex dolor illo. Consequuntur saepe esse itaque alias. Quibusdam iure itaque recusandae ut excepturi rerum eum sed eos?
            Accusamus iste sed suscipit amet. Praesentium asperiores eveniet iure autem minus tempora itaque consectetur libero? Eos, dicta voluptatibus sequi magnam aperiam vitae quae dolores nemo sapiente porro odio quos deserunt.
            Ex minus porro eveniet est incidunt obcaecati excepturi delectus possimus neque nostrum adipisci doloremque veritatis quisquam debitis quasi id, exercitationem nemo, voluptate magnam. Animi molestias delectus quas alias iusto expedita?
                    Exercitationem voluptates consequuntur reprehenderit maxime neque, enim dolores aspernatur similique non unde omnis, facere architecto dolor quibusdam nihil quaerat aliquam nam tempore, commodi aperiam? Ea sed laborum at exercitationem blanditiis.</p>
            <div>
                <Card.Footer className="text-muted text-center">
                    <Link to={strTwitter}><FontAwesomeIcon icon={faTwitterSquare} /></Link>
                    <Link to={strYoutube}><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link to={strYoutube}><FontAwesomeIcon icon={faYoutubeSquare} /></Link>
                </Card.Footer>
            </div>
        </div>
    );
};

export default LeaguesDetails;