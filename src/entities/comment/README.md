# Comment

## 1. Структура слайса:
***


<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов
<br/>
<br/>


В слайсе Comment хранится код относящийся ко всему, что связано с сущностью (entity) комментария:

&mdash; комментарий <br>
&mdash; список комментариев <br>
&mdash; форма отправки <br>
&mdash; вся логика и т.д. <br>

## 2. Структура сегментов:
***

### <span style="color:#59afe1">model</span><br>

&mdash; `types` - Все необходимые типы <br>

### <span style="color:#59afe1">ui</span><br>

&mdash; `CommentCard` - Комментарий <br>
&mdash; `CommentForm` - Форма отправки комментария  <br>
&mdash; `CommentList` - Список комментариев <br>
