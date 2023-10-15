# test_configurator_vue

https://sirius-040.github.io/test_configurator_vue/#/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# запуск и установка сервера

npm i из директории test_server_2

## server start on http://localhost:3000

npm start 

адрес данных http://localhost:3000/data-config

# Описание

При запуске (и при переходах между страницами приложения) проект проверяет наличие соединения для получения данных конфигураций с сервера http://localhost:3000 , если он не доступен то берется локальная урезаннаая копия ограниченная по 2 выбора в каждой опуции.

###

Сохранение возхможно только после выбора всех опций.

###

Если при сохранении конфиг повторяет уже имеющийся - он плюсуется к сохраненному.

###

Все имеющиеся конфигурации остаются при перезагрузке страницы.
 