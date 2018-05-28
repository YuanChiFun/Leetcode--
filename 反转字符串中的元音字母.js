/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var b = s.split('');
    var c = new Array();
    for (var i =0;i<b.length;i++)
        {
            if(b[i] == 'a'||b[i] == 'e'||b[i] == 'i'||b[i] == 'o'||b[i] == 'u')
                    c.push(b[i]);
        }
    c.reverse();
    for (i = 0;i<b.length;i++)
        {
             if(b[i] == 'a'||b[i] == 'e'||b[i] == 'i'||b[i] == 'o'||b[i] == 'u')
                {
                    b[i] = c.shift();
                }
        }
    return b.join('');
};