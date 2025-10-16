import React from "react";

// react-bootstrap components
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";

function Maps() {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    const L = window.L;
    if (!L || !mapRef.current) return;

    const centerTurkey = [39.0, 35.0];
    const mapInstance = L.map(mapRef.current, { zoomControl: true, scrollWheelZoom: true, attributionControl: false }).setView(centerTurkey, 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(mapInstance);

  }, []);
  return (
      <>
        <div className="map-container">
          <div id="map" ref={mapRef} style={{ height: "80vh", width: "100%" }}></div>
        </div>
      </>
  );
}

export default Maps;
