import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- VITE-COMPATIBLE ICON FIX ---
// 1. Import the images directly using ES Modules syntax
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// 2. Point Leaflet's default icon to the imported images
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl,
});
// --- END OF FIX ---

// Organized data array for all sites
const siteData = [
  { name: "Bageshwar district, Uttarakhand", position: [29.84, 79.77], risk: "High" },
  { name: "Pithoragarh, Chamoli, Uttarkashi region", position: [30.29, 79.56], risk: "High" },
  { name: "Bailadila Range, Chhattisgarh", position: [18.68, 81.23], risk: "High" },
  { name: "Aamdai Ghati / Bastar region, South Chhattisgarh", position: [20.15, 81.16], risk: "High" },
  { name: "Aravalli Range regions (Haryana / Rajasthan)", position: [24.58, 73.68], risk: "High" },
  { name: "Aizawl, Mizoram", position: [23.73, 92.72], risk: "High" },
  { name: "Champhai, Mizoram", position: [23.46, 93.32], risk: "High" },
  { name: "Kolasib, Mizoram", position: [24.22, 92.68], risk: "High" },
  { name: "Serchhip, Mizoram", position: [23.34, 92.85], risk: "High" },
  { name: "Lunglei, Mizoram", position: [22.88, 92.73], risk: "High" },
  { name: "Nainital, Uttarakhand", position: [29.38, 79.46], risk: "Very High" },
  { name: "Joshimath, Uttarakhand", position: [30.56, 79.56], risk: "Very High" },
  { name: "Rudraprayag, Uttarakhand", position: [30.28, 78.98], risk: "Very High" },
  { name: "Tehri Garhwal, Uttarakhand", position: [30.38, 78.48], risk: "Very High" },
  { name: "Uttarkashi, Uttarakhand", position: [30.73, 78.45], risk: "Very High" },
  { name: "Agartala, Tripura", position: [23.83, 91.28], risk: "Medium" },
  { name: "Udaipur, Tripura", position: [23.53, 91.48], risk: "Medium" },
  { name: "Kailashahar, Tripura", position: [24.32, 92.01], risk: "Medium" },
  { name: "Ambassa, Tripura", position: [24.08, 91.85], risk: "Medium" },
  { name: "Dharmanagar, Tripura", position: [24.37, 92.17], risk: "Medium" },
  { name: "Itanagar, Arunachal Pradesh", position: [27.10, 93.62], risk: "Very High" },
  { name: "Tawang, Arunachal Pradesh", position: [27.59, 91.86], risk: "Very High" },
  { name: "Bomdila, Arunachal Pradesh", position: [27.26, 92.41], risk: "Very High" },
  { name: "Pasighat, Arunachal Pradesh", position: [28.07, 95.33], risk: "Very High" },
  { name: "Ziro, Arunachal Pradesh", position: [27.63, 93.83], risk: "Very High" },
  { name: "Srinagar, Jammu & Kashmir", position: [34.08, 74.80], risk: "Very High" },
  { name: "Jammu, Jammu & Kashmir", position: [32.73, 74.87], risk: "High" },
  { name: "Leh, Ladakh", position: [34.16, 77.57], risk: "Very High" },
  { name: "Kargil, Ladakh", position: [34.56, 76.13], risk: "Very High" },
  { name: "Baramulla, Jammu & Kashmir", position: [34.20, 74.34], risk: "Very High" },
  { name: "Malshej ghat, Maharashtra", position: [19.3421, 73.7735], risk: "High" },
  { name: "Gangotri Highway near Helgugad, Uttarkashi", position: [30.7313, 78.4358], risk: "High" },
  { name: "Dum Dum Parai, Tamil Nadu", position: [10.2379, 77.6377], risk: "Medium" },
  { name: "Adoshi tunnel, Maharashtra", position: [18.7631, 73.347], risk: "High" },
  { name: "Urni, Satluj river, Kinnaur, Himachal Pradesh", position: [31.5124, 78.1181], risk: "High" },
  { name: "Taloda, Nandurbar, Maharashtra", position: [21.6989, 74.172], risk: "High" },
  { name: "Dumriput-Damanjodi railway, Odisha", position: [18.7734, 82.8555], risk: "Medium" },
  { name: "Amdalli-Thodor, Karnataka", position: [14.7822, 74.2279], risk: "High" },
  { name: "Kullu-Manali road, Himachal Pradesh", position: [32.2338, 77.1784], risk: "High" },
  { name: "Gunadala hill, Vijayawada", position: [16.5145, 80.6526], risk: "High" },
  { name: "Malshej Ghat (NH-222), Maharashtra", position: [19.3379, 73.7767], risk: "High" },
  { name: "Gurez, Kashmir", position: [34.6507, 74.7362], risk: "High" },
  { name: "Baskatwa, Gaya, Bihar", position: [24.544, 85.3492], risk: "Medium" },
  { name: "Borra Caves, Andhra Pradesh", position: [18.2807, 83.0394], risk: "Medium" },
  { name: "Hanogi, Mandi, Himachal Pradesh", position: [31.6817, 77.1209], risk: "High" },
  { name: "Mahakali river, Bangabagad, Uttarakhand", position: [29.8521, 80.553], risk: "High" },
  { name: "Kakolat Falls, Nawada, Bihar", position: [24.6997, 85.6285], risk: "Medium" },
  { name: "Adhkuwari, Vaishnodevi route, Kashmir", position: [33.0086, 74.9426], risk: "High" },
  { name: "Mumbai-Pune Expressway near Khandala", position: [18.7686, 73.3678], risk: "High" },
  { name: "Chakrata, Uttarakhand", position: [30.7007, 77.8644], risk: "High" },
  { name: "Adoshi Tunnel (holiday jam), Maharashtra", position: [18.7631, 73.3471], risk: "High" },
  { name: "Nilgiri Mountain Rail, Tamil Nadu", position: [11.3432, 76.8285], risk: "Medium" },
  { name: "Raigad Fort, Maharashtra", position: [18.241, 73.4469], risk: "High" },
  { name: "Maligaon, Guwahati, Assam", position: [26.1868, 91.6739], risk: "High" },
  { name: "Vollant, Vasco, Goa", position: [15.3739, 73.8911], risk: "Medium" },
  { name: "Chetra Village, Dehradun", position: [30.306, 78.0648], risk: "High" },
  { name: "Kalijhora, West Bengal", position: [26.9343, 88.4486], risk: "High" },
  { name: "NH-22 near Solan, Himachal Pradesh", position: [30.8922, 77.09], risk: "High" },
  { name: "Srisailam ghat road, Andhra Pradesh", position: [16.0781, 78.8743], risk: "High" },
  { name: "Ooty, Tamil Nadu", position: [11.404, 76.6952], risk: "Medium" },
  { name: "Solva, Raia, Goa", position: [15.323, 73.974], risk: "Medium" },
  { name: "Akonggre, Tura, Meghalaya", position: [25.5084, 90.2191], risk: "High" },
  { name: "Mathyali village, Jakhnidhar, Uttarakhand", position: [30.3351, 78.5113], risk: "High" },
  { name: "Jwagdhar, Sirmaur, Himachal Pradesh", position: [30.6935, 77.4266], risk: "High" },
  { name: "Kallar, Tamil Nadu", position: [11.344, 76.8691], risk: "Medium" },
  { name: "Kempty falls, Mussoorie, Uttarakhand", position: [30.4876, 78.0366], risk: "High" },
  { name: "Malshej Ghat (Sunday night), Maharashtra", position: [19.336, 73.7793], risk: "High" },
  { name: "Nathpa Jhulla, Kinnaur, Himachal Pradesh", position: [31.563, 77.9796], risk: "High" },
  { name: "Manikaran shrine, Himachal Pradesh", position: [32.0275, 77.3446], risk: "High" },
  { name: "Tura, Meghalaya", position: [25.5212, 90.232], risk: "High" },
  { name: "Kondayanpatti quarry, Madurai", position: [10.0545, 78.0298], risk: "High" },
  { name: "Samroli, Udhampur, Kashmir", position: [32.9918, 75.1945], risk: "High" },
  { name: "Vazhavara, Idukki, Kerala", position: [9.7967, 77.0611], risk: "High" },
  { name: "Vengola quarry, Perumbavoor, Kerala", position: [10.0533, 76.4788], risk: "High" },
  { name: "Adoshi tunnel (2009), Maharashtra", position: [18.7591, 73.3852], risk: "High" },
  { name: "Chungthang, Sikkim", position: [27.6047, 88.6463], risk: "High" },
  { name: "Bangapani, Pithoragarh, Uttarakhand", position: [29.5866, 80.2154], risk: "High" }
];

// Helper function to choose color based on risk
const getRiskColor = (risk) => {
  if (risk === "Very High") return "red";
  if (risk === "High") return "orange";
  if (risk === "Medium") return "yellow"; // Changed for better visibility
  return "green";
};

const MapView = () => {
  const position = [26.5, 82.0]; // Centered to see all points

  return (
    <MapContainer 
      center={position} 
      zoom={5} 
      style={{ height: '100%', width: '100%', borderRadius: '12px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {siteData.map((site) => (
        <React.Fragment key={site.name}>
          <Circle
            center={site.position}
            radius={50000} // Radius in meters
            pathOptions={{
              color: getRiskColor(site.risk),
              fillColor: getRiskColor(site.risk),
              fillOpacity: 0.3, // Semi-transparent
            }}
          />
          <Marker position={site.position}>
            <Popup>
              {site.name} <br /> Risk Level: {site.risk}
            </Popup>
          </Marker>
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default React.memo(MapView);