import Image from "next/image";
import styles from "./chitietsanpham.module.css";

export default function ChiTietSanPham() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src="/images/anh1.jpg" // bạn nhớ đặt đúng tên hình ảnh ở thư mục public/image
          alt="Khoai Tây Lốc Xoáy"
          width={500}
          height={400}
          className={styles.productImage}
        />
      </div>

      <div className={styles.infoSection}>
        <h1>Khoai Tây Lốc Xoáy</h1>
        <p className={styles.price}>25,000đ</p>
        <p className={styles.description}>
          Khoai tây lốc xoáy chiên giòn rụm, xoắn thành hình lò xo độc đáo, được tẩm ướp gia vị như phô mai, BBQ, rong biển – là món ăn vặt khoái khẩu cho mọi lứa tuổi.
        </p>
        <ul className={styles.details}>
          <li>✅ Nguyên liệu: Khoai tây tươi chọn lọc, không mọc mầm</li>
          <li>✅ Gia vị: Phô mai, Rong biển, BBQ (tùy chọn)</li>
          <li>✅ Cách chế biến: Chiên ngập dầu, giòn ngoài – mềm trong</li>
          <li>✅ Thích hợp: Ăn chơi, tiệc nhẹ, picnic, xem phim</li>
        </ul>
        <button className={styles.buyButton}>Mua ngay</button>
      </div>
    </div>
  );
}
