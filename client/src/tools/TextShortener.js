const shortenText = (text, length) => {
  let splittedText = text && text.split(/[.|!|?]\s/)[0];

  if (splittedText && splittedText.length > length) {
    splittedText = splittedText.substr(0, length - 1) + " ...";
  }

  return (splittedText && splittedText) || "Description not found";
};

export default shortenText;
