describe('Тестирование функции ageClassification(age)', () => {
  it(`Функция должна вернуть null, если age < 0`, () => {
    expect(ageClassification(-1)).toBe(null); 
  });  
  it(`Функция должна вернуть детский возраст, если age <= 24`, () => {
    expect(ageClassification(1)).toBe("детский возраст");
    expect(ageClassification(24)).toBe("детский возраст");
  });  
  it(`Функция должна вернуть молодой возраст, если ecли age <= 44`, () => {
    expect(ageClassification(24.01)).toBe("молодой возраст");
    expect(ageClassification(44)).toBe("молодой возраст");
  });  
  it(`Функция должна вернуть средний возраст, ecли age <= 65`, () => {
    expect(ageClassification(44.01)).toBe("средний возраст");
    expect(ageClassification(65)).toBe("средний возраст");
  });  
  it(`Функция должна вернуть пожилой возраст, ecли age <= 75`, () => {
    expect(ageClassification(65.01)).toBe("пожилой возраст");
    expect(ageClassification(75)).toBe("пожилой возраст");
  });  
  it(`Функция должна вернуть старческий возраст, если ecли age <= 90`, () => {
    expect(ageClassification(75.01)).toBe("старческий возраст");
    expect(ageClassification(90)).toBe("старческий возраст");
  });  
  it(`Функция должна вернуть долгожители, если ecли age <= 122`, () => {
    expect(ageClassification(90.01)).toBe("долгожители");
    expect(ageClassification(122)).toBe("долгожители");
  });  
  it(`Функция должна вернуть null, ecли age > 122`, () => {
    expect(ageClassification(122.01)).toBe(null);  
    expect(ageClassification(150)).toBe(null); 
  });  
});  
