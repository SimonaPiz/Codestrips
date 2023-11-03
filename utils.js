const isValidStrip = (instance) => {
  instance.head = instance.head;
  instance.body = instance.body;
  instance.background = instance.background;
  instance.bubbleType = instance.bubbleType;
  if (
    typeof instance.head !== 'string' || 
    typeof instance.body !== 'string' || 
    typeof instance.background !== 'string' ||
    typeof instance.bubbleType !== 'string' 
  ) {
    return false;
  } 
  return true;
}

module.exports = {isValidStrip};