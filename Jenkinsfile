pipeline {
  agent {
    docker {
			image 'timbru31/node-alpine-git:fermium'
    }
  }  
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
  post { 
		always { 
			cleanWs()
		}
	}
}
