(() => {
  let current = 1;
  let selectedName = 'flashshopping-demo.mp4';
  const screens = [...document.querySelectorAll('.demo-screen')];
  const steps = [...document.querySelectorAll('.step')];
  const progressText = document.getElementById('progressText');

  function go(step) {
    current = Math.max(1, Math.min(5, step));
    screens.forEach(el => el.classList.toggle('active', Number(el.dataset.screen) === current));
    steps.forEach(el => el.classList.toggle('active', Number(el.dataset.step) === current));
    progressText.textContent = `Step ${current} of 5`;
    window.scrollTo({top: document.querySelector('.demo-shell').offsetTop - 20, behavior: 'smooth'});
  }

  steps.forEach(btn => btn.addEventListener('click', () => go(Number(btn.dataset.step))));
  document.getElementById('connectBtn').addEventListener('click', () => setTimeout(() => go(2), 450));

  const input = document.getElementById('videoInput');
  function showFile(name, meta) {
    selectedName = name;
    document.getElementById('fileName').textContent = name;
    document.getElementById('fileMeta').textContent = meta;
    document.getElementById('selectedFile').classList.remove('hidden');
    document.getElementById('reviewFile').textContent = name;
  }
  input.addEventListener('change', () => {
    if (!input.files.length) return;
    const f = input.files[0];
    showFile(f.name, `${(f.size / 1024 / 1024).toFixed(2)} MB · ${f.type || 'video file'}`);
  });
  document.getElementById('useDemoBtn').addEventListener('click', () => { showFile('flashshopping-demo.mp4', 'Prepared sandbox demo asset · 9:16 vertical'); setTimeout(() => go(3), 400); });
  document.getElementById('detailsBtn').addEventListener('click', () => {
    if (!document.getElementById('consent').checked) { alert('Please confirm your rights and consent before continuing.'); return; }
    const caption = document.getElementById('caption').value.trim();
    const privacy = document.getElementById('privacy');
    document.getElementById('reviewCaption').textContent = caption || '(No caption)';
    document.getElementById('reviewPrivacy').textContent = privacy.options[privacy.selectedIndex].text;
    document.getElementById('reviewFile').textContent = selectedName;
    go(4);
  });
  document.getElementById('publishBtn').addEventListener('click', () => {
    go(5);
    document.getElementById('publishProgress').classList.remove('hidden');
    document.getElementById('resultCard').classList.add('hidden');
    setTimeout(() => {
      document.getElementById('publishProgress').classList.add('hidden');
      document.getElementById('resultCard').classList.remove('hidden');
    }, 1800);
  });
  document.getElementById('restartBtn').addEventListener('click', () => go(1));
})();

// Automatic walkthrough used only to record the reviewer demonstration video.
if (new URLSearchParams(location.search).get('autoplay') === '1') {
  const click = id => document.getElementById(id)?.click();
  setTimeout(() => click('connectBtn'), 2500);
  setTimeout(() => click('useDemoBtn'), 6500);
  setTimeout(() => { document.getElementById('consent').checked = true; }, 9500);
  setTimeout(() => click('detailsBtn'), 11500);
  setTimeout(() => click('publishBtn'), 17000);
}
