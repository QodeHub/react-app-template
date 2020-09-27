import React, { useCallback, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import Button from "./Button";

/**
 * init google map
 * @param {*} lat
 * @param {*} lng
 */
const handleMap = (lat, lng, zoom = 20, uid = "map") => {
  const geometry = { lat: lat || 0, lng: lng || 0 };

  const map = new window.google.maps.Map(document.getElementById(uid), {
    center: geometry,
    zoom: zoom,
    disableDefaultUI: true,
  });

  new window.google.maps.Marker({
    position: geometry,
    map,
  });
};

export const Search = ({
  handleSubmit,
  longitude,
  latitude,
  address,
  show,
}) => {
  /**
   * states
   */
  const [geometry, setGeometry] = useState({
    address: address || "",
    latitude: latitude || "",
    longitude: longitude || "",
  });

  /**
   * handlesearch box
   */
  const handleSearch = useCallback(() => {
    const input = document.getElementById("pac-input");
    const searchBox = new window.google.maps.places.SearchBox(input);

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      const { lat, lng } = places[0].geometry.location;
      handleMap(lat(), lng());

      setGeometry({
        address: places[0].formatted_address,
        latitude: lat(),
        longitude: lng(),
      });
    });
  }, [setGeometry]);

  /**
   * effect
   */
  useEffect(() => {
    if (show) {
      handleMap(latitude, longitude);
      handleSearch();
    }
  }, [show, handleSearch, latitude, longitude]);

  return (
    <Row className="mx-md-0">
      <Col md="4" className="px-md-0">
        <div className="p-4">
          <p className="font-size-20 font-weight-700 mb-3">Select location</p>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group>
              <Form.Control
                id="pac-input"
                placeholder="Search location"
                defaultValue={address || ""}
              />
            </Form.Group>
            <Button
              value="Done"
              type="submit"
              className="btn--default w-100"
              onClick={() => handleSubmit(geometry)}
              {...(geometry?.address &&
                geometry?.latitude &&
                geometry?.longitude && { isValid: true })}
            />
          </Form>
        </div>
      </Col>
      <Col md="8" className="px-md-0">
        <div id="map" style={{ height: 472 }} />
      </Col>
    </Row>
  );
};

export const Map = ({ latitude, longitude, height, width, zoom, id }) => {
  const uid = id || Math.random().toString(36).slice(2);

  useEffect(() => {
    if (latitude && longitude) {
      handleMap(parseFloat(latitude), parseFloat(longitude), zoom, uid);
    }
  }, [latitude, longitude, zoom, uid]);

  return (
    <div
      id={uid}
      style={{
        height: height,
        width: width || "100%",
        borderRadius: 4,
        overflow: "hidden",
      }}
    />
  );
};
