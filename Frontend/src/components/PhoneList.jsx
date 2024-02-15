import React from 'react';
import {useFetchPhones} from "../hooks/useFetchPhones.js";
import PhoneCard from "./PhoneCard.jsx";
import { Link } from "react-router-dom";
const PhoneList = () => {
    const phones = useFetchPhones();
    console.log(phones)
    return (
        <div>
            {phones && phones.map((phone) => (
                <div key={phone.id}>
                    <Link to={`/phones/${phone.id}`}>
                        <PhoneCard id={phone.id} name={phone.name} description={phone.description} price={phone.price} imageFileName={phone.imageFileName} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default PhoneList;