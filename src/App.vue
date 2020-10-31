

<template>
  <div id="app">
    <body>
      <div class="body2">
        <div class="main-content">
            <div class="logo">
                <img src="./assets/ELDOM-logo.jpg" alt="ELDOM-logos">
            </div>
            <ul class="menu">
                
                <li @click="activeBtn = 'produkty'" :class="{active: activeBtn === 'produkty'}"><router-link to="/produkty" >Prodej</router-link></li>
                <li @click="activeBtn = 'servis'" :class="{active: activeBtn === 'servis'}"><router-link to="/servis">Servis</router-link></li>
                <li @click="activeBtn = 'kontakty'" :class="{active: activeBtn === 'kontakty'}"><router-link to="/kontakty">Kontakty</router-link></li>
                
                
            </ul>

            <router-view/>
        </div>

          <div class="footer">
            <p class="copywright">© 2020</p>

          </div>
          
          
      
      </div>

      

      

    </body>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeBtn: ''
    }
  }

 
  
}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700&display=swap&subset=latin-ext");

* {
 box-sizing: border-box;
 margin: 0 5px;
 padding: 0;
}


.menu {
    display: flex;
    list-style: none;
    justify-content: space-around;
    padding: 0 0 20px 0;
    margin: 5px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
    border-bottom: rgb(218, 37, 28) 1px solid;
    
    
    
   
     
}  

a {
  text-decoration: none;
  color: black;
  transition: 0.5s;
}

a:hover {
  color:rgb(218, 37, 28);
}

.logo img {
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

body {
    
    
    font-family: 'Roboto Mono', monospace;
    /* width: auto; */
    
}

 html {
  height: 100%;
  
 } 

body {
  height: 100vh; 
  /* tohle natahuje to pozadi */
}


.body2 {
    background-color: white;
    margin: 0 ; 
    padding: 0;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    
    /* musim nejak vyresit prtekani z body2 */
    
    
}

.main-content {
  /* overflow: auto; */
  /* padding-bottom: 58px; */
  flex: 1;
  background-color: white;
}


.footer {
  border-top: rgb(218, 37, 28) 1px solid;
  background-color: white;
  text-align: center;
  /* padding: 10px 5px; */

   
}

.active a {
  color: rgb(218, 37, 28);
}

.copywright {
  background-color: white;
}

@media (min-width: 750px) {
  body {
    background: url(./assets/spotrebice_light.jpg) repeat center ;
    
  }


  .body2 {
    width: 750px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 30px;
    
    
    
    
  }
}



</style>
