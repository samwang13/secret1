<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Valentine's Day</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: linear-gradient(135deg, #ff7eb3, #ff758c);
      font-family: 'Arial', sans-serif;
      overflow: hidden;
      position: relative;
    }

    h1 {
      color: white;
      font-size: 2.5rem;
      text-align: center;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      padding: 0 20px;
    }

    .buttons {
      display: flex;
      gap: 20px;
      margin-top: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }

    button {
      padding: 20px 40px;
      font-size: 1.5rem;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    #yesButton {
      background-color: #ff4d4d;
      color: white;
    }

    #noButton {
      background-color: #ffcccb;
      color: black;
      position: absolute;
    }

    .balloon {
      position: absolute;
      width: 60px;
      height: 80px;
      background: radial-gradient(circle, #ff7eb3, #ff4d4d);
      border-radius: 50%;
      animation: float 6s infinite ease-in-out;
    }

    .balloon::before {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      width: 2px;
      height: 40px;
      background: #ffcccb;
    }

    .heart {
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: #ff4d4d;
      transform: rotate(-45deg);
      animation: float 5s infinite ease-in-out;
    }

    .heart::before,
    .heart::after {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: #ff4d4d;
      border-radius: 50%;
    }

    .heart::before {
      top: -7.5px;
      left: 0;
    }

    .heart::after {
      top: 0;
      left: 7.5px;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 2rem;
      }

      button {
        padding: 15px 30px;
        font-size: 1.2rem;
      }

      .balloon {
        width: 40px;
        height: 60px;
      }

      .balloon::before {
        height: 30px;
      }

      .heart {
        width: 10px;
        height: 10px;
      }

      .heart::before,
      .heart::after {
        width: 10px;
        height: 10px;
      }
    }
  </style>
</head>
<body>
  <h1>Will you be my Valentine?</h1>
  <div class="buttons">
    <button id="yesButton">Yes</button>
    <button id="noButton">No</button>
  </div>

  <!-- Balloons -->
  <div class="balloon" style="top: 10%; left: 10%;"></div>
  <div class="balloon" style="top: 20%; left: 50%;"></div>
  <div class="balloon" style="top: 5%; left: 80%;"></div>

  <!-- Hearts -->
  <div class="heart" style="top: 30%; left: 20%;"></div>
  <div class="heart" style="top: 40%; left: 70%;"></div>
  <div class="heart" style="top: 60%; left: 40%;"></div>

  <script>
    const noButton = document.getElementById('noButton');

    // Function to move the "No" button randomly
    const moveNoButton = () => {
      const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
      const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
      noButton.style.left = `${x}px`;
      noButton.style.top = `${y}px`;
    };

    // Add event listeners for both mouse and touch events
    noButton.addEventListener('mouseover', moveNoButton);
    noButton.addEventListener('touchstart', moveNoButton);

    const yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', () => {
      alert("Yay! You made me the happiest! 💖");
    });
  </script>
</body>
</html>
