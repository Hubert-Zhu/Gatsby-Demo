import React from "react"
import Header from "../components/header"

export default function About() {
    return (
        <div styled={{ color:`teal`}}>
            <Header headerText="About Gatsby" /> 
            <Header headerText="This is pretty cool" /> 
            <p>Such wow. Very React.</p>
        </div>
    )
}