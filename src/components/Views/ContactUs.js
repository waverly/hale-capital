import React from "react";
import BlueBox from "../Components/BlueBox";
import Footer from './Footer';
import MyMap from "../Components/GoogleMap";
import Form from "../Components/Form";

import "./../../css/Views/ContactUs.css";

class ContactUs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    if (!this.props.data) return "Loading..";
    const root = this.props.data.data;
    return (
      <div>
        <div className="section-wrap contact-wrap">
          <div className="flex-wrap">
            <div className="left-col">
              <h1>Contact Us</h1>
              <h3 className="tagline">{root.tagline["0"].text}</h3>

              <div className="address">
                {root.address.map((i, index) => <p key={index}>{i.text}</p>)}
              </div>
              <div className="secondary-contact">
                <p>{root.phonenumber["0"].text}</p>
                <p>{root.email["0"].text}</p>
              </div>
            </div>
            <div className="right-col">
              <Form width={this.props.width} height={this.props.height} />
            </div>
          </div>

          <div className="map">
            <MyMap
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}

export default ContactUs;
