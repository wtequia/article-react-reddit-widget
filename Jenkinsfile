pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Aquí puedes agregar tus pasos de compilación, por ejemplo:
                 sh 'make'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Aquí puedes agregar tus pasos de prueba, por ejemplo:
                 sh 'make test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Aquí puedes agregar tus pasos de despliegue, por ejemplo:
                 sh 'make deploy'
            }
        }
    }
}
