// The harmless ransom note-basically you are given two strings.
// You have to find whether you can make up the first string with words present in the second string.
// For our non programmers, let’s say you have a magazine and you want to create a note text with every word that
// is present in this specific magazine text, but you’re only allowed to use the words you have been given

function harmlessRansomeNote(noteText, magzineText) {
  const noteArr = noteText.split(" ");
  const magzineArr = magzineText.split(" ");
  const magazineObj = {};
  let noteIsPossible = true;

  magazineObj.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  noteArr.forEach((word) => {
    if (magazineObj[word]) magazineObj[word]--;
    else if (magazineObj[word] < 0) noteIsPossible = false;
    else noteIsPossible = false;
  });

  return noteIsPossible;
}

//Big O notation of the above program has O(n)  (Linear time complexity)
// OR
//Big O notation of the above program is O(n) + O(m) = O(m+n)
