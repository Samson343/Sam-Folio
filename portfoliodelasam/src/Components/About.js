import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


function About ({ setRouteTo }) {
    return (
        <div>
            <Link to = '/loading'>
              <button
                onClick={() => {
                    setRouteTo('/home')
                }}
              > Go home </button>
            </Link>
        </div>
    )
}

export default About