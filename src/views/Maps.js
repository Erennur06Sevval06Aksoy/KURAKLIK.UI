import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import wk from 'wellknown'; // wellknown.parse(wkt) -> GeoJSON geometry

// FitBounds helper: bir array GeoJSON Feature'ı alıp haritayı ona göre ayarlar
function FitBounds({ features }) {
  const map = useMap();

  useEffect(() => {
    if (!features || features.length === 0) return;

    // create leaflet layers and compute union bounds
    const layers = features.map(f => L.geoJSON(f));
    const group = L.featureGroup(layers);
    try {
      const bounds = group.getBounds();
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    } catch (e) {
      // hata olsa da kırma
      console.warn('FitBounds hata:', e);
    }
  }, [features, map]);

  return null;
}

export default function Locations() {
  const [items, setItems] = useState([]);       // raw rows (id, name, extent_wkt, ...)
  const [features, setFeatures] = useState([]); // GeoJSON Feature array

  useEffect(() => {
    fetch('/locations') //
        .then(res => res.json())
        .then(data => {
          console.log('RAW /locations response:', data);
          // data: [{ id, name, extent_wkt, ... }, ...]
          setItems(data);

          // WKT -> GeoJSON Feature dönüştür
          const feats = data
              .map(row => {
                if (!row.extent_wkt) return null;
                const geom = wk.parse(row.extent_wkt); // returns GeoJSON geometry (or null)
                if (!geom) return null;
                return {
                  type: 'Feature',
                  geometry: geom,
                  properties: {
                    id: row.id,
                    name: row.name
                  }
                };
              })
              .filter(Boolean);

          setFeatures(feats);
          console.log('feats',feats)
        })
        .catch(err => {
          console.error('Lokasyon çekme hatası:', err);
        });
  }, []);

  return (
      <div style={{ display: 'flex', gap: 12 }}>

        <div style={{ flex: 1, height: '80vh' }}>
          <MapContainer center={[38.5, 28.0]} zoom={7} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Her feature için GeoJSON olustur ve popup ekle */}
            {features.map((f, idx) => (
                <GeoJSON
                    key={idx}
                    data={f}
                    onEachFeature={(feature, layer) => {
                      const name = feature.properties?.name ?? 'No name';
                      layer.bindPopup(`<strong>${name}</strong>`);
                    }}
                />
            ))}

            <FitBounds features={features} />
          </MapContainer>
        </div>
      </div>
  );
}
