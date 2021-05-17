import React from "react"
import {useState, useEffect} from 'react';
import axios from 'axios';

function MemberLayout() {
    const [members, setMembers]=useState([]);

    useEffect(() => {
           axios.get('https://at715casestudy.herokuapp.com/app/members')
           .then (res => {
               console.log(res)
               setMembers(res.data)
           })
         }, []);

    return (
        <div>
            <h2>Hi</h2>
            <ol>
                {members.map(member => (
                <li key={members.id}>{member.username}</li>
                ))}
            </ol>
        </div>
    )
}

export default MemberLayout;