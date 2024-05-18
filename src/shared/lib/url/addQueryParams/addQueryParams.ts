/**
 * getQueryParams - Функция, которая преобразовывает набор параметров в строку с параметрами для запроса
 * @param params - Параметры, которые будут добавлены в строку запроса
 */
export function getQueryParams(params: OptionalRecord<string, string>) {
    /** 1. Получаем стандартный объект с параметрами поисковой строки браузера */
    const searchParams = new URLSearchParams(window.location.search);

    /** 2. Из переданных нами параметров добавляем в стандартный объект только те, которые имеют значение */
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });

    /** 3. Возвращается объеденная строка с запросом ('?example=value&second=number') */
    return `?${searchParams.toString()}`;
}

/**
 * addQueryParams - Функция, которая добавляет в строку запроса параметры, переданные в нее
 * @param params - Параметры, которые будут добавлены в строку запроса
 */
export function addQueryParams(params: Record<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
