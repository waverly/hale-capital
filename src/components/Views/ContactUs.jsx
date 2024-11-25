import React from "react";
import Footer from "./Footer";
// import MyMap from "../Components/GoogleMap";
import StaticMap from "../Components/StaticMap";
import Form from "../Components/Form";

import "./../../css/Views/ContactUs.css";

class ContactUs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
                <a
                  href="https://www.google.com/maps/place/Hale+Capital/@40.7028885,-74.0164467,17z/data=!3m2!4b1!5s0x89c3ae75e45b1d09:0xe1bbb17003dfca79!4m6!3m5!1s0x4065fd2338f261b9:0x3ae3d7b01610104!8m2!3d40.7028885!4d-74.0138771!16s%2Fg%2F11b6d1swkm?entry=ttu&g_ep=EgoyMDI0MTExOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {root.address.map((i, index) => (
                    <p key={index}>{i.text}</p>
                  ))}
                </a>
              </div>
              <div className="secondary-contact">
                <a href={`tel:${root.phonenumber["0"].text}`}>
                  <p>{root.phonenumber["0"].text}</p>
                </a>

                <a href={`mailto:${root.email["0"].text}`}>
                  <p>{root.email["0"].text} </p>
                </a>
              </div>
            </div>
            <div className="right-col">
              <Form width={this.props.width} height={this.props.height} />
            </div>
          </div>

          <div className="map">
            <StaticMap />
            {/* <MyMap
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />*/}
          </div>
        </div>
        <Footer socials={this.props.socials} />
      </div>
    );
  }
}

export default ContactUs;
