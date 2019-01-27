const inputs = document.querySelectorAll('input');

function handleUpdate(e) {
  const suffix = e.target.dataset.metric || '';
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
}

inputs.forEach(input => {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
});