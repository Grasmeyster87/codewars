// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  const falses = [];
  const trues = [];

  for (const item of items) {
    (pred(item) ? trues : falses).push(item);
  }

  const result = falses.concat(trues);
  for (let i = 0; i < items.length; i++) {
    items[i] = result[i];
  }

  return falses.length;
}
module.exports = partitionOn;