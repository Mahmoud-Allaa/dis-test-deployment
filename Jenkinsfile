
pipeline {
    agent {
       label "agent-113"
    }
    stages {
    stage("Build") {
        steps {
            script{
                 app = docker.build("dis-sa:test-v1.0")
                }

        }
    }

stage("Deploy"){
    steps{
   sh "echo --- STARTING DEPLOYMENT ---"
    // sh "/home/jenkins/website.sh"
            sh "docker stop dis-sa || true"
            sh "docker rm dis-sa || true"
            sh "docker run --name dis-sa -p 5005:80 -d dis-sa:test-v1.0"
    sh "echo --- Deployment Complete ---"
}           
    }
}}
