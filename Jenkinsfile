pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ViswanadhMalladi/my-app.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build("my-app:latest")
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image("my-app:latest").inside {
                        sh 'npm test' // Adjust this command to run your tests
                    }
                }
            }
        }
        stage('Deploy to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        def dockerImage = docker.build("my-app:latest")
                        dockerImage.push("${env.BUILD_NUMBER}")
                        dockerImage.push("latest")
                    }
                }
            }
        }
        stage('Deploy to Cloud') {
            steps {
                script {
                    // Example: Add your deployment steps here
                    // Example: Use kubectl to deploy to a Kubernetes cluster
                    // sh 'kubectl apply -f deployment.yaml'
                }
            }
        }
    }
}

