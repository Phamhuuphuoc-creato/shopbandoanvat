
"use client"; // Đánh dấu file này là client-side component

import Image from "next/image";
import { useState } from "react"; // import useState để quản lý giỏ hàng
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  // State để lưu giỏ hàng
  const [cart, setCart] = useState([]);

  // Danh sách sản phẩm với tên và giá tiền
  const products = [
    { id: 1, name: "Khoai Tây Lóc Xoáy", price: 25000 },
    { id: 2, name: "Bắp Xào", price: 15000 },
    { id: 3, name: "Bánh Mì Nướng", price: 15000 },
    { id: 4, name: "Bánh Tráng Nướng", price: 18000 },
    { id: 5, name: "Bánh Tráng Trộn", price: 20000 },
    { id: 6, name: "Mẹt Cá Viên", price: 50000 },
    { id: 7, name: "Sake Lắc Phô Mai", price: 30000 },
    { id: 8, name: "Đùi Gà Chiên", price: 40000 },
    { id: 9, name: "Lạp Xưởng Nướng Đá", price: 15000 },
    { id: 10, name: "Matcha Latte", price: 30000 },
    { id: 11, name: "Sữa Tươi Trân Châu Đường Đen", price: 30000 },
    { id: 12, name: "Trà Sữa Thái Xanh Trân Châu", price: 20000 },
  ];

  // Hàm thêm sản phẩm vào giỏ hàng
  const handleBuyClick = (productId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, productId];
      alert(`Sản phẩm ${products.find(product => product.id === productId).name} đã được thêm vào giỏ hàng.`);
      return updatedCart;
    });
  };

  // Hàm hiển thị giỏ hàng
  const displayCart = () => {
    if (cart.length === 0) {
      return <p>Giỏ hàng của bạn trống.</p>;
    }

    return (
      <div>
        <h3>Giỏ hàng của bạn:</h3>
        <ul>
          {cart.map((productId, index) => {
            const product = products.find(p => p.id === productId);
            return (
              <li key={index}>
                {product.name} - {product.price.toLocaleString()} VND
              </li>
            );
          })}
        </ul>
        <button onClick={checkout} className={styles.checkoutButton}>
          Thanh toán
        </button>
      </div>
    );
  };

  // Hàm thanh toán
  const checkout = () => {
    alert("Cảm ơn bạn đã mua hàng. Đơn hàng của bạn sẽ được xử lý.");
    setCart([]); // Xóa giỏ hàng sau khi thanh toán
  };

  return (
    <div className={styles.page}>

      <main className={styles.mainContent}>
        <section id="home" className={styles.content}>
          <h1>Vua Đồ Ăn Vặt</h1>
          <p>Chúng tôi cung cấp những món ăn vặt ngon nhất, được chế biến từ nguyên liệu tươi ngon và công thức độc đáo.</p>
        </section>

        {/* Product Images Section */}
        <section id="menu" className={styles.products}>
          <h2>Menu của chúng tôi</h2>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productItem}>
                <Link href={'/chitietsanpham'}>
                <Image
                  src={`/images/anh${product.id}.jpg`} // Đảm bảo có ảnh với tên như vậy
                  alt={product.name}
                  width={300}
                  height={300}
                  className={styles.productImage}
                />
                </Link>
                <p>{product.name}</p>
                <p>{product.price.toLocaleString()} VND</p>
                {/* Thêm nút "Mua" */}
                <button
                  className={styles.buyButton}
                  onClick={() => handleBuyClick(product.id)}
                >
                  Mua
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Hiển thị giỏ hàng */}
        <section id="cart" className={styles.cart}>
          {displayCart()}
        </section>

        <section id="about" className={styles.about}>
          <h2>Giới thiệu</h2>
          <p>Chúng tôi là đơn vị chuyên cung cấp các món ăn nhẹ nổi tiếng tại Việt Nam, với nguyên liệu tươi ngon và chế biến chuyên nghiệp.</p>
        </section>

        <section id="services" className={styles.services}>
          <h2>Dịch vụ của chúng tôi</h2>
          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <h3>Giao hàng tận nơi</h3>
              <p>Chúng tôi cung cấp dịch vụ giao hàng tận nơi nhanh chóng và tiện lợi, giúp bạn thưởng thức món ăn mà không cần phải ra ngoài.</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Chế biến theo yêu cầu</h3>
              <p>Chúng tôi nhận chế biến các món ăn theo yêu cầu của khách hàng, từ các loại gia vị cho đến cách chế biến đặc biệt.</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Đảm bảo chất lượng</h3>
              <p>Chúng tôi cam kết cung cấp các món ăn được chế biến từ nguyên liệu tươi ngon, an toàn và đảm bảo chất lượng.</p>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <h2>Liên hệ</h2>
          <p>Để đặt hàng hoặc biết thêm thông tin, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại.</p>

          {/* Contact Form */}
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Họ và tên:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Tin nhắn:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Gửi</button>
          </form>
        </section>
      </main>
    </div>
  );
}