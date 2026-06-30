import styles from "@/Components/Catalog/Catalog.module.css";
import ky from "ky";

const vegitables = await ky(
  "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json",
).json();

console.log(vegitables);

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <h1 className={styles.catalog__title}>Catalog</h1>
      <ul className={styles.catalog__list}></ul>
    </section>
  );
};

export default Catalog;
