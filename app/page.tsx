import Link from "next/link"
import "./styles/style1.css"

export default function Home() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="Image/ресурслого.png" alt="ARTISORA Logo" />
        </div>
        <div className="menu-row">
          <Link href="/page1" className="menu-item">
            Мастер-классы
          </Link>
          <div className="menu-item">Украшения на заказ</div>
          <h1 className="brand">ARTISORA</h1>
          <div className="menu-item">Переработка украшений</div>
          <div className="menu-item">Консультация</div>
        </div>
      </header>
      <main>
        <div className="main-content">
          <div className="image-block">
            <img src="Image/1.jpeg" alt="Изображение" />
          </div>
          <div className="text-block">
            <h2>
              Создай своё уникальное
              <br />
              украшение с нами
            </h2>
            <p>
              Мы предлагаем полный спектр услуг по индивидуальному изготовлению ювелирных изделий. Наши мастера создадут
              украшение, которое подчеркнет вашу индивидуальность и сохранит значимые моменты жизни.
            </p>
            <a href="#" className="button">
              Узнать больше
            </a>
          </div>
        </div>

        <div className="section-header">Эксклюзивные украшения на заказ</div>
        <div className="main-content">
          <div className="image-block 2">
            <img src="Image/3.jpeg" alt="Изображение" />
          </div>
          <div className="extra-block">
            <h2>Превратите старое в новое</h2>
            <p>
              Сдаем новую жизнь вашим старым украшениям! Переплавка золота и установка ваших камней в современные
              дизайны — это возможность сохранить память и создать что-то совершенно новое.
            </p>
            <a href="#" className="button">
              Узнать больше
            </a>
          </div>
        </div>

        <div className="main-content">
          <div className="text-block 3">
            <h2>
              Погружение в искусство
              <br />
              ювелирного дела
            </h2>
            <p>
              Запишитесь на наши мастер-классы по созданию ювелирных изделий и откройте для себя мир тонкой работы с
              металлами и драгоценными камнями.
            </p>
            <a href="#" className="button">
              Узнать больше
            </a>
          </div>
          <div className="image-block">
            <img src="Image/7.jpeg" alt="Изображение" />
          </div>
        </div>

        <div className="section-header">Измените дизайн ваших украшений</div>
        <div className="block-4">
          <div className="content-container-4">
            <div className="image-block-4" style={{ backgroundImage: "url('Image/8.jpeg')" }}></div>
            <div className="text-block-4">
              <p>Создайте что-то уникальное для себя</p>
              <div className="line"></div>
            </div>
            <div className="image-block-4" style={{ backgroundImage: "url('Image/9.jpeg')" }}></div>
            <div className="image-block-4" style={{ backgroundImage: "url('Image/10.jpeg')" }}></div>
          </div>
        </div>
      </main>

      <div className="footer-section">
        <div className="footer-left">
          <p>
            г. Санкт-Петербург,
            <br />
            ул. Достоевского, д. 9<br />
            Email: artisora@gmail.com
            <br />
            Тел. 8 800 555 35 35
          </p>
          <p className="subscribe-text">Подписывайтесь на нас</p>
          <div className="social-icons">
            <img src="Image/11.png" alt="Соцсеть 1" />
            <img src="Image/12.png" alt="Соцсеть 2" />
            <img src="Image/13.png" alt="Соцсеть 3" />
          </div>
        </div>

        <div className="footer-center">
          <img src="Image/ресурслого2.png" alt="Логотип" className="footer-logo" />
          <span className="footer-title">ARTISORA</span>
        </div>

        <div className="footer-right">
          <p className="subscribe-prompt">Подпишитесь на наши обновления</p>
          <div className="subscribe-form">
            <input type="email" className="email-input" placeholder="Введите почту..." />
            <button className="subscribe-button">Отправить</button>
          </div>
          <p className="copy">&copy; 2025 Все права защищены</p>
        </div>
      </div>
    </>
  )
}
