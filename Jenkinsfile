pipeline {
  agent {
    docker {
			image 'timbru31/node-alpine-git:fermium'
	   		registryCredentialsId 'DOCKER_ID'
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
