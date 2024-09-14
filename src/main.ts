import { createApp } from 'vue'
import './style.css'
import './index.css'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const i18n = createI18n({
    locale: 'en',
    allowComposition: true,
    messages: {
        en: {
            msg: 'I am a software engineer with deep expertise in Java, Spring Boot, SQL, Docker, Kubernetes, GCP, Go, Python, and Natural Language Processing (NLP) machine learning models.\n' +
                'I possess extensive hands-on experience leveraging a diverse range of technologies, including NGINX, Google Cloud, Varnish, Vue.js, Angular, Spring Boot, FlutterFlow, RabbitMQ, Pub/Sub, and gRPC.\n' +
                'My strong background in management coupled with my ability to swiftly acquire new technology stacks empowers me to excel in dynamic environments.\n' +
                'I am a confident communicator and collaborative team player with a proven track record of success in contributing to high-performing technical teams!'
        },
        de: {
            msg: 'Ich bin ein Software-Ingenieur mit fundierten Kenntnissen in Java, Spring Boot, SQL, Docker, Kubernetes, GCP, Go, Python und Natural Language Processing (NLP) machine learning models. ' +
                'Ich verfüge über umfangreiche praktische Erfahrungen mit einer Vielzahl von Technologien, darunter NGINX, Google Cloud, Varnish, Vue.js, Angular, Spring Boot, FlutterFlow, RabbitMQ, Pub/Sub und gRPC. ' +
                'Meine ausgeprägte Managementerfahrung und meine Fähigkeit, mir schnell neue Technologien anzueignen, befähigen mich, in dynamischen Umgebungen zu brillieren. ' +
                'Ich bin ein selbstbewusster Kommunikator und kooperativer Teamplayer mit einer nachgewiesenen Erfolgsbilanz bei der Mitarbeit in leistungsstarken technischen Teams!'
        }
    }
})

createApp(App).use(i18n).mount('#app')
