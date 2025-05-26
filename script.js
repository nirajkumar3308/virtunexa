function copyCode(animation) {
  const codeBlock = document.getElementById(`code-${animation}`);
  const text = codeBlock.innerText.trim();

  navigator.clipboard.writeText(text)
    .then(() => {
      alert(`${animation} code copied to clipboard!`);
    })
    .catch(err => {
      console.error('Copy failed', err);
    });
}

function toggleCode(animation) {
  const codeBlock = document.getElementById(`code-${animation}`);
  if (codeBlock.style.display === "block") {
    codeBlock.style.display = "none";
  } else {
    codeBlock.style.display = "block";
  }
}
