const boys = document.querySelector("#male");
const girls = document.querySelector('#female');

boys.addEventListener('click', function() {
    var select = document.querySelectorAll('select');
    for (var i=0 ; i<select.length ; i++) {
        for (var j = 0; j<select[i].options.length ; j++) {
            if (select[i].options[j].value === 'KMS' || select[i].options[j].value === 'CVR') {
                select[i].options[j].style.display = 'none';
            }
            else select[i].options[j].style.display = 'block';
        }
    }
    for (var i=0 ; i<select.length ; i++) {
        select[i].selectedIndex = 0;
    }
});

girls.addEventListener('click', function() {
    var select = document.querySelectorAll('select');
    for (var i=0 ; i<select.length ; i++) {
        for (var j = 0; j<select[i].options.length ; j++) {
            if (select[i].options[j].value === 'GDB' || select[i].options[j].value === 'DBA' || select[i].options[j].value === 'MV' || select[i].options[j].value === 'MSS' || select[i].options[j].value === 'SD' || select[i].options[j].value === 'HB') {
                select[i].options[j].style.display = 'none';
            }
            else select[i].options[j].style.display = 'block';
        }
    }
    for (var i=0 ; i<select.length ; i++) {
        select[i].selectedIndex = 0;
    }
});