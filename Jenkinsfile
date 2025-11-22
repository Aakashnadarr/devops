pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/Aakashnadarr/devops.git', branch: 'master'
            }
        }

        stage('Install Apache') {
            steps {
                sh """
                    if ! command -v apache2 >/dev/null; then
                        echo "Installing Apache..."
                        sudo apt update
                        sudo apt install -y apache2
                    else
                        echo "Apache already installed"
                    fi
                """
            }
        }

        stage('Stop Nginx (if running)') {
            steps {
                sh '''
                    if systemctl is-active --quiet nginx; then
                        echo "Stopping Nginx..."
                        sudo systemctl stop nginx
                        sudo systemctl disable nginx
                    else
                        echo "Nginx is not running"
                    fi
                '''
            }
        }

        stage('Copy index.html to Apache') {
            steps {
                sh 'sudo cp index.html /var/www/html/index.html'
            }
        }

        stage('Restart Apache') {
            steps {
                sh 'sudo systemctl restart apache2'
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
            echo 'Apache deployed successfully!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
