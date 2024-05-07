import styles from "./CountryItem.module.css";

// interface CountryProps {
//   country: object;
// }
// function CountryItem({ country }: CountryProps) {

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
