# my-app – Simple CI/CD with GitHub Actions + EC2

Push to `main` -> tests run -> if green, GitHub SSHes into EC2, pulls, and restarts via PM2.

Secrets required: HOST_DNS, USERNAME (ubuntu), EC2_SSH_KEY (full .pem contents).
