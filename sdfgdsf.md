области видимости
рекурсия что это?
как объяснить замыкание?
node js среда выполнения js
node js запускает все процессы в однопоточным процессе
все про промисы
async await (последовательность выполнения!!!!)
git reflog
git remote set-url origin
оптимизация приложений
git stash
function checkOrder() {

    console.log('1');

    async function asyncFn() {

        console.log('2');

        await Promise.resolve(null);

        console.log('4');

    }

    asyncFn();

    new Promise((resolve) => {

        setTimeout(() => {

            resolve();

            console.log('6');

        }, 0);

    }).then(() => {

        console.log('5');

    });

    console.log('3');

}

checkOrder();





