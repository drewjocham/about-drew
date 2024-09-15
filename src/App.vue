<script setup lang="ts">
import Card from "./components/Card.vue";
</script>

<template>
    <div class="">
        <card/>
        <div class="container mx-auto p-4">
            <ul class="grid grid-cols-2 gap-4">
                <li class="flex items-center justify-start">
                    <img :src="`go.png`" alt="GoLang Icon" class="w-8 h-8 mr-2">
                    GoLang
                </li>
                <li class="flex items-center justify-start">
                    <img :src="`java.png`" alt="Java Icon" class="w-8 h-8 mr-2">
                    Java
                </li>
                <li class="flex items-center justify-start">
                    <img :src="`python.png`" alt="Python Icon" class="w-8 h-8 mr-2">
                    Python
                </li>
                <li class="flex items-center justify-start">
                    <img :src="`spring.png`" alt="Spring Boot Icon" class="w-8 h-8 mr-2">
                    Spring Boot
                </li>
                <li class="flex items-center justify-start">
                    <img :src="`gcp.png`" alt="GCP Icon" class="w-8 h-8 mr-2">
                    GCP
                </li>
                <li class="flex items-center justify-start">
                    <img :src="`vue.png`" alt="Vue 3 Icon" class="w-8 h-8 mr-2">
                    Vue 3
                </li>
                <li class="flex items-center justify-start">
                    <img :src="`kafka.png`" alt="Kafka Icon" class="w-8 h-8 mr-2">
                    Kafka
                </li>
                <li class="flex items-center justify-start">
                    <img :src="`spark.png`" alt="Spark Icon" class="w-8 h-8 mr-2">
                    Spark
                </li>
                <li class="flex items-center justify-start">
                    <img :src="`airflow.png`" alt="Airflow Icon" class="w-8 h-8 mr-2">
                    Airflow
                </li>
                <li class="flex items-center justify-start">
                    <img :src="`search.png`" alt="Search Icon" class="w-8 h-8 mr-2">
                    Elastic Search
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>
