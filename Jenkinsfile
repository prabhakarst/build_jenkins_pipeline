pipeline {
    agent any

    parameters {
        string(
            name: 'BROWSER',
            defaultValue: 'chromium',
            description: 'Target Playwright browser project'
        )
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Install') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install chromium'
            }
        }

        stage('Playwright tests') {
            steps {
                bat 'npx playwright test --project=chromium'
            }
        }
    }

   post {
        always {
            script {
                if (fileExists('playwright-report/index.html')) {
                    publishHTML(target: [
                        reportName: 'Playwright HTML Report',
                        reportDir: 'playwright-report',
                        reportFiles: 'index.html',
                        keepAll: true,
                        alwaysLinkToLastBuild: true,
                        allowMissing: true
                    ])
                } else {
                    echo 'Playwright HTML report not found!'
                }
            }
        }
    }
}