import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Card, Button } from 'react-bootstrap';
import { Link , useHistory } from "react-router-dom";

const Leagues = (props) => {
    const {idLeague} = props.league;
    // const history = useHistory();
    
    const [details, setDetails] = useState({});
    
 
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch (url)
        .then (res => res.json())
        .then (data => setDetails(data.leagues[0]))
    },[])
    const {strLogo, strLeague, strSport} = details;
    return (

        <div className="col-md-4 my-4">
        <Card className="bg-secondary">
            <Card.Img variant="top" src={strLogo} />
            <Card.Body>
                <div className="text-center">
                    <Card.Title>{strLeague}</Card.Title>
                    <p>Sports Type: {strSport}</p>
                    <Link to={`/details/${idLeague}`}><Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight}/></Button></Link>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Leagues;