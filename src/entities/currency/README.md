# Currency

## 1. Структура слайса:
***


<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store. <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов.
<br/>
<br/>


В слайсе Currency хранится код сущности (entity) «кастомного селекта» (select), предназначенного для выбора валюты.

## 2. Структура сегментов:
***

### <span style="color:#59afe1">model</span><br>

&mdash; `types` - Перечисления валют (enum) <br>

### <span style="color:#59afe1">ui</span><br>

&mdash; `CurrencySelect.tsx` - Селект выбора валюты <br>
&mdash; `CurrencySelectDeprecated.stories.tsx` - Story (старый дизайн) <br>
&mdash; `CurrencySelectNew.stories.tsx` - Story (новый дизайн) <br>
