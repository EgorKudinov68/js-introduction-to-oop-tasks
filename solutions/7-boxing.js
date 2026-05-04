// BEGIN
function magic(...args) {
  const sum = args.reduce((acc, num) => acc + num, 0);
  
  const func = (...newArgs) => {
    const newSum = newArgs.reduce((acc, num) => acc + num, 0);
    return magic(sum + newSum);
  };
  
  func.valueOf = () => sum;
  
  return func;
}

export default magic;
// END
