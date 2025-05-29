import styles from "./header.module.css"
import Image  from "next/image"

export default function Header () {
    return (
        <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" alt="Logo" width={100} height={50} />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#home" className={styles.navLink}>Trang chủ</a></li>
            <li><a href="#about" className={styles.navLink}>Giới thiệu</a></li>
            <li><a href="#services" className={styles.navLink}>Dịch vụ</a></li>
            <li><a href="#menu" className={styles.navLink}>Menu</a></li>
            <li><a href="#contact" className={styles.navLink}>Liên hệ</a></li>
          </ul>
        </nav>
      </header>
    );
}
