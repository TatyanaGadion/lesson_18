function ageClassification(age) {

  return age < 0 
          ? null 
          : age <= 24 
            ? 'детский возраст' 
            : age <= 44 
              ? 'молодой возраст' 
              : age <= 65 
                ? 'средний возраст'
                : age <= 75
                  ? 'пожилой возраст'
                  : age <= 90
                    ? 'старческий возраст'
                    : age <= 122
                      ? 'долгожители'
                      : null;
}

console.log('-1 :', ageClassification(-1)); // -1 : null

console.log('5 :', ageClassification(5)); // 5 : детский возраст

console.log('34 :', ageClassification(34)); // 34 : молодой возраст

console.log('50 :', ageClassification(50)); // 50 : средний возраст

console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст

console.log('80 :', ageClassification(80)); // 80 : старческий возраст

console.log('110 :', ageClassification(110)); // 110 : долгожители

console.log('130 :', ageClassification(130)); // 130 : null

/*
 * Блок тестирования:
 * console.log(1, ageClassification(-1) === null);
 * console.log(2, ageClassification(1) === 'детский возраст');
 * console.log(3, ageClassification(24) === 'детский возраст');
 * console.log(4, ageClassification(24.01) === 'молодой возраст');
 * console.log(5, ageClassification(44) === 'молодой возраст');
 * console.log(6, ageClassification(44.01) === 'средний возраст');
 * console.log(7, ageClassification(65) === 'средний возраст');
 * console.log(8, ageClassification(65.01) === 'пожилой возраст');
 * console.log(9, ageClassification(75) === 'пожилой возраст');
 * console.log(10, ageClassification(75.01) === 'старческий возраст');
 * console.log(11, ageClassification(90) === 'старческий возраст');
 * console.log(12, ageClassification(90.01) === 'долгожители');
 * console.log(13, ageClassification(122) === 'долгожители');
 * console.log(14, ageClassification(122.01) === null);
 * console.log(15, ageClassification(150) === null);
 
 */
console.log(1, ageClassification(-1) === null);
 console.log(2, ageClassification(1) === 'детский возраст');
  console.log(3, ageClassification(24) === 'детский возраст');
 console.log(4, ageClassification(24.01) === 'молодой возраст');
 console.log(5, ageClassification(44) === 'молодой возраст');
  console.log(6, ageClassification(44.01) === 'средний возраст');
 console.log(7, ageClassification(65) === 'средний возраст');
  console.log(8, ageClassification(65.01) === 'пожилой возраст');
  console.log(9, ageClassification(75) === 'пожилой возраст');
 console.log(10, ageClassification(75.01) === 'старческий возраст');
 console.log(11, ageClassification(90) === 'старческий возраст');
  console.log(12, ageClassification(90.01) === 'долгожители');
  console.log(13, ageClassification(122) === 'долгожители');
 console.log(14, ageClassification(122.01) === null);
 console.log(15, ageClassification(150) === null);


 function weekFn(n) {
  var str = '';

  switch (n) {  
    case 1: str = 'Понедельник'; break;
    case 2: str = 'Вторник'; break;
    case 3: str = 'Среда'; break;
    case 4: str = 'Четверг'; break;
    case 5: str = 'Пятница'; break;
    case 6: str = 'Суббота'; break;
    case 7: str = 'Воскресенье'; break; 
    default:  str = null;
  } 
  return str;
}
console.log(weekFn(1)); // 'Понедельник'

console.log(weekFn(3)); // 'Среда'

console.log(weekFn(7)); // 'Воскресенье'

console.log(weekFn(9)); // null

console.log(weekFn(1.5)); // null

console.log(weekFn('2')); // null
