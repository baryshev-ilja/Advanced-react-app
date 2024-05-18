# Article

## 1. Структура слайса:
***

<span style="color:#59afe1">api</span> &mdash; В этом сегменте содержатся rtk-запросы <br/>
<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов
<br/>
<br/>


В слайсе Article хранится код относящийся ко всему, что связано с сущностью (entity) статьи:

&mdash; статья <br>
&mdash; список статей <br>
&mdash; блоки содержания статьи <br>
&mdash; вся логика и т.д. <br>

## 2. Структура сегментов:
***

### <span style="color:#59afe1">api</span><br>
&mdash; `updateViewsApi.ts` <br>
### <span style="color:#59afe1">model</span><br>
&mdash; `consts` - Перечисления (enum) и т.д. <br>
&mdash; `selectors` - Селекторы получения данных из store <br>
&mdash; `services` - Асинхронные запросы к серверу <br>
&mdash; `slice` - Редаксовский срез с данными о статье <br>
&mdash; `types` - Все необходимые типы <br>
### <span style="color:#59afe1">ui</span><br>
&mdash; `ArticleList` - Список статей <br>
&mdash; `ArticleListItem` - Компонент отдельной статьи в списке  <br>
&mdash; `ArticleDetails` - Статья <br>
&mdash; `ArticleCodeBlockComponent` - Блок с кодом в статье <br>
&mdash; `ArticleImageBlockComponent` - Блок с изображением в статье <br>
&mdash; `ArticleTextBlockComponent` - Блок с текстом в статье <br>

## 3. Дополнительное пояснение:
***
### <i><span style="color:#59afe1">api/</span>updateViewsApi.ts</i>


В файле расположен RTK (mutation) запрос, который 'инджектит' (асинхронно добавляет) еще один адрес (endpoint) по 
которому находятся данные о количестве просмотров этой статьи. Этот запрос обновляет данные о просмотре статьи, 
которая лежит по этому адресу (endpoint)

