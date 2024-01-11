
pipeline {
    agent {
       label "agent-113"
    }
    stages {
    stage("Build") {
        steps {
            sh "echo --- STARTING BUILDx ---"
             sh """
                npm install
                npm run build 
                """
            sh "echo --- BUILD SUCCEEDED ---"
        }
    }

stage("Deploy"){
    steps{
sh "echo --- STARTING DEPLOYMENT ---"
    sh "/home/jenkins/website.sh"
    sh "echo --- Deployment Complete ---"
}           
    }
}}
