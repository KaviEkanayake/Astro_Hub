const fontSizeSelect = document.getElementById('font-size-select');

fontSizeSelect.addEventListener('change', () => {
  const fontSize = fontSizeSelect.value;
  document.body.style.fontSize = `${fontSize}px`;
});

const colorSchemeSelect = document.getElementById('color-scheme-select');
const body = document.body;

colorSchemeSelect.addEventListener('change', () => {
  const colorScheme = colorSchemeSelect.value;
  body.className = colorScheme;
});

