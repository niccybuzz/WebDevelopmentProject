/**
 * Takes a card object and generates a "Basic Stage" html/css card from the data 
 */

function createTrainerCard(card) {
    let newDiv = document.createElement("div");
    let gridDiv = document.getElementById("gridDiv");
    newDiv.classList.add(
      "flex",
      "flex-col",
      "bg-white",
      "border-8",
      "border-yellow-300",
      "h-96",
      "w-64",
      "pb-2",
      "px-1",
      "m-10",
  
      "box-border",
      "rounded",
      "relative"
    );
    newDiv.style.backgroundImage = `url('images/cardBackgrounds/TrainerBackground.png')`;
  
    let html = `
  
  
    <!-- Stage -->
    <div class="text-xxxs w-11/12">${card.category}</div>
  
    <!-- Pokemon name, hp, lvl -->
    <div class="flex items-baseline gap-2 p-0 m-0">
      <h1 class="flex-grow font-semibold">${card.name}</h1>
      <h1 class="self-end text-red-700 font-semibold">60 HP</h1>
      <img class="h-4 w-4 self-center" src="${card.cardType}" />
    </div>
  
    <!-- Card image -->
    <img
      class="h-40 border-4 border-amber-400 self-center"
      src="${card.image}"
    />
  
    <!-- Height/weight description -->
    <div class="border-2 flex-nowrap bg-amber-400 w-5/6 self-center m">
      <p class="italic text-xxxs text-center">
        ${card.height_weight}
      </p>
    </div>
  
    <!-- Abilities -->
    <!-- Ability 1 -->
    
    <div
      class="flex flex-grow justify-between items-center border-b border-black p-2 max-h-14"
    >
      <p class="text-xxxs leading-tight">
      <img class="h-4 w-4" src="${card.ability1Type}">
      </p>
      <p class="text-xxxs leading-tight">
      <span class="font-bold text-xxs">${card.ability1Name}</span>
      ${card.ability1Descr}
      
    </p>
      <h1 class="self-end">${card.ability1Dmg}</h1>
    </div>
  
    <!-- Ability 2 -->
    <div
      class="flex flex-grow flex-nowrap justify-between items-center border-b border-black p-2 max-h-20 min-h-10"
    >
      <!-- Ability cost -->
      <img class="h-4 w-4" src="${card.ability2Type}">
  
      <!-- Container for ability name and description -->
      <div class="mx-4">
        <p class="text-xxxs leading-tight">
          <span class="font-bold text-xxs">${card.ability2Name}</span>
          ${card.ability2Descr}        
        </p>
      </div>
  
      <!-- Ability Damage -->
      <h1>${card.ability2Dmg}</h1>
    </div>
  
    <!-- weakness/resistance/retreat cost -->
    <div class="flex justify-between">
      <div class="text-xxxs flex flex-col items-center">
        weakness
        <img class="inline w-3 h-3" src="${card.weaknessType}" />
      </div>
      <div class="text-xxxs flex flex-col items-center">resistance</div>
  `
  if (card.resistanceType) {
    html += `
    <img class="inline w-3 h-3" src="${card.resistanceType}" />
    `
  }
      
  html += `
  
      <div class="text-xxxs flex flex-col items-center">
        retreat cost
        <img class="inline w-3 h-3" src="${card.retreatType}" />
      </div>
    </div>
  
    <!-- Bottom description -->
    <div
      class="border border-amber-400 flex-nowrap bg-transparent self-center m-1 mb-1 max-h-6"
    >
      <p class="italic text-xxxs text-center">
        ${card.descr}
      </p>
    </div>
  
    <!-- Fine print -->
    <div class="flex justify-between max-h-2 absolute inset-x-0 bottom-0">
      <div class="text-xxxxs font-bold flex flex-col items-center">
        ${card.illustrator}
      </div>
      <div class="text-xxxxs flex flex-col items-center">
      ${card.fineprint}
      </div>
      <div class="text-xxxxs font-bold flex flex-col items-center">
        ${card.cardNumber}/${card.nameOfSet}
      </div>
      <div>
        
      </div>
    </div>
  
  `;
    newDiv.innerHTML = html;
    gridDiv.appendChild(newDiv);
  }
  