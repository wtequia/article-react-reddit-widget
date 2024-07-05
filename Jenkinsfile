pipeline {
    agent any

    stages {
        stage('Print Message') {
            steps {
                echo 'Hola, este es un mensaje de Jenkins!'
            }
        }
    }

  post { 
		always { 
			cleanWs()
		}
	}
}
