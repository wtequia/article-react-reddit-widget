pipeline {
  agent {
    docker {
      image 'node:18-alpine' // Especifica la imagen de Docker a usar
      registryCredentialsId 'DOCKER_ID' // Especifica las credenciales del registro de Docker si es necesario
    }
  }  
  stages {
    stage('Test') {
      steps {
        sh 'node --version' // Comando para verificar la versión de Node.js
      }
    }
  }
  post { 
    always { 
      cleanWs() // Limpia el espacio de trabajo después de cada ejecución
    }
  }
}
