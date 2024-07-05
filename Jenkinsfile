pipeline {
    agent {
        docker {
            image 'docker:19.03.12-dind' // Imagen Docker que incluye Docker
            args '--privileged -v /var/run/docker.sock:/var/run/docker.sock' // Opciones adicionales para DinD
            registryCredentialsId 'f38521ce-4a24-4881-96f7-8a1d22a7f8fa'
        }
    }

    stages {
        stage('Setup Docker') {
            steps {
                sh 'dockerd-entrypoint.sh &'
                sh 'sleep 10' // Esperar a que el daemon Docker se inicie
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
            cleanWs() // Limpia el workspace después de que el pipeline termine, sin importar si tuvo éxito o falló
        }
        success {
            echo 'El proceso se completó exitosamente!'
        }
        failure {
            echo 'Hubo errores durante la ejecución del pipeline.'
        }
    }
}
