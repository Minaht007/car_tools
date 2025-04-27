import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/img/Logo.png";
import phone from "../../public/icons/smartphone.png"
import styles from "./style/styles.module.css";

const header = () => {
  return (
    <section className={`${styles.headerSection} layout`}>
      <div className={styles.logoImgDiv}>
        <Image
          src={Logo}
          alt="car_tools_logo"
          width={137}
          height={137}
          className={styles.logoImg}
        />
      </div>
      <div className={styles.headerLinksContainer}>
        <Link className={styles.headerLinks} href="#">
          Что
        </Link>
        <Link className={styles.headerLinks} href="#">
          Доставка
        </Link>
        <Link className={styles.headerLinks} href="#">
          Контакты
        </Link>
      </div>
      <div className={styles.headerBtmDiv}>
        <button className={`${styles.headerBtmTitle}`}>Замовити дзвінок</button>
        <button>
        <Image className={` ${styles.headerBtmIcon}`} src={phone} alt="header_call_icon" width={40} height={40} />
        </button>
       
      </div>
    </section>
  );
};

export default header;
