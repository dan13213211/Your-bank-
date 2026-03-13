# YourBank — Banking Dashboard


![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9-purple)
![React Router](https://img.shields.io/badge/React_Router-6.8-red)
![JSON Server](https://img.shields.io/badge/JSON_Server-0.17-green)

## О проекте

YourBank — это многостраничный сайт банковских услуг с функциями:
   
- 🔐 Регистрация и авторизация (моковый бэкенд на JSON Server)
- 💱 Конвертер валют с реальным API
- 👤 Личный кабинет с сохранением сессии
- 📦 Модальные окна, табы, слайдеры
- 🌍 Глобальное состояние через Redux Toolkit

## Технологии

### Frontend
- **React 18** (функциональные компоненты, хуки)
- **TypeScript** (типизация пропсов, событий, API)
- **Redux Toolkit** (управление состоянием пользователя)
- **React Router v6** (маршрутизация)
- **SCSS Modules** (стилизация)
- **Swiper** (слайдеры)
- **Classnames** (условные классы)

### Backend (мок)
- **JSON Server** (имитация REST API)
- Хранение пользователей в `db.json`

### Внешние API
- Конвертер валют через [ExchangeRate-API](https://www.exchangerate-api.com)

## Функциональность

### ✅ Готово
- Верстка в разрешении 2560×1440 и 1920x1080
- Главная страница с конвертером валют
- Страницы: "О нас", "Карьера", "Безопасность"
- Регистрация нового пользователя (POST /users)
- Вход по email/паролю (GET /users?email=...)
- Сохранение сессии в localStorage
- Redux-состояние пользователя
- Переключение табов в секциях продуктов
- Модальные окна (логин, регистрация)
- Кастомные хуки (useLogin, useRegister)
- API-слой (apiClient, authApi)

### 🔄 В разработке / планы
- Защищённые маршруты (для личного кабинета)
- Адаптация под мобильные разрешения
## 🛠️ Установка и запуск

### Требования
- Node.js 16+
- npm или yarn

### 1. Клонирование
```bash
git clone https://github.com/твой-логин/yourbank.git
cd yourbank
npm install
```

### 2. Установка зависимостей
```bash
npm install
# или
yarn
```
### 3. Запуск JSON Server (моковый бэкенд)
```bash
npm run json-server

# Сервер будет доступен на http://localhost:3001
```
### 4. Запуск фронтенда
```bash
npm run dev
# Приложение откроется на http://localhost:5173
```
### 5. Переменные окружения
```bash
# Создай файл .env в корне проекта:
VITE_APP_API_URL=https://v6.exchangerate-api.com
VITE_APP_API_KEY=81febff3c2e13264b013263e
```
### Тестирование
```bash
npm test
#Покрытие:
 useLogin / useRegister
 Валидация форм
```