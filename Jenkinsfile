pipeline {
    agent {
        docker {
            image 'node:14'
            args '-u root'
        }
    }
    environment {
        CHROMATIC_PROJECT_TOKEN = credentials('chromatic_project_token')
    }
    stages {
        stage('Instalación con npm') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build y despliegue en Chromatic') {
            steps {
                sh 'npm run build'
                sh 'npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN'
            }
        }
    }
    post {
        success {
            cleanWs() // Limpia el workspace en caso de éxito
            echo 'El proceso se completó exitosamente!'
        }
        failure {
            cleanWs() // Limpia el workspace en caso de falla
            echo 'Hubo errores durante la ejecución del pipeline.'
        }
    }
}
