<script>
import backgroundUrl from '~/public/images/flat-automats.jpg'
import automatsImageUrl from '~/public/images/flat-automats.jpg'
  export default {
    data() {
      return { backgroundUrl, automatsImageUrl, elementWidth: 'w-[768px]' }
    },
    methods: {
      updateWidth() {
        if (window.innerWidth > 1220) {
          this.elementWidth = 'w-[768px]';
        } else {
          this.elementWidth = 'w-full';
        }
 
      }
    },
    mounted() {
      this.updateWidth();
      window.addEventListener('resize', this.updateWidth); // Attach listener
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.updateWidth); // Cleanup listener
    },
  }
</script>

<style>
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
  }
  .ad-100 {
    animation-duration: 1s;
  }

  .ad-300 {
    animation-duration: 2s;
  }
</style>

<template>
  <div class="w-full m-0 p-0 bg-bottom bg-repeat bg-contain flex items-center justify-center h-[60vh] max-h-[460px] fixed z-10" :style="{ backgroundImage: `url(${backgroundUrl})`, height: '60vh', maxHeight: '460px', }">
    <div class="fadeInDown ad-100 mx-4 p-4 rounded-lg shadow-lg backdrop-blur-sm container text-center break-normal max-w-6xl">
      <p class="text-green-800 font-extrabold text-3xl md:text-5xl mb-2">
        Schnapperino
      </p>
      <p class="text-xl md:text-2xl text-gray-600">Ihr neuer Checkpoint</p>
    </div>
  </div>
  <div class="px-4 md:px-0 z-20 relative flex justify-center bg-[#f4f3f0] mt-[380px]">
    <div class="mx-6 max-w-6xl">
      <div class=" w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
      <div class="flex h-full bg-white rounded overflow-hidden flex-wrapm my-12 shadow-2xl max-sm:flex-col-reverse">
        <div class="w-full md:w-2/3 rounded-t">
          <iframe :class="elementWidth" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.748114930348!2d8.546126543667361!3d49.319053639144045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797b9c3f56eb03d%3A0x41c74bd0f90faf27!2sOb.%20Hauptstra%C3%9Fe%202%2C%2068766%20Hockenheim!5e0!3m2!1sde!2sde!4v1742235120471!5m2!1sde!2sde" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <p class="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">Willkommen!</p>
            <div class="w-full font-bold text-xl text-gray-900 px-6">Unser neuer 24/7-Store in Hockenheim ist jetzt geöffnet!</div>
            <p class="text-gray-800 text-base px-6 mb-5">Wir freuen uns, Ihnen rund um die Uhr eine riesige Auswahl an Snacks und Getränken anbieten zu können. Egal, ob Tag oder Nacht - bei uns finden Sie immer genau das, worauf Sie gerade Lust haben.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfX_TgwpCQlkSys3Z11OErICYtcAxRY2P9goFTZMu_kwOZJPw/viewform" class="hover:underline text-green">
              <div class="flex justify-center flex-col items-center px-6 mt-6  max-sm:mb-6">
                <!-- <NuxtImg src="/images/qr.png" class="w-[100px] h-[100px] mb-5" /> -->
                <h5 class="bold text-green text-[22px]">Helfen Sie uns, besser zu werden</h5>
                <h5 class="bold text-green text-[22px]">nehmen Sie an der Umfrage teil!</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-between bg-[#f4f3f0] mt-6">
        <Card
          :first="true"
          title="Löschen Sie Ihren Durst mit Genuss!"
          subTitle="GETRÄNKE FÜR JEDEN GESCHMACK"
          text="Wir bieten eine breite Auswahl an Getränken für jeden Geschmack: erfrischende Limonaden, belebender Kaffee, aromatischer Tee, natürliche Säfte und energiegeladene Cocktails. Jeder Schluck bringt Frische und gute Laune!"
          img="/images/energy-drinks.jpg"
        />
        <Card
          title="Wir kümmern uns um jedes Produkt!"
          subTitle="QUALITÄT IN JEDEM SCHRITT"
          text="Unsere Snacks und Erfrischungsgetränke werden unter optimalen Bedingungen gelagert, um ihre Frische und ihren Geschmack zu bewahren. Strenge Kontrollen in jeder Phase – von der Lieferung bis zum Verkauf – garantieren höchste Qualität für unsere Kunden."
          img="/images/lager-night.jpg"
        />
        <Card
          :last="true"
          title="Bei uns wird es nie langweilig!"
          subTitle="IMMER NEUE AUSWAHL"
          text="Unser Sortiment an Snacks und Erfrischungsgetränken wird regelmäßig erweitert, damit Sie immer etwas Neues entdecken können. Saisonale Spezialitäten, trendige Neuheiten und bewährte Klassiker – bei uns gibt es für jeden Geschmack etwas Passendes!"
          img="/images/trending.jpg"
        />
      </div>
      </div>
      <div class="bg-blue rounded mt-8 p-4 md:p-24 text-center">
        <h2 class="font-bold break-normal text-2xl md:text-4xl">Bleiben Sie immer auf dem Laufenden über neue Getränke und Snacks</h2>
        <h3 class="break-normal font-normal text-black text-base md:text-xl">Erfahren Sie von unseren neuesten Lieferungen über unseren Newsletter!</h3>
        <div class="w-full text-center pt-4">
          <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
            <input type="email" placeholder="e-mail@beispiel.de" class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none">
            <button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-primary text-white text-base font-semibold tracking-wider uppercase py-3 rounded shadow hover:bg-green-400">Abonnieren</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>