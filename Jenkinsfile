pipeline {
    agent any

    stages {
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
