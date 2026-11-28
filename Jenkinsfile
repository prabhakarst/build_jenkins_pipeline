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
            archiveArtifacts(
                artifacts: 'playwright-report/**, test-results/**',
                allowEmptyArchive: true
            )
        }
    }
}