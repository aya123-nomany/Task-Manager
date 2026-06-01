pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git credentialsId: 'github-token',
                    url: 'https://github.com/aya123-nomany/Task-Manager.git'
            }
        }

        stage('Build Docker') {
            steps {
                bat 'docker build -t task-manager .'
            }
        }

        stage('Deploy') {
            steps {
                bat 'kubectl apply -f k8s/'
            }
        }
    }
}