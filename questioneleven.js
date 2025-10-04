/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let li = 0;
    let ri = height.length - 1;

    while (li < ri) {
        const left = height[li];
        const right = height[ri];

        const area = Math.min(left, right) * (ri - li);
        res = Math.max(res, area);

        if (left < right) {
            li++;
        } else {
            ri--;
        }
    }

    return res;
};
