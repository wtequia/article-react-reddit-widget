pipeline {
    agent {
        docker { image 'node:18.17.0-alpine3.18' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
