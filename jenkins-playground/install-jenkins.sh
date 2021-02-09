docker run -p 8080:8080 -p 50000:50000 -v jenkins-data:/var/jenkins_home -d --name jenkins-script jenkins/jenkins:lts
echo 'Jenkins installed'
echo 'You should now be able to access jenkins at: http://localhost:8080'