$(document).ready(function () {
    const Images = {
      A: "./A.jpg",
      B: "./B.jpg",
      C: "./C.jpg",
      D: "./D.jpg",
      E: "./E.jpg",
      F: "./F.jpg",
      G: "./G.jpg",
      H: "./H.jpg",
      I: "./I.jpg",
      J: "./J.jpg",
      K: "./K.jpg",
      L: "./L.jpg",
      M: "./M.jpg",
      N: "./N.jpg",
      O: "./O.jpg",
      P: "./P.jpg",
      Q: "./Q.jpg",
      R: "./R.jpg",
      S: "./S.jpg",
      T: "./T.jpg",
      U: "./U.jpg",
      V: "./V.jpg",
      W: "./W.jpg",
      X: "./X.jpg",
      Y: "./Y.jpg",
      Z: "./Z.jpg"
    };
// **************************************************************************
//enter number
    $('#Inputnumber').on('input', function () {
      const value = parseInt($(this).val());

      if (value < 1 || value > 26) {
        alert("الرجاء إدخال رقم بين 1 و 26");
        return;
    }
      if (value >= 1 && value <= 26) {
        renderLetters(value); } 
      else { $('#lettersContainer, #imageContainer').empty();}
    });
// ********************************************************************************
    // to show letters
    function renderLetters(count) {
        $('#lettersContainer, #imageContainer').empty(); 
  
        const letters = generateRandomLetters(count);
        letters.forEach(letter => {
          
          const button = $('<button>').text(letter).on('click', function () {
              showImage(letter);});
          $('#lettersContainer').append(button);
        });
// ********************************
//to show images[letters]
      function showImage(letter) {
        const image = Images[letter];
          $('#imageContainer').html(`<img src="${image}" alt="letter ${letter}" />`);}}
// *****************************************************************************************
// to show random letters
$('#generateButton').on('click', function () {
    const value = $('#Inputnumber').val();
    if (value >= 1 && value <= 26) {
      renderLetters(value);}
  });
    //math random
    function generateRandomLetters(count) {
        const alphabet = Object.keys(Images); 
        const letters = [];
        while (letters.length < count) {
          const randomIndex = Math.floor(Math.random() * alphabet.length);
          const randomLetter = alphabet[randomIndex];
          if (!letters.includes(randomLetter)) {
            letters.push(randomLetter);} }
        return letters;}
  });

