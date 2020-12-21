<template>
  <div class="akce">
        <div class="item__size">
            <h4>Pracka</h4>
            <img class="item" src="../assets/ImgW1.jpg" alt="">
            <div class="item__text">
                
                <p class="item__popis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui a sunt eaque sed molestiae porro sequi eveniet ullam harum ducimus, dicta voluptas nobis ipsa ab labore quaerat quasi voluptatum?</p>
                
            </div>
            <h5>8 000 Kč</h5>
            <h4>10 000 Kč</h4>
        </div>
        <div class="item__size">
            <h4>Pracka</h4>
            <img class="item" src="../assets/ImgW2.jpg" alt="">
            <div class="item__text">
                
                <p class="item__popis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui a sunt eaque sed molestiae porro sequi eveniet ullam harum ducimus, dicta voluptas nobis ipsa ab labore quaerat quasi voluptatum?</p>
                
            </div>
            <h4>10 000 Kč</h4>
        </div>
        <div class="item__size">
            <h4>Pracka</h4>
            <img class="item" src="../assets/ImgW3.jpg" alt="">
            <div class="item__text">
                
                <p class="item__popis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui a sunt eaque sed molestiae porro sequi eveniet ullam harum ducimus, dicta voluptas nobis ipsa ab labore quaerat quasi voluptatum?</p>
                
            </div>
            <h4>10 000 Kč</h4>
        </div>
        <div class="item__size">
            <h4>Pracka</h4>
            <img class="item" src="../assets/ImgW1.jpg" alt="">
            <div class="item__text">
                
                <p class="item__popis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui a sunt eaque sed molestiae porro sequi eveniet ullam harum ducimus, dicta voluptas nobis ipsa ab labore quaerat quasi voluptatum?</p>
                
            </div>
            <h5>8 000 Kč</h5>
            <h4>10 000 Kč</h4>
        </div>
        <div class="item__size">
            <h4>Pracka</h4>
            <img class="item" src="../assets/ImgW2.jpg" alt="">
            <div class="item__text">
                
                <p class="item__popis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui a sunt eaque sed molestiae porro sequi eveniet ullam harum ducimus, dicta voluptas nobis ipsa ab labore quaerat quasi voluptatum?</p>
                
            </div>
            <h4>10 000 Kč</h4>
        </div>
        <div class="item__size">
            <h4>Pracka</h4>
            <img class="item" src="../assets/ImgW3.jpg" alt="">
            <div class="item__text">
                
                <p class="item__popis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui a sunt eaque sed molestiae porro sequi eveniet ullam harum ducimus, dicta voluptas nobis ipsa ab labore quaerat quasi voluptatum?</p>
                
            </div>
            <h4>10 000 Kč</h4>
        </div>

        
        
        

       
  </div>
</template>

<script>
export default {

}
</script>

<style>
.akce {
    display: flex;
    flex-direction: column;
    
}

.item__size img{
    display: flex;
    width: auto;
    height: 300px;
    
    
    
    object-fit: contain;
    margin: 20px auto;
    
   
    
    
   
    

}

    
    

.item__size{
    /* border: brown 1px solid; */
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item__text{
    padding: 10px;

}

.item__popis {
    font-size: 14px;
    margin: 0 20px ;
}

h4 {
    color: rgb(218, 37, 28) ;
    margin: 20px 30px;
}
h5 {
    text-decoration: line-through;
    margin: 20px 30px;
}





@media (min-width: 750px) {
    .akce {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .item__size {
        width: 29.5%;
    }

}
</style>