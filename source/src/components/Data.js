import { useState, useEffect } from 'react';
import '../css/LogIn.css';
import { useNavigate } from "react-router-dom";

function Data() {

    const navigate = useNavigate('');
    if (localStorage.getItem('username') != "admin") {
        navigate(`/notfound`);
    }
    return (
        <div className="EmailData">
            <h1>CUSTOMER DATA </h1>
            <table>
                <tr>
                    <th><h4>Customer Email</h4></th>
                </tr>
                <tr>
                    <td><h6>{localStorage.getItem('data')}</h6></td>

                </tr>
                <tr>
                    <th><h4>Customer Feedback</h4></th>
                </tr>
                <tr>
                    <td><h6>{localStorage.getItem('feedback')}</h6></td>
                </tr>
                <tr>
                    <th><h4>Customer Register Information</h4></th>
                </tr>
                <tr>
                    <td><h6>{localStorage.getItem('signin')}</h6></td>
                </tr>
            </table>
        </div>
    );
} export default Data;