const reverseString = (string) => {
  const strings = string.split(' ');

  const reverseStrings = strings.map((item) => {
    item = item.split('');
    item = item.reverse();
    item = item.join('');
    return item;
  });
  return reverseStrings.join(' ');
};

module.exports = reverseString;
