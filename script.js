// const { createElement } = require("react");

let notes = []
if(localStorage.getItem("note")!= null) {
	notes = JSON.parse(localStorage.getItem("note"))
}	
console.log(notes)

$(document).ready(function() {
	let count = 0
    // Додавання нотатки

  $('.btn-add').click(function() {
        let noteText = $('#noteInput').val();
        if (noteText.trim() !== '') {
        	let text = noteText + " "+ parseDate()
        	notes.push(text)
            let noteItem = $('<li>').addClass('item').text(text);

			let archiveButton = $('<button>').addClass('archive btn btn-archive btn-secondary').text('Архівувати');
			noteItem.append(archiveButton);

			$('#notes').append(noteItem);


            $('#notes').append(noteItem);
            $('#noteInput').val('');
             localStorage.setItem('note',JSON.stringify(notes));
             archiveButton.on('click', function() {
   			 $(this).parent().remove(); // Видаляє нотатку при натисканні
            });

        }
    });

    $('.btn-delete').click(function() {
        $('#notes li:last').remove();
    });

    $('.btn-delete').click(function() {
        if (notes.length > 0) {
            notes.pop(); // Видаляємо останню нотатку з масиву
            localStorage.setItem("note", JSON.stringify(notes)); // Оновлюємо localStorage
        
        }
    });


// $('#noteInput').val(localStorage.getItem('note') || '');

// $('#noteInput').on('input', function() {
//     localStorage.setItem('note', $(this).val());
// });

$(document).on( "click", ".btn-archive", function() {
    let noteElem = $(this).parent();
    let elementNote = document.createElement("div")
    elementNote.textContent = noteElem.text().split("Архівувати")[0]
    elementNote.setAttribute("class", "archived")
    $('#archive').append(elementNote);
});


});

function draw() {
	notes.forEach(note => {
  	    console.log(note);
  	    let noteItem = $('<li>').addClass('item').text(note);
        noteItem.append('<button class="archive btn btn-archive btn-secondary">Архівувати</button>')
        $('#notes').append(noteItem);
    });
}
	

        
        let archiveBtn = $('<button>')
  .addClass('btn-archive')
  .text('Архівувати')
  .click(function () {
   
   let noteElem = $(this).parentNode.closest('.item');
    console.log($(this).parentNode.closest('.item'))
    noteElem.addClass('archive');
    $('#archived').append(noteElem);

    
  });


function parseDate() {
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const ht = date.getHours();
    const mt = date.getMinutes();

    return `${y}.${m} ${ht}:${mt}`;
}
draw()