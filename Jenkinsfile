pipeline {
  agent {
    docker {
			image 'timbru31/node-alpine-git:fermium'
			registryCredentialsId 'DOCKER_ID'
    }
  }  
  stages {
		stage('Build') {
			steps {
				sh 'cd ee-components && npm install --no-save'
				sh 'cd ee-components && npm run prepare'
			}
		}
		stage('Build chromatic') {
			steps {
				sh 'cd ee-components && npm run chromatic'
			}
		}
  }
  post { 
		always { 
			cleanWs()
		}
	}
}
