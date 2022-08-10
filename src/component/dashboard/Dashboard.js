import React from 'react';
import './style.css'
import {NavLink} from "react-router-dom";

export default function () {
    return (
        <div className='dash_con'>
            <div className='header'>
                <div>
                    <div><label >DashBoard</label></div>
                    <div><label >Product</label></div>
                </div>
                <div>
                    <div><NavLink to={'cart'}><label >Cart</label></NavLink></div>
                    <div><label >Danu</label></div>
                </div>
            </div>
            <div className='square_con'>
                <div>
                    <label>Products 60</label>
                </div>
                <div>   <label>Cart</label></div>
                <div>   <label>Users 43</label></div>
            </div>
        </div>
    )
}