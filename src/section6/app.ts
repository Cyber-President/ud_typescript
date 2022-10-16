const fetchedUserData = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'Developer',
        description: 'Typescript',
    }
};

// オプショナルチェイン　前者が有効な場合のみ後者を実行
console.log(fetchedUserData.job && fetchedUserData.job.title); // JS記法
console.log(fetchedUserData?.job?.title); // TS記法

// NULL合体演算子　NULL or Undefined　以外は使う
const userInput = '';
const storeData = userInput ?? 'DEFAULT';
console.log(storeData);