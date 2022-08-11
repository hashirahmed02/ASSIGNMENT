// REVERSE A NUMBER
function reverse(n)
{
	var n = n.toString();
	return n.split("").reverse().join("");
}
console.log(Number(reverse(32243)));

// CHECK PALINDROME
function check(entry){
       var str = entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var count = 0;
        
        if ((str.length) % 2 === 0) {
            count = (str.length) / 2;
        } else {
            if (str.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
                count = (str.length - 1) / 2;
            }
        }
        for (var i = 0; i < count; i++) {
            if (str[i] != str.slice(-1-i)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    check('madam');
    check('nurses run');
    check('fox');

    // COMBINATION OF STRING
    function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");

// 8 CHECK PRIME NUMBER
function prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(prime(43));


// 7 VOWEL COUNT
   function count_vowel(entry)
{
    var vowels = 'aeiouAEIOU';
    var vc = 0;
    
    for(var x = 0; x < entry.length ; x++)
    {
      if (vowels.indexOf(entry[x]) !== -1)
      {
        vc += 1;
      }
    
    }
    return vc;
  }
  console.log(count_vowel("Apple, Orange, Banana and Peach are fruits"));


//   LONGEST WORD IN SENTENCE
function longest_word(entry)
{
  var array = entry.match(/\w[a-z]{0,}/gi);
  var result = array[0];

  for(var x = 1 ; x < array.length ; x++)
  {
    if(result.length < array[x].length)
    {
    result = array[x];
    } 
  }
  return result;
}
console.log(longest_word('My Name Is Hashir Ahmed'));

// ALPHABETICAL ODER
     function inorder(entry4)
    {
    return entry4.split('').sort().join('');
      }
    console.log(inorder("Hashir Ahmed"));
  
// 