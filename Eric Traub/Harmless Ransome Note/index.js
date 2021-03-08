// The harmless ransom note-basically you are given two strings.
// You have to find whether you can make up the first string with words present in the second string.
// For our non programmers, let’s say you have a magazine and you want to create a note text with every word that
// is present in this specific magazine text, but you’re only allowed to use the words you have been given

function harmlessRansomNote(noteText, magzineText) {
  const noteArr = noteText.split(" ");
  const magzineArr = magzineText.split(" ");
  const magazineObj = {};
  let noteIsPossible = true;

  magzineArr.forEach((word) => {
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

console.log(
  harmlessRansomNote(
    "this is a secret note for you from a secret admirer",
    "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited"
  )
);

//Big O notation of the above program has O(n)  (Linear time complexity)
// OR
//Big O notation of the above program is O(n) + O(m) = O(m+n)
