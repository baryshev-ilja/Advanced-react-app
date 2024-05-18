# Country

## 1. Структура слайса:
***


<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов
<br/>
<br/>


В слайсе Country хранится код сущности (entity) «кастомного селекта» (select), предназначенного для выбора страны 

## 2. Структура сегментов:
***

### <span style="color:#59afe1">model</span><br>

&mdash; `types` - Перечисления стран (enum) <br>

### <span style="color:#59afe1">ui</span><br>

&mdash; `CountrySelect.tsx` - Селект выбора страны <br>
&mdash; `CountrySelectDeprecated.stories.tsx` - Story (старый дизайн) <br>
&mdash; `CountrySelectNew.stories.tsx` - Story (новый дизайн) <br>
