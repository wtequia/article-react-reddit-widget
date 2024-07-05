pipeline {
    agent {
        docker {
            // Aquí especifica la imagen Docker que tiene Node.js y Docker preinstalados si es posible
            image 'node:18.17.0-alpine3.18'
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Esto podría ser necesario para que Docker funcione dentro del contenedor Docker
        }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version' // Ejemplo de comandos dentro del contenedor Docker
            }
        }
    }
}
