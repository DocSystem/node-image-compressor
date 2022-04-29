exports.compress = function(img1, img2) {
    if (img1 == img2) {
        return [];
    }
    var diff = [];
    var i = 0;
    while (i < img1.length) {
        if (img1[i] != img2[i]) {
            var newstr = img2[i];
            var j = i;
            i++;
            while (i < img1.length && img1[i] != img2[i]) {
                newstr += img2[i];
                i++;
            }
            diff.push({index: j, str: newstr});
        }
        i++;
    }
    return diff;
}

exports.decompress = function(img1, diff) {
    var newstr = [];
    for (var k of img1) {
        newstr.push(k);
    }
    for (var d of diff) {
        var i = d.index;
        var s = d.str;
        for (var k in s) {
            newstr[i+parseInt(k)] = s[k];
        }
    }
    return newstr.join('');
}
