# ArticleRating

## 1. Структура слайса:
***

<span style="color:#59afe1">api</span> &mdash; В этом сегменте содержатся rtk-запросы <br/>
<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов
<br/>
<br/>


В слайсе ArticleRating хранится код относящийся ко всему, что связано с «фичёй» (feature) оценки статьи:

&mdash; дать оценку статье <br>
&mdash; написать отзыв <br>
&mdash; отправить оценку и отзыв на сервер <br>
&mdash; вся логика и т.д. <br>

## 2. Структура сегментов:
***

### <span style="color:#59afe1">api</span><br>
&mdash; `articleRatingApi.ts` 

### <span style="color:#59afe1">model</span><br>
&mdash; `types` - Все необходимые типы <br>

### <span style="color:#59afe1">ui</span><br>
&mdash; `ArticleRating` - Визуальное отображение фичи <br>


## 3. Дополнительное пояснение:
***
### <i><span style="color:#59afe1">api/</span>articleRatingApi.ts</i>


В файле расположены RTK (query, mutation) запросы, которыe 'инджектят' (асинхронно добавляют) еще один адрес
(endpoint) по
которому находятся данные об рейтинге конкретной статьи. Экспортирует хуки, с помощью которых можно в любом месте 
сделать запрос к серверу на получение/отправку оценки конкретной статьи.
