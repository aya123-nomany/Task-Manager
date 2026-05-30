pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/user/task-manager.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t task-manager .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}