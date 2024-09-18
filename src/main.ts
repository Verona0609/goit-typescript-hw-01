import "./style.css";
function add(num1: number, num2: number) {
  return num1 + num2;
}
console.log(add(1, 2));

let decimal: number = 6; // десяткові
let float: number = 3.14; // речові або число з плаваючою крапкою
let hex: number = 0xf00d; // шістнадцяткове
let binary: number = 0b1010; // двійкове
let octal: number = 0o744; // вісімкове

const num = 10;
const str = "Some string";
const bool = true;
const empty = null;
const notParam = undefined;

let arrString: string[]; // для оголошення масиву рядків
let arrNumber: number[]; // для оголошення масиву чисел

let matrix: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

let mixed: (number | string)[] = [1, "two"];

let numbers: Array<number> = [1, 2]; //для оголошення масиву чисел

// для оголошення масиву об'єктів
type User = {
  name: string;
  age: number;
};

let users: User[] = [{ name: "Tom", age: 30 }];

/****************ANY******************Any — це тип даних, який використовується, коли ви не знаєте, який тип даних може міститися у змінній*/

let arrAny: any[];

arrAny = [123, "TEXT", { name: "Tom" }, [1, 2, 3]];

function fetchUserData(id: string, callback: (data: any) => void): void {
  // Тут може бути якийсь запит, але ми його заповнимо самі
  const responseData = { name: "Tom" };
  callback(responseData);
}

//Використання функції:

fetchUserData("123", (data) => {
  console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
});

/***********Unknown***********Тип unknown підходить для сценаріїв, коли ви не знаєте точного типу даних, але все ж таки хочете підтримувати сувору перевірку типів.*/
function fetchUserData2() {
  return "Tom";
}

let userData: unknown = fetchUserData2(); // fetchUserData повертає невідомі дані
if (typeof userData === "string") {
  console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
}

/**********TUPLE*************** 
 У TypeScript це тип даних, що дозволяє визначити масив з фіксованою кількістю елементів, типи яких відомі, але не обов'язково повинні бути однаковими. 
 Кортежі зручні, коли нам потрібно зберегти в масив фіксовані значення, наприклад, день, місяць та рік.
*/
let tupleType: [string, number];
let date: [number, number, number];
date = [7, 11, 2023];
/* tupleType = ['hello', true]; // OK
tupleType = [true, 'hello']; // Error. Неправильні типи
tupleType = ['hello', true, true]; // Error. Більше значень ніж у tuple */

let tuple: [string, ...number[]]; //оператора розширення (...)

tuple = ["hello", 42, 100, 200]; // OK

/***********ENUM********** імена змінних цього типу мають починатися з великої літери.
 
enum є засобом для визначення та використання 'іменованих констант' у TypeScript.
 Крім того, ви можете використовувати enum для угруповання взаємопов'язаних значень
*/
enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("Role", Role.ADMIN);
}

enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function respond(status: HttpCodes) {
  // handle response
}

respond(HttpCodes.OK);

/* Значення CONST ENUM вставляють у місце використання у вигляді літералів. Це може допомогти покращити продуктивність. */

const enum HttpCodes2 {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

const status1 = HttpCodes2.OK;
/*Після компіляції у JavaScript отримаємо наступний код:  */
const status = 200;

/***************UNION TYPE**************
 Union Type у TypeScript дозволяє вказати, що значенням може бути один із кількох типів. Це дуже зручно, коли хочемо визначити змінну, яка може приймати різні типи даних. Типи перераховуються через вертикальну риску |
*/

let mixedType: string | number | boolean;

mixedType = "string"; // OK
mixedType = 10; // OK
mixedType = true; // OK

function cobmine(param1: number | string, param2: number | string) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

type Dog = {
  legs: 4;
  bark: () => void;
};

type Fish = {
  fins: 2;
  swim: () => void;
};

let pet: Dog | Fish;

// type guard function
function isDog(pet: Dog | Fish): pet is Dog {
  return "bark" in pet;
}

/**********Intersection type**********
 є способом об'єднання декількох типів в один. Це дозволяє створювати складні типи, комбінуючи прості. У TypeScript можна використовувати символ & для створення типу intersection. 
 */

type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = Employee & Manager;

const ceo: CEO = {
  name: "Alice",
  id: 1,
  employees: [
    {
      name: "Bob",
      id: 2,
    },
  ],
};

/*************LITERAL TYPE***********
  це тип, що набуває конкретного значення. З ним ви можете визначити тип змінної так, щоб він набував лише певних значень.
*/
type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1; // OK
value = 2; // OK

type YesOrNo = "yes" | "no";
let answer: YesOrNo;
answer = "yes"; // OK
answer = "no"; // OK

type ButtonSize = "small" | "medium" | "large";

function getButtonStyle(size: ButtonSize) {
  switch (size) {
    case "small":
      return { fontSize: "10px", padding: "5px" };
    case "medium":
      return { fontSize: "14px", padding: "10px" };
    case "large":
      return { fontSize: "18px", padding: "15px" };
    default:
      return { fontSize: "14px", padding: "10px" };
  }
}

let myButtonStyle = getButtonStyle("medium"); // OK
