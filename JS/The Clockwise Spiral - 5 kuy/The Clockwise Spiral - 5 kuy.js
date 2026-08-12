function createSpiral(N) {
    if (N < 1 || !Number.isInteger(N) || typeof N !== 'number') {
        return [];
    }
    let arrResult = Array.from({ length: N }, () => Array(N).fill(0));

    let top = 0;
    let bottom = N - 1;
    let left = 0;
    let right = N - 1;
    let num = 1;

    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            arrResult[top][col] = num++;
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            arrResult[row][right] = num++;
        }
        right--;

        for (let col = right; col >= left; col--) {
            arrResult[bottom][col] = num++;
        }
        bottom--;

        for (let row = bottom; row >= top; row--) {
            arrResult[row][left] = num++;
        }
        left++;
    }

    return arrResult;
}

module.exports = createSpiral;

console.log(createSpiral(3));

/*
function createSpiral(n) {
  if (!Number.isInteger(n)||n<1) return [];
  var rs=[...Array(n)].map(x=>[...Array(n)].map(x=>0));
  rs[0][0]=1;
  for (var i=2,xx=0,yy=0;i<=n*n;) {
    while (yy+1<n&&rs[xx][yy+1]==0) rs[xx][++yy]=i++;
    while (xx+1<n&&rs[xx+1][yy]==0) rs[++xx][yy]=i++;
    while (yy-1>-1&&rs[xx][yy-1]==0) rs[xx][--yy]=i++;
    while (xx-1>-1&&rs[xx-1][yy]==0) rs[--xx][yy]=i++;
  }
  return rs;
}
*/