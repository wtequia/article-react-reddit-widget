pipeline {
    agent {
        docker {
            image 'docker:latest'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t myimage .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d --name mycontainer myimage'
            }
        }
    }
}
