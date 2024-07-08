pipeline {
  agent {
    docker {
			image 'node:18-alpine'
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
