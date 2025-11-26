"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import "../styles/style2.css"

export default function Page1() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement

    submitButton.disabled = true
    submitButton.textContent = "Отправка..."

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      surname: (form.elements.namedItem("surname") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    }

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowSuccess(true)
        form.reset()

        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      } else {
        alert("Ошибка при отправке сообщения")
      }
    } catch (error) {
      alert("Ошибка при отправке сообщения")
    } finally {
      submitButton.disabled = false
      submitButton.textContent = "Отправить"
    }
  }

  return (
    <>
      <header>
        <div className="logo">
          <img src="/Image/ресурслого.png" alt="ARTISORA Logo" />
        </div>
        <div className="menu-row">
          <div className="menu-item">Мастер-классы</div>
          <div className="menu-item">Украшения на заказ</div>
          <Link href="/" className="brand" style={{ fontFamily: "'DRUZHOK', serif" }}>
            ARTISORA
          </Link>
          <div className="menu-item">Переработка украшений</div>
          <div className="menu-item">Консультация</div>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Мастер-классы</h1>
          <h2>Создайте украшение своими руками</h2>
          <p>
            Наши мастер-классы — это уникальная возможность погрузиться в мир ювелирного искусства и создать свое
            собственное украшение под руководством опытных мастеров. <br />
            Мы предлагаем разнообразные программы, которые подойдут как новичкам, так и тем, кто уже имеет опыт в
            ювелирном деле.
          </p>
          <Link href="/page2" className="hero-button">
            Оформить заказ
          </Link>
        </div>
      </div>

      <div className="workshops">
        <h2>Доступные мастер-классы</h2>
        <div className="workshop-row">
          <div className="workshop-block-1">
            <h3>Создание простого украшения</h3>
            <p>
              <b>Описание:</b> На этом мастер-классе вы научитесь создавать свои первые украшения из доступных
              материалов. Под руководством мастера вы освоите основные техники работы с металлом и научитесь правильно
              использовать инструменты.
              <br />
              <b>Продолжительность:</b> 3 часа
              <br />
              <b>Уровень сложности:</b> Для начинающих
            </p>
          </div>
          <div className="workshop-block-2">
            <h3>Работа с драгоценными камнями</h3>
            <p>
              <b>Описание:</b> Этот курс охватывает все основные аспекты ювелирного производства: от выбора материалов
              до техники обработки. Вы получите знания о различных стилях и направлениях в ювелирном искусстве.
              <br />
              <b>Продолжительность:</b> 6 часов (разделенный на два занятия)
              <br />
              <b>Уровень сложности:</b> Для начинающих и опытных (подходит для всех уровней)
            </p>
          </div>
        </div>

        <div className="workshop-row">
          <div className="workshop-block-2">
            <h3>Основы ювелирного дела</h3>
            <p>
              <b>Описание:</b> В этом курсе вы познакомитесь с различными видами драгоценных камней, их характеристиками
              и особенностями работы с ними. Вы научитесь инкрустировать камни в ювелирные изделия и создавать
              уникальные композиции.
              <br />
              <b>Продолжительность:</b> 4 часа
              <br />
              <b>Уровень сложности:</b> Средний уровень
            </p>
          </div>
          <div className="workshop-block-1">
            <h3>Создание сложных украшений</h3>
            <p>
              <b>Описание:</b> На этом мастер-классе вы освоите продвинутые техники ювелирного дела, такие как филигрань
              и эмаль. Подготовьте свое воображение, так как вы сможете создать сложные и изысканные изделия.
              <br />
              <b>Продолжительность:</b> 8 часов (разделенный на два дня)
              <br />
              <b>Уровень сложности:</b> Для опытных (необходим опыт работы с ювелирными изделиями)
            </p>
          </div>
        </div>
        <div className="workshop-row">
          <div className="workshop-block-1">
            <h3>Гравировка и декорирование</h3>
            <p>
              <b>Описание:</b> Этот курс посвящен технике гравировки и декорирования ювелирных изделий. Вы научитесь
              создавать уникальные узоры и надписи, придавая вашему украшению индивидуальность.
              <br />
              <b>Продолжительность:</b> 4 часа
              <br />
              <b>Уровень сложности:</b> Средний уровень (базовые навыки работы с инструментами)
            </p>
          </div>
          <div className="workshop-row">
            <div className="workshop-block-1" style={{ backgroundColor: "transparent", border: "none" }}>
              <img src="/Image/рука.png" alt="Изображение руки" style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-section">
        <h2>Галерея работ</h2>
        <div className="gallery-images">
          <img src="/Image/1.jpeg" alt="Gallery Image 1" />
          <img src="/Image/2.jpeg" alt="Gallery Image 2" />
          <img src="/Image/3.jpeg" alt="Gallery Image 3" />
          <img src="/Image/4.jpeg" alt="Gallery Image 4" />
          <img src="/Image/5.jpeg" alt="Gallery Image 5" />
        </div>
      </div>

      <div className="registration-block">
        <p>Запишитесь на наш мастер-класс и откройте для себя мир ювелирного искусства!</p>
        <form className="registration-form" onSubmit={handleSubmit}>
          <input type="text" className="form-input" name="name" placeholder="Имя" required />
          <input type="text" className="form-input" name="surname" placeholder="Фамилия" required />
          <select className="form-select" name="service" required>
            <option value="Мастер-классы">Мастер-классы</option>
            <option value="Украшения на заказ">Украшения на заказ</option>
            <option value="Переработка украшений">Переработка украшений</option>
            <option value="Консультация">Консультация</option>
          </select>
          <input type="email" className="form-input" name="email" placeholder="Введите почту" required />
          <button type="submit" className="form-button">
            Отправить
          </button>
        </form>
        {showSuccess && (
          <div
            style={{
              display: "block",
              marginTop: "1rem",
              padding: "1rem",
              textAlign: "center",
              backgroundColor: "#E1DDD6",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <svg
              style={{ width: "50px", height: "50px", marginBottom: "0.5rem" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="#4CAF50" />
              <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p style={{ margin: 0, fontSize: "1.2rem", color: "#333" }}>Сообщение отправлено!</p>
          </div>
        )}
      </div>

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
            <img src="/Image/11.png" alt="Соцсеть 1" />
            <img src="/Image/12.png" alt="Соцсеть 2" />
            <img src="/Image/13.png" alt="Соцсеть 3" />
          </div>
        </div>

        <div className="footer-center">
          <img src="/Image/ресурслого2.png" alt="Логотип" className="footer-logo" />
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
