# Notification

## 1. Структура слайса:
***

<span style="color:#59afe1">api</span> &mdash; В этом сегменте содержатся rtk-запросы <br/>
<span style="color:#59afe1">model</span> &mdash; В этом сегменте содержатся логика работы со store <br/>
<span style="color:#59afe1">ui</span> &mdash; В этом сегменте содержатся визуальное отображение компонентов
<br/>
<br/>


В слайсе Notification хранится код относящийся ко всему, что связано с сущностью (entity) уведомления с сервера:

&mdash; уведомление <br>
&mdash; список уведомлений <br>
&mdash; вся логика и т.д. <br>

## 2. Структура сегментов:
***

### <span style="color:#59afe1">api</span><br>
&mdash; `notificationApi.ts` <br>

### <span style="color:#59afe1">model</span><br>
&mdash; `types` - Все необходимые типы <br>

### <span style="color:#59afe1">ui</span><br>
&mdash; `NotificationItem` - Уведомление <br>
&mdash; `NotificationList` - Список уведомлений  <br>

## 3. Дополнительное пояснение:
***
### <i><span style="color:#59afe1">api/</span>notificationApi.ts</i>


В файле расположен RTK (query) запрос, который 'инджектит' (асинхронно добавляет) еще один адрес (endpoint) по
которому находится список уведомлений. Экспортирует хук, с помощью которого можно в любом месте сделать запрос к 
серверу на получение уведомлений.
