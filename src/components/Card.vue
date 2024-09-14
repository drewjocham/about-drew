<script setup lang="ts">

</script>

<template>
    <div class="container mx-auto p-4 h-screen flex flex-col items-center justify-center relative">
        <div class="absolute top-2 left-2 p-2 flex space-x-2 z-10"> <button
            class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-1 px-3 text-sm rounded"
            @click="$i18n.locale = 'en'"
        >
            EN
        </button>
            <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 text-sm rounded"
                @click="$i18n.locale = 'de'"
            >
                DE
            </button>
        </div>
        <div class="relative  bg-opacity-70 backdrop-blur-sm rounded-lg shadow-md overflow-hidden w-full max-w-3xl">
            <div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 opacity-20 rounded-lg"></div>
            <div class="h-64 bg-gray-300 bg-opacity-50 relative flex items-center justify-center">
                <img :src="`drew.jpeg`" alt="Drew Jocham" class="rounded-full h-32 w-32 object-cover" />
            </div>
            <div class="p-8 relative z-10 flex flex-col h-full border-gray-50 bg-white">
                <h1 class="text-4xl text-gray-600 font-bold mb-4">Drew Jocham</h1>
                <h2 class="text-2xl text-gray-600 mb-6">Software Engineer</h2>
                <p class="text-black mb-auto">
                    {{ $t('msg') }}
                </p>
                <div class="flex space-x-6 mt-6">
                    <a
                        href="https://www.linkedin.com/in/drew-jocham-819297a6/"
                        class="text-black hover:text-blue-500"
                        target="_blank"
                    >
                        <span class="tooltip-text absolute invisible opacity-0 transition-opacity duration-300 bg-gray-800 bg-opacity-70
                        backdrop-blur-sm text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">LinkedIn</span>
                        <i class="bi bi-linkedin text-3xl"></i>
                    </a>
                    <a
                        href="https://github.com/drewjocham"
                        class="text-black hover:text-purple-700"
                        target="_blank"
                    >
                        <span class="tooltip-text absolute invisible opacity-0 transition-opacity duration-300 bg-gray-800 bg-opacity-70
                        backdrop-blur-sm text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">GitHub</span>
                        <i class="bi bi-github text-3xl"></i>
                    </a>
                    <a
                        href="https://x.com/drewjocham"
                        class="text-black hover:text-blue-400"
                        target="_blank"
                    >
                        <span class="tooltip-text absolute invisible opacity-0 transition-opacity duration-300 bg-gray-800 bg-opacity-70
                        backdrop-blur-sm text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">Twitter/X</span>
                        <i class="bi bi-twitter text-3xl"></i>
                    </a>
                    <!--
                    <a
                        href="https://your-resume-link.com"
                        class="hover:text-green-500"
                        target="_blank"
                    >
                        <span class="tooltip-text absolute invisible opacity-0 transition-opacity duration-300 bg-gray-800 bg-opacity-70 backdrop-blur-sm text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">Resume</span>
                        <i class="bi bi-file-earmark-arrow-down text-3xl"></i>
                    </a>
                    -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
