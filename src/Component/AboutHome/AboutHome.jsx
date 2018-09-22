import React, { Component } from 'react';
import { Container } from 'mdbreact';

class AboutHome extends Component{
    render(){
        return(
        <div>
            <div className="jumbotron">
                        <h2 style={{textAlign: "center"}}>The B+ Foundation: A Children’s Cancer Charity</h2>
                        <h3 style={{textAlign: "center"}}>We’re helping kids fight cancer through…</h3>
             </div>

            <div className="container">

                <div className="row">

                    <div className="col-sm-4">
                        <img src="https://bepositive.org/wp-content/uploads/2018/07/Family-Assistanceweb.jpg"/>
                        <h3>Family Assistance</h3>
                        <p>The Andrew McDonough B+ (Be Positive) Foundation® is the largest provider of financial assistance to families of kids with cancer nationwide. Our children’s cancer charity has helped thousands of families being treated at over 200 U.S. hospitals. Thanks to your generous support, we have been able to lessen the financial burden so families can focus on what’s most important — their child’s health.</p>
                        <p>Do you need Help? Click here to learn more.</p>
                    </div>

                    <div className="col-sm-4">
                        <img src="https://bepositive.org/wp-content/uploads/2015/01/cancer_research.jpg"/>
                        <h3>Research</h3>
                        <p>As a children’s cancer charity, we are proud to support cutting-edge research across the country. A few of the world-class institutions that have received our support include Seattle Children’s Hospital, Dana-Farber/Harvard Medical Center, and St. Jude Children’s Research Hospital. The Children’s Oncology Group, the leading childhood cancer research organization in the country, has also been a beneficiary of our support. This is a time of great discovery in childhood cancer research, and we owe it to the kids to seize this opportunity.</p>
                        <p>Read more about the many research projects you’re helping to fund — and the success we’re having!</p>
                    </div>

                    <div className="col-sm-4">
                        <img src="https://bepositive.org/wp-content/uploads/2015/01/capital_hill.jpg"/>
                        <h3>Advocacy</h3>
                        <p>The B+ Foundation is one of the Co-Founders of the Coalition Against Childhood Cancer (CAC2) and a member of the Alliance for Childhood Cancer.</p>
                        <p>These groups are the preeminent, national collaborations of childhood cancer charities and medical professional groups, who advocate for greater awareness of childhood cancer and significantly increased federal and private sector funding of childhood cancer research.</p>
                    </div>

                </div>

            </div>
            
        </div>
            
        );
    }
}

export default AboutHome;