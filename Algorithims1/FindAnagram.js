/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    if (s.length < p.length) {
        return [];
    }
    let res = [];
    let pLen = p.length;
    let sLen = s.length;
    let pMap = {};
    let sMap = {};
    for (let i = 0; i < pLen; i++) {
        if (pMap[p[i]]) {
            pMap[p[i]]++;
        } else {
            pMap[p[i]] = 1;
        }
    }
    for (let i = 0; i < sLen; i++) {
        if (sMap[s[i]]) {
            sMap[s[i]]++;
        } else {
            sMap[s[i]] = 1;
        }
    }
    for (let i = 0; i < sLen - pLen + 1; i++) {
        if (isAnagram(pMap, sMap)) {
            res.push(i);
        }
        if (i < sLen - pLen) {
            if (sMap[s[i]]) {
                sMap[s[i]]--;
            } else {
                sMap[s[i]] = -1;
            }
            if (sMap[s[i + pLen]]) {
                sMap[s[i + pLen]]++;
            } else {
                sMap[s[i + pLen]] = 1;
            }
        }
    }
    return res;
};