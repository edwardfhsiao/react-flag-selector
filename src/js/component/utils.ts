export const cx = (...params: Array<any>) => {
  const classes = [];
  for (let i = 0; i < params.length; i += 1) {
    const arg = params[i];
    if (!arg) continue;
    const argType = typeof arg;
    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner: string = cx.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg) {
        if ({}.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(' ');
};

export const getRandomId = () => {
  return Math.random()
    .toString(36)
    .slice(-8);
};
