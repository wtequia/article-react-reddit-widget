pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clonar el repositorio una vez
                git url: 'https://github.com/wtequia/article-react-reddit-widget.git'
            }
        }
        stage('Build and Test') {
            steps {
                // Realizar pasos de compilación y pruebas
                sh 'make'
                sh 'make test'
            }
        }
        stage('Deploy') {
            steps {
                // Desplegar la aplicación
                sh 'make deploy'
            }
        }
    }
}
