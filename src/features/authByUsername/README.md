# AuthByUsername

## 1. Структура слайса:
***

<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов
<br/>
<br/>


В слайсе AuthByUsername хранится код относящийся ко всему, что связано с «фичёй» (feature) авторизации пользователя:

&mdash; заполнить форму авторизации <br>
&mdash; отправка данных на сервер <br>
&mdash; изменить данные в store <br>
&mdash; вся логика и т.д. <br>

## 2. Структура сегментов:
***

### <span style="color:#59afe1">model</span><br>
&mdash; `selectors` - Селекторы получения данных из store <br>
&mdash; `services` - Асинхронные запросы к серверу <br>
&mdash; `slice` - Редаксовский срез с данными об авторизации <br>
&mdash; `types` - Все необходимые типы <br>

### <span style="color:#59afe1">ui</span><br>
&mdash; `LoginForm` - Форма авторизации <br>
&mdash; `LoginModal` - Модальное окно с формой авторизации <br>
