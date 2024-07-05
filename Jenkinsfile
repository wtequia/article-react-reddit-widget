pipeline {
     agent {
        docker {
		    image 'timbru31/node-alpine-git:fermium'
			registryCredentialsId 'f38521ce-4a24-4881-96f7-8a1d22a7f8fa'
        }
      }  
    stages {
        stage('Print Message') {
            steps {
                echo 'Hola, este es un mensaje de Jenkins!'
            }
        }
    }
}
