For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1

996 / 5 000
В этом упражнении вы укрепите свои навыки работы с page-fu. Вы создадите класс PaginationHelper — вспомогательный класс, полезный для запроса информации о страничном выводе, относящейся к массиву.

Класс предназначен для приема массива значений и целого числа, указывающего количество элементов, которые можно разместить на каждой странице. Типы значений, содержащихся в коллекции/массиве, не имеют значения.

Ниже приведены несколько примеров использования этого класса:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // последняя страница — should == 2
helper.pageItemCount(2); // should == -1, так как страница недействительна

// pageIndex принимает индекс элемента и возвращает страницу, к которой он принадлежит
helper.pageIndex(5); // should == 1 (индекс отсчитывается от нуля)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
V etom uprazhnenii vy ukrepite svoi navyki raboty s page-fu. Vy sozdadite klass PaginationHelper — vspomogatel'nyy klass, poleznyy dlya zaprosa informatsii o stranichnom vyvode, otnosyashcheysya k massivu.

Klass prednaznachen dlya priyema massiva znacheniy i tselogo chisla, ukazyvayushchego kolichestvo elementov, kotoryye mozhno razmestit' na kazhdoy stranitse. Tipy znacheniy, soderzhashchikhsya v kollektsii/massive, ne imeyut znacheniya.

Nizhe privedeny neskol'ko primerov ispol'zovaniya etogo klassa:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // poslednyaya stranitsa — should == 2
helper.pageItemCount(2); // should == -1, tak kak stranitsa nedeystvitel'na

// pageIndex prinimayet indeks elementa i vozvrashchayet stranitsu, k kotoroy on prinadlezhit
helper.pageIndex(5); // should == 1 (indeks otschityvayetsya ot nulya)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
Ещё
Отправить отзыв
Нажмите на вкладку