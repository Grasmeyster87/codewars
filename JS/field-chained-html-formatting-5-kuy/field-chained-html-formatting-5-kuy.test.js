const { expect } = require("chai");

// 1. Імітуємо Codewars: СТВОРЮЄМО початковий об'єкт Format
// Цей об'єкт має бути доступний глобально або переданий у ваш модуль.
// Найпростіший спосіб - зробити його глобальним для тесту.
global.Format = { tags: ['div', 'h1', 'p', 'span'] };

// 2. ЗАПУСКАЄМО ваш код рішення (він модифікує global.Format)
// Ми просто "виконуємо" файл, нічого не імпортуючи з нього.
require('./field-chained-html-formatting-5-kuy.js'); // <-- Вкажіть правильний шлях до вашого файлу

// 3. Тепер Format має містити ваші методи.
// Перейменуємо опис, щоб він відповідав тому, що ми тестуємо.
describe("Format Object HTML Formatting", function(){
  
  it("should wrap input in the correct element", function(){
    expect(Format.div("Foo")).to.equal(`<div>Foo</div>`);
  });
  
  it("should chain call together", function(){
    expect(Format.div.h1("Foo")).to.equal(`<div><h1>Foo</h1></div>`);
    expect(Format.div.p.span("FizBuz")).to.equal(`<div><p><span>FizBuz</span></p></div>`);
  });
  
  it("should allow multiple arguments", function(){
    expect(Format.div("Foo", "Bar")).to.equal(`<div>FooBar</div>`);
    expect(Format.div.h1("Foo", "Bar")).to.equal(`<div><h1>FooBar</h1></div>`);
  });
  
  it("Should allow you to store and reuse methods", function(){
    let wrapInDiv = Format.div;
    expect(wrapInDiv("Foo")).to.equal(`<div>Foo</div>`);
    // Також додамо перевірку на ланцюжок зі збереженої змінної
    expect(wrapInDiv.p("Bar")).to.equal(`<div><p>Bar</p></div>`);
  });

  it("Should allow storing and reusing chained methods", function(){
    var wrapInDivH1 = Format.div.h1;
    expect(wrapInDivH1("Far")).to.equal(`<div><h1>Far</h1></div>`);
    expect(wrapInDivH1.span("Bar")).to.equal(`<div><h1><span>Bar</span></h1></div>`);
  });

  it("Should allow nested calls", function(){
    const nested = Format.div(
      Format.h1("Title"), 
      Format.p(`Paragraph with a ${ Format.span('span') }.`)
    );
    const expected = "<div><h1>Title</h1><p>Paragraph with a <span>span</span>.</p></div>";
    expect(nested).to.equal(expected);
  });
});