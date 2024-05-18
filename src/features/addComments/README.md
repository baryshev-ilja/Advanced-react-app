# AddComments

## 1. Структура слайса:
***

<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов
<br/>
<br/>


В слайсе AddComments хранится код относящийся ко всему, что связано с «фичёй» (feature) отправки/получения комментариев:

&mdash; загрузить с сервера все комментарии <br>
&mdash; написать комментарий <br>
&mdash; отправить его на сервер <br>
&mdash; вся логика и т.д. <br>

## 2. Структура сегментов:
***

### <span style="color:#59afe1">model</span><br>
&mdash; `selectors` - Селекторы получения данных из store <br>
&mdash; `services` - Асинхронные запросы к серверу <br>
&mdash; `slice` - Редаксовский срез с данными о комментариях <br>
&mdash; `types` - Все необходимые типы <br>

### <span style="color:#59afe1">ui</span><br>
&mdash; `AddCommentsForArticle` - Визуальное отображение фичи <br>
