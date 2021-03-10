import React , { useState, useEffect } from 'react';
import Leagues from './Leagues/Leagues';


const Home = () => {
    const [leagues, setLeagues] = useState([]);
    const first15 = leagues.slice(0, 15);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;

        fetch(url)
            .then(res => res.json())
            .then(data => { setLeagues(data.leagues) });
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    first15.map((league) => <Leagues league={league} />)
                }
               
            </div>
        </div>

    );
};

export default Home;