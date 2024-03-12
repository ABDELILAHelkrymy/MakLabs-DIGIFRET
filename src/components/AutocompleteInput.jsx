import React, { useRef, useState } from "react";
import PlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";

const AutocompleteInput = ({ address, setAddress }) => {
  const inputRef = useRef(null);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelect = (place) => {
    setSelectedPlace(place);
    setAddress(place.label);
    console.log(place); // Access place details (name, address, lat/lng, etc.)
  };

  const handleDetails = (place) => {
    geocodeByPlaceId(place.place_id)
      .then((results) => {
        const latLng = getLatLng(results[0]);
        setAddress(results[0].formatted_address);
      })
      .catch((error) => console.error("Error fetching details:", error));
  };

  return (
    <PlacesAutocomplete
      ref={inputRef}
      apiKey={apiKey}
      selectProps={{ value: selectedPlace, onChange: handleSelect }}
      onEnterKeyDown={handleDetails}
    />
  );
};

export default AutocompleteInput;

