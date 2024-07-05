pipeline {
    agent {
        docker {
            image 'timbru31/node-alpine-git:fermium'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
            registryCredentialsId 'f38521ce-4a24-4881-96f7-8a1d22a7f8fa'
        }
    }

    environment {
        GITHUB_CREDENTIALS = credentials('token_personal_wtequia')
    }

    stages {
        stage('Example Stage') {
            steps {
                echo 'Hola, este es un mensaje de Jenkins!'
            }
        }
    }

    post {
        always {
            node('docker') {
                cleanWs() // Limpia el workspace después de que el pipeline termine, sin importar si tuvo éxito o falló
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
