<template>
    <div class="kontakty">

        

        <div class="kontakty__address">
            <h3>Kde nás najdete:</h3>
            
            <p>Nerudova 188 <br> Uherský Brod <br> 688 01</p>
            <p>Tel. obchod: +420 572 633 840 <br> Tel. servis: +420 572 632 576</p>
            <p>E-mail: izimcikova@seznam.cz</p>

            <h3>Otevírací doba:</h3>
            
            <p>Pondělí - pátek <br> 8:30-11:30, 12:30-16:00</p>

        </div>


        <div class="kontakty__map">
            <!-- <img src="@/assets/ub-mapa2.jpg" alt="mapa"> -->
            <iframe class="mapa" style="border:none" src="https://frame.mapy.cz/s/lopotevahu"  frameborder="0"></iframe>
        </div>

        <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit ratione eius nihil, veritatis autem labore soluta temporibus itaque, maiores quidem ut molestias commodi totam amet non voluptate dolore laudantium nulla. Molestiae dolore voluptates sint nostrum vero quod temporibus natus eveniet impedit iste eaque assumenda itaque officia, dolorum eos numquam voluptas accusamus minus vitae pariatur consectetur? Molestias delectus voluptatem ad consectetur perspiciatis, eos, modi sapiente enim dolore ipsam necessitatibus ea aliquid quasi voluptatum illo a hic sunt! Consequatur quas labore excepturi!</p> -->

        
    </div>
</template>

<script>
export default {

}
</script>

<style>


.kontakty__address {
    /* margin: 0 20px; */
}




.mapa {
    /* margin: 0 -30px; */
    
    
    width: 100%;
    height: 330px;
    
    
    

    /* <iframe style="border:none" src="https://frame.mapy.cz/s/lopotevahu" width="500" height="333" frameborder="0"></iframe> */
}

h3 {
    margin: 30px 20px;
}

p {
    margin: 20px;
}


</style>