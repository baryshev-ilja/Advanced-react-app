# ArticleRecommendationList

## 1. Структура слайса:
***

<span style="color:#59afe1">api</span> &mdash; В этом сегменте содержатся rtk-запросы <br/>
<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов
<br/>
<br/>


В слайсе ArticleRecommendationList хранится код относящийся ко всему, что связано с «фичёй» (feature) показа рекомендаций к 
прочтению:

&mdash; подгрузить список статей с сервера <br>
&mdash; показать список пользователю после статьи <br>
&mdash; вся логика и т.д. <br>

## 2. Структура сегментов:
***

### <span style="color:#59afe1">api</span><br>
&mdash; `articleRecommendationApi.ts`

### <span style="color:#59afe1">model</span><br>
&mdash; `selectors` - Селекторы получения данных из store <br>
&mdash; `services` - Асинхронные запросы к серверу <br>
&mdash; `slice` - Редаксовский срез с данными о рекомендациях <br>
&mdash; `types` - Все необходимые типы <br>

### <span style="color:#59afe1">ui</span><br>
&mdash; `ArticleRecommendationList` - Визуальное отображение фичи <br>


## 3. Дополнительное пояснение:
***
### <i><span style="color:#59afe1">api/</span>articleRecommendationApi.ts</i>


В файле расположен RTK (query) запрос, который 'инджектит' (асинхронно добавляет) еще один адрес
(endpoint) по
которому находятся данные о списке статей. Экспортирует хук, с помощью которого можно в любом месте
сделать запрос к серверу на получение списка рекомендованных статей.
