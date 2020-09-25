<template>
  <div class="produkty">
      <p class="produkty__text">Nabízíme kompletní služby v oblasti prodeje bílé techniky, domácích spotřebičů vybraných značek. Také nabízíme prodej náhradních dílů.
      
      <br><br>
      Ke spotřebičům u nás zakoupeným poskytujeme montáž, zapojení a dopravu do 20 km zdarma.
        <br><br>
      Prodáváme značky Miele, AEG, Electrolux, Beko, Romo, Mora, Liebherr, Bravo, KitchenAid.
      </p>
      <div class="img-logos">
        <div class="logos_short">
          <img class="foto" src="../assets/aeg_logo__.svg" alt="logo AEG">
          <img class="foto" src="../assets/beko-logo__.svg" alt="logo AEG">
          <img class="foto" src="../assets/bravo_logo__.svg" alt="logo AEG">
        </div>
        <div class="logos_short">
          <img class="foto" src="../assets/logo_mora__.svg" alt="logo AEG">
          <img class="foto_long" src="../assets/Miele_logo_.svg" alt="logo AEG">
          <img class="foto" src="../assets/Logo_Romo__.svg" alt="logo AEG">
          
        </div>
        <div class="logos_short">
          <img class="foto_long" src="../assets/liebherr_logo_.svg" alt="logo AEG">
          <img class="foto_long" src="../assets/kitchenaid_logo_.svg" alt="logo AEG">
          <img class="foto_long" src="../assets/electrolux-logo_.svg" alt="logo AEG">
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.produkty__text {
  margin: 50px 20px;
}

.logos_short {
  justify-items: center;
  display: flex;
  justify-content: space-around;
  
}

.foto {
  width: 50px;

  
}

.foto_long {
  width: 80px;
}

.img-logos {
  margin-bottom: 40px;
}
  
@media (min-width: 540px)  {
  .foto {
  width: 100px;
  }
  .logos_short {
    
    justify-content: space-between;
    
    }
  .foto_long {
    width: 120px;
  }
}

</style>