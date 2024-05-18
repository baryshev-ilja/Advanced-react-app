# Profile

## 1. Структура слайса:
***

<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов
<br/>
<br/>


В слайсе Profile хранится код относящийся ко всему, что связано с сущностью (entity) карточки профиля:

&mdash; карточка профиля <br>
&mdash; старый/новый дизайн <br>
&mdash; пропсы <br>
&mdash; вся логика и т.д. <br>

## 2. Структура сегментов:
***

### <span style="color:#59afe1">model</span><br>
&mdash; `consts` - Перечисления ошибок при валидации полей <br>
&mdash; `types` - Все необходимые типы <br>

### <span style="color:#59afe1">ui</span><br>
&mdash; `ProfileCard` - Карточка профиля <br>
&mdash; `ProfileCardProps` - Пропсы для общего компонента  <br>
&mdash; `ProfileCardDeprecated` - Старый дизайн карточки профиля  <br>
&mdash; `ProfileCardRedesigned` - Новый дизайн карточки профиля  <br>
