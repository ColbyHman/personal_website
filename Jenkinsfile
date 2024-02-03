node {
  stage 'Checkout'
  git url: 'https://github.com/ColbyHman/personal_website.git'

  stage 'Build'
  docker.build('personal_site')

  stage 'Deploy'
  sh './deploy.sh'
}