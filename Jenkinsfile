pipeline {
    agent any

    stages {
        stage('Install Nginx') {
            steps {
                sh '''
                    sudo apt update
                    sudo apt install -y nginx
                '''
            }
        }

        stage('Change index.html') {
            steps {
                sh '''
                    echo "<h1>Welcome to My Custom NGINX Page - Deployed via Jenkins</h1>" | sudo tee /var/www/html/index.html
                '''
            }
        }

        stage('Restart Nginx') {
            steps {
                sh 'sudo systemctl restart nginx'
            }
        }
    }

    post {
        success {
            echo 'Nginx deployed successfully!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
