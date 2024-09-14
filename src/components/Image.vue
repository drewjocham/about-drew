<script setup lang="ts">

</script>

<template>

</template>

<style scoped>
/* CONTAINER */
.container{
    display: flex;
    justify-content: center;
    padding: 0.5rem;
}
/* CARD */
.card-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background: linear-gradient(to right,#11111b, #181825);
    border-radius: 0.75rem;
    box-shadow: 0.25rem 0.5rem 0.75rem 0.25rem #11111b;
}
.image, .descripcion{
    padding: 0.5rem;
}
/* IMAGE */
.image{
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-fluid{
    width: 90%;
    height: auto;
    border-radius: 100%;
}
/* DESCRIPTION */
h1{
    font-weight: 900;
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
}
h2{
    font-weight:600;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
p{
    font-weight: 400;
    font-size: 1.5rem;
}
/* ICONS */
.icons{
    display: flex;
    justify-content: center;
    align-items: center;
}
.icons a{
    color: #cdd6f4;
    font-size: 2.75rem;
    transition: .3s;
}
a:hover{
    transform: translateY(-5px) scale(1.1);
}
/* TOOLTIP */
.tooltip-text {
    position: absolute;
    top: -3rem;
    left: -50%;
    width: auto;
    color: #cdd6f4;
    font-size: 1.5rem;
    background-color: #313244;
    border-radius: 0.75rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
}
#fade {
    opacity: 0;
    transition: opacity 0.3s;
}
.hover-text:hover #fade { opacity: 1; }
.hover-text {
    position: relative;
    display: inline-block;
    margin: 0.5rem;
    text-align: center;
}

/* Styles for desktop screens (1024px and up) */
@media only screen and (min-width: 1024px) {
    .container{
        align-items: center;
        height: 100vh;
    }
    .card-container {
        flex-direction: row-reverse;
        width: 80%;
        align-items: center;
    }
    .image, .descripcion{
        padding: 1rem;
    }
    .img-fluid{
        width: 18rem;
    }
    .icons a{
        font-size: 3rem;
    }
}
</style>
