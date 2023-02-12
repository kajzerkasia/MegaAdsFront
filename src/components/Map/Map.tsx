import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';

import 'leaflet/dist/leaflet.css';
import './Map.css';

export const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[49.8122898,18.9672228]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[49.8122898,18.9672228]}>
                    <Popup>
                        <h2>Bielsko-Biała</h2>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

// zmienić brancha na developa - będzie u Kuby na gh