const maxParagraphLength = 100;
const truncate = (string) => {
  if (string.length > maxParagraphLength) {
    return (string = `${string.substr(0, maxParagraphLength)}...`);
  } else {
    return string;
  }
};

export default truncate;
