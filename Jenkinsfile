pipeline {
    agent {
        docker { 
            image 'node:20.15.0-alpine3.20'
            // Definir el path para montar el volumen de Docker
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Initialize') {
            steps {
                // Definir la ruta al binario de Docker en las variables de entorno
                script {
                    def dockerHome = tool 'myDocker'
                    env.PATH = "${dockerHome}/bin:${env.PATH}"
                }
            }
        }
        stage('Test') {
            steps {
                // Ejecutar comandos de prueba, como verificar la versión de Node.js
                sh 'node --version'
            }
        }
    }
}
