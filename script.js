window.addEventListener('DOMContentLoaded', function() {
  var balloons = document.querySelectorAll('.balloon');

  // Mengacak urutan balon-balon
  var shuffledBalloons = Array.from(balloons).sort(() => 0.5 - Math.random());

  for (var i = 0; i < shuffledBalloons.length; i++) {
    var balloon = shuffledBalloons[i];
    var delay = i * 0.5; // Setiap balon memiliki delay 0.5 detik yang bertambah seiring dengan indeks balon
    balloon.style.animationDelay = delay + 's';

    // Menghasilkan warna acak untuk balon
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    balloon.style.setProperty('--color-red', red);
    balloon.style.setProperty('--color-green', green);
    balloon.style.setProperty('--color-blue', blue);
  }

  setTimeout(function() {
    for (var i = 0; i < balloons.length; i++) {
      var balloon = balloons[i];
      balloon.style.opacity = 0;
      balloon.style.transform = 'translateY(-100vh)';
    }
  }, 10000); // Mengatur waktu 10 detik sebelum balon menghilang
});
