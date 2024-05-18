# EditableProfileCard

## 1. Структура слайса:
***

<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов
<br/>
<br/>


В слайсе EditableProfileCard хранится код относящийся ко всему, что связано с «фичёй» (feature) редактирования 
пользователя:

&mdash; запросить данные о пользователе с сервера <br>
&mdash; позволить/запретить редактировать <br>
&mdash; вернуться к прежним данным <br>
&mdash; валидация введенных данных <br>
&mdash; отправка данных на сервер <br>
&mdash; обновление данных на клиенте после отправки на сервер <br>
&mdash; вся логика и т.д. <br>

## 2. Структура сегментов:
***

### <span style="color:#59afe1">model</span><br>
&mdash; `selectors` - Селекторы получения данных из store <br>
&mdash; `services` - Асинхронные запросы к серверу <br>
&mdash; `slice` - Редаксовский срез с данными о профиле <br>

### <span style="color:#59afe1">ui</span><br>
&mdash; `EditableProfileCard` - Карточка профиля <br>
&mdash; `EditableProfileCardHeader` - Блок управления редактированием <br>
