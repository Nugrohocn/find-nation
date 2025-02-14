import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]} // Pusat peta berdasarkan latitude dan longitude
      zoom={5} // Level zoom
      style={{ height: "200px", width: "100%" }} // Ukuran peta
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL tile OpenStreetMap
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>Lokasi Negara</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
