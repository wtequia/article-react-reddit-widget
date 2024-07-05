pipeline {
    agent any

    stages {
        stage('Preparation') {
            steps {
                script {
                    // Instalar make si no está presente
                    sh 'apt-get update && apt-get install -y make'
                }
            }
        }
        stage('Build') {
            steps {
                sh 'make'
            }
        }
        stage('Deploy') {
            steps {
                sh 'make deploy'
            }
        }
    }
}
