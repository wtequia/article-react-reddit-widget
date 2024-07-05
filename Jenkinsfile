pipeline {
    agent {
        docker {
            image 'timbru31/node-alpine-git:fermium' // Imagen Docker personalizada
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Montar el socket Docker del host
            registryCredentialsId 'f38521ce-4a24-4881-96f7-8a1d22a7f8fa'
        }
    }

    stages {
        stage('Install Docker CLI') {
            steps {
                sh '''
                    apk update
                    apk add docker
                '''
            }
        }
        stage('Verify Docker Installation') {
            steps {
                sh 'docker --version' // Verifica que Docker CLI está instalado
            }
        }
        stage('Print Message') {
            steps {
                echo 'Hola, este es un mensaje de Jenkins!'
            }
        }
    }

    post {
        always {
            script {
                // Envolviendo cleanWs en un bloque node para proporcionar el contexto adecuado
                node {
                    cleanWs() // Limpia el workspace después de que el pipeline termine, sin importar si tuvo éxito o falló
                }
            }
        }
        success {
            echo 'El proceso se completó exitosamente!'
        }
        failure {
            echo 'Hubo errores durante la ejecución del pipeline.'
        }
    }
}
