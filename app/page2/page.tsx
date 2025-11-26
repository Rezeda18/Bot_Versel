"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import "../styles/style.css"

export default function Page2() {
  const [price, setPrice] = useState("24990")
  const [warning, setWarning] = useState("")
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const updatePrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(e.target.value)
  }

  const validateForm = () => {
    const serviceSelect = (document.getElementById("serviceSelect") as HTMLSelectElement)?.value
    const name = (document.getElementById("name") as HTMLInputElement)?.value
    const surname = (document.getElementById("surname") as HTMLInputElement)?.value
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')
    const cardNumber = (document.getElementById("cardNumber") as HTMLInputElement)?.value
    const month = (document.getElementById("month") as HTMLInputElement)?.value
    const year = (document.getElementById("year") as HTMLInputElement)?.value
    const cvc = (document.getElementById("cvc") as HTMLInputElement)?.value
    const email = (document.getElementById("email") as HTMLInputElement)?.value

    let warningText = ""

    if (!serviceSelect) warningText = "Вы не выбрали услугу"
    else if (!name || !surname) warningText = "Вы не ввели ваши данные"
    else if (!paymentMethod) warningText = "Выберите способ оплаты"
    else if (!cardNumber || !month || !year || !cvc) warningText = "Введите данные карты"
    else if (!email) warningText = "Введите почту"

    if (warningText) {
      setWarning(warningText)
      setTimeout(() => {
        setWarning("")
      }, 1500)
    } else {
      setPaymentSuccess(true)
    }
  }

  return (
    <>
      <header>
        <div className="logo">
          <img src="/Image/ресурслого.png" alt="ARTISORA Logo" />
        </div>
        <div className="menu-row">
          <Link href="/page1" className="menu-item">
            Мастер-классы
          </Link>
          <div className="menu-item">Украшения на заказ</div>
          <Link href="/" className="brand" style={{ fontFamily: "'DRUZHOK', serif" }}>
            ARTISORA
          </Link>
          <div className="menu-item">Переработка украшений</div>
          <div className="menu-item">Консультация</div>
        </div>
      </header>

      <div className="container d-flex flex-wrap gap-4 justify-content-center my-5">
        <div className="block card p-4 shadow-sm" style={{ backgroundColor: "#E1DDD6" }}>
          <label htmlFor="serviceSelect" className="form-label">
            Выберите услугу
          </label>
          <select className="form-select mb-3" id="serviceSelect" onChange={updatePrice}>
            <option value="24990">Украшение на заказ</option>
            <option value="15990">Мастер-классы</option>
            <option value="20990">Переработка украшений</option>
            <option value="5000">Консультация</option>
          </select>

          <label className="form-label">Цена</label>
          <div className="price-container mb-3" style={{ fontSize: "1.3rem" }}>
            <span id="price">{price}</span>
            <span> руб.</span>
          </div>
          <input type="text" className="form-control mb-3" id="name" placeholder="Имя" />
          <input type="text" className="form-control mb-3" id="surname" placeholder="Фамилия" />

          <label className="form-label">Выберите способ оплаты</label>
          <div className="form-check mb-2">
            <input type="radio" className="form-check-input" name="paymentMethod" id="bankCard" />
            <label htmlFor="bankCard" className="form-check-label">
              Банковская карта
            </label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input" name="paymentMethod" id="installment" />
            <label htmlFor="installment" className="form-check-label">
              Онлайн-рассрочка
            </label>
          </div>
        </div>

        {!paymentSuccess ? (
          <div className="block card p-4 shadow-lg" style={{ backgroundColor: "#E1DDD6" }}>
            <div className="logos text-end mb-3">
              <img src="/Image/карты.png" alt="MasterCard" style={{ height: "40px" }} />
            </div>
            <input type="text" className="form-control mb-3" id="cardNumber" placeholder="Номер карты" maxLength={16} />
            <div className="date-row d-flex gap-2 align-items-center">
              <input type="text" className="form-control" id="month" placeholder="MM" maxLength={2} />
              <span>/</span>
              <input type="text" className="form-control" id="year" placeholder="ГГ" maxLength={2} />
              <span className="cvc-note">CVC</span>
              <input type="text" className="form-control" id="cvc" placeholder="CVC" maxLength={3} />
            </div>

            <label className="form-label mt-4">Введите почту для получения квитанции</label>
            <input type="email" className="form-control mb-3" id="email" placeholder="Введите почту" />
            <button className="btn pay-button w-100" onClick={validateForm}>
              Оплатить
            </button>

            {warning && (
              <div className="alert alert-danger mt-3" style={{ display: "block" }}>
                {warning}
              </div>
            )}
          </div>
        ) : (
          <div className="block card p-4 shadow-lg" style={{ backgroundColor: "#E1DDD6" }}>
            <div className="success-message">
              <img src="/Image/галочка.png" alt="Успешно" className="success-icon" />
              <p>Оплата прошла успешно!</p>
            </div>
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
          <span className="footer-title" style={{ fontFamily: "'DRUZHOK', serif" }}>
            ARTISORA
          </span>
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
