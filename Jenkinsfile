pipeline {
  agent any
  stages {
    stage('sleep') {
      parallel {
        stage('sleep1') {
          steps {
            sleep 1
          }
        }
        stage('sleep3') {
          steps {
            sleep 30
          }
        }
        stage('sleep4') {
          steps {
            sleep 4
          }
        }
      }
    }
    stage('build') {
      steps {
        echo 'xxx'
      }
    }
  }
}