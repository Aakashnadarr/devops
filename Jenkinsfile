pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/Aakashnadarr/devops.git', branch: 'master'
            }
        }

        stage('Install Nginx') {
            steps {
                sh """
                    if ! command -v nginx >/dev/null; then
                        echo "Installing Nginx..."
                        sudo apt update
                        sudo apt install -y nginx
                    else
                        echo "Nginx already installed"
                    fi
                """
            }
        }

        stage('Copy index.html to Nginx') {
            steps {
                sh 'sudo cp index.html /var/www/html/index.html'
            }
        }

        stage('Restart Nginx') {
            steps {
                sh 'sudo systemctl restart nginx'
            }
        }

        stage('Test Page') {
            steps {
                sh 'curl -I http://localhost'
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

