import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>
        {lat} {lng}
      </h2>
      <button onClick={() => setSearchParams({ lat: 25, lng: 50 })}>
        change pos
      </button>
    </div>
  );
}

export default Map;