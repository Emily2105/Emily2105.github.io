document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('getRoutineBtn');
  if (!button) return;

  button.addEventListener('click', function () {
    const skinType = document.getElementById('skinType').value;
    const skinGoal = document.getElementById('skinGoal').value;

    // this code will show the results when you pick what your skincare goals are, the const code helps the code remain constant//

    const routines = {
      oily: {
        hydration: [
          "1. Cleanse with foam cleanser",
          "2. Apply hydrating toner",
          "3. Use hyaluronic acid serum",
          "4. Oil-free moisturizer",
          "5. Gel-based sunscreen"
        ],
        brightening: [
          "1. Cleanse with tea tree cleanser",
          "2. Brightening toner",
          "3. Vitamin C serum",
          "4. Light gel moisturizer",
          "5. Sunscreen SPF 50"
        ],
        acne: [
          "1. Salicylic acid cleanser",
          "2. Acne toner with BHA",
          "3. Niacinamide serum",
          "4. Lightweight non-comedogenic moisturizer",
          "5. Mineral sunscreen"
        ],
        antiaging: [
          "1. Gentle cleanser",
          "2. Anti-aging toner",
          "3. Retinol serum",
          "4. Oil-free moisturizer",
          "5. Broad-spectrum SPF"
        ]
      },
      dry: {
        hydration: [
          "1. Creamy cleanser",
          "2. Hydrating toner",
          "3. Hyaluronic acid serum",
          "4. Deep moisturizer",
          "5. Moisturizing sunscreen"
        ],
        brightening: [
          "1. Gentle milk cleanser",
          "2. Brightening toner",
          "3. Vitamin C serum",
          "4. Rich cream",
          "5. SPF with moisturizer"
        ],
        acne: [
          "1. Mild cleanser",
          "2. Acne toner",
          "3. Spot treatment",
          "4. Soothing moisturizer",
          "5. Sunscreen for dry skin"
        ],
        antiaging: [
          "1. Anti-aging cleanser",
          "2. Hydrating toner",
          "3. Peptide serum",
          "4. Night cream",
          "5. SPF 50 with antioxidants"
        ]
      },
      combination: {
        hydration: [
          "1. Balanced cleanser",
          "2. Toner",
          "3. Hydrating serum",
          "4. Gel moisturizer",
          "5. Sunscreen"
        ],
        brightening: [
          "1. Cleanser",
          "2. Brightening toner",
          "3. Vitamin C serum",
          "4. Moisturizer",
          "5. SPF"
        ],
        acne: [
          "1. Salicylic acid cleanser",
          "2. BHA toner",
          "3. Niacinamide serum",
          "4. Lightweight cream",
          "5. Oil-free SPF"
        ],
        antiaging: [
          "1. Cleanser",
          "2. Toner",
          "3. Retinol",
          "4. Moisturizer",
          "5. SPF 50"
        ]
      },
      sensitive: {
        hydration: [
          "1. Gentle cleanser",
          "2. Calming toner",
          "3. Hyaluronic serum",
          "4. Barrier cream",
          "5. Physical sunscreen"
        ],
        brightening: [
          "1. Fragrance-free cleanser",
          "2. Mild toner",
          "3. Brightening essence",
          "4. Sensitive skin cream",
          "5. SPF for sensitive skin"
        ],
        acne: [
          "1. Non-foaming cleanser",
          "2. Alcohol-free toner",
          "3. Spot corrector",
          "4. Soothing lotion",
          "5. Mineral sunscreen"
        ],
        antiaging: [
          "1. Cleanser",
          "2. Calming toner",
          "3. Gentle retinol",
          "4. Nourishing cream",
          "5. SPF 50"
        ]
      }
    };

    const routine = routines[skinType][skinGoal];
    document.getElementById('routine-output').innerHTML = routine.join('<br>');

    // ✅ Show image on the website
    const imgMap = {
      hydration: "images/hydration.jpg",
      brightening: "images/brightening.jpg",
      acne: "images/acne.jpg",
      antiaging: "images/antiaging.jpg"
    };
    const imageElement = document.getElementById('routine-image');
    imageElement.src = imgMap[skinGoal];
    imageElement.alt = skinGoal + ' routine image';
    imageElement.style.display = 'block';
  });
});
