pipeline {
  agent {
    docker {
			image 'timbru31/node-alpine-git:fermium'
			registryCredentialsId 'f38521ce-4a24-4881-96f7-8a1d22a7f8fa'
    }
  }  

    stages {
        stage('Print Message') {
            steps {
                echo 'Hola, este es un mensaje de Jenkins!'
            }
        }
    }

   post {
        always {
            script {
                // Envolviendo cleanWs en un bloque node dentro del script para proporcionar el contexto adecuado
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
