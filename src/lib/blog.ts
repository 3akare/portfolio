export interface BlogPost {
  id: string
  title: string
  content: BlogContent[]
  excerpt: string
  author: string
  publishedAt: string
  tags: string[]
  featured: boolean
}

export interface BlogContent {
  type: "text" | "image"
  content: string
  alt?: string
}

export interface BlogData {
  posts: BlogPost[]
  lastUpdated: string
}

const blogData: BlogData = {
  posts: [
    {
      id: "1",
      title: "GitHub Actions Self-Hosted Runner Pipeline Setup",
      content: [
        {
          type: "image",
          content: "/assets/blog-1/image-1.webp",
          alt: "Github Actions",
        },
        {
          type: "text",
          content:
            "This guide provides a comprehensive, step-by-step walkthrough to set up a CI/CD pipeline using a GitHub Actions self-hosted runner on a Virtual Private Server (VPS). This approach is highly flexible and cost-effective, allowing for full control over your build and deployment environment."
        },
        {
          type: "text",
          content:
            "## Setup Steps\n\n### 1. SSH into the VPS\n\n```bash\nssh user@VPS_IP\n```\n\n### 2. System Update\n\n```bash\nsudo apt update && sudo apt upgrade -y\n```\n\n### 3. Install Docker and Docker Compose\n\n```bash\n# Install Docker\ncurl -fsSL [https://get.docker.com](https://get.docker.com) | sh\n\n# Add current user to docker group\nsudo usermod -aG docker $USER\n\n# Log out and back in for group changes to take effect\n# Or use: newgrp docker\n\n# Verify Docker installation\ndocker --version\n\n# Install Docker Compose plugin\nsudo apt install -y docker-compose\n\n# Verify Docker Compose installation\ndocker compose version\n```\n\n### 4. Configure GitHub Actions Runner\n\n#### Get Runner Token\n1. Navigate to your GitHub repository\n2. Go to Settings → Actions → Runners\n3. Click \"New self-hosted runner\"\n4. Copy the registration token\n\n#### Install Runner\n\n```bash\n# Create runner directory\nmkdir ~/actions-runner && cd ~/actions-runner\n\n# Download latest runner package\ncurl -o actions-runner-linux-x64.tar.gz -L \\\n  [https://github.com/actions/runner/releases/latest/download/actions-runner-linux-x64.tar.gz](https://github.com/actions/runner/releases/latest/download/actions-runner-linux-x64.tar.gz)\n\n# Extract the archive\ntar xzf ./actions-runner-linux-x64.tar.gz\n\n# Configure the runner (replace with your values)\n./config.sh --url [https://github.com/USERNAME/REPO](https://github.com/USERNAME/REPO) --token YOUR_TOKEN\n```\n\n#### Test Runner\n\n```bash\n# Test manually\n./run.sh\n\n# Once confirmed working, stop with Ctrl+C\n```\n\n#### Install as Service\n\n```bash\n# Install as systemd service\nsudo ./svc.sh install\n\n# Start the service\nsudo ./svc.sh start\n\n# Check service status\nsudo ./svc.sh status\n```\n\n### 5. Project Setup on VPS\n\nCreate project directory structure:\n\n```bash\nmkdir ~/your-project\ncd ~/your-project\n```"
        },
        {
          type: "text",
          content:
            "## Configuration Files\n\n### Docker Compose Configuration\n\nCreate `docker-compose.yml`:\n\n```yaml\nversion: \"3.8\"\n\nservices:\n  app:\n    image: your-dockerhub-username/your-app:latest\n    container_name: your-app\n    restart: always\n    ports:\n      - \"80:80\"\n    environment:\n      - NODE_ENV=production\n    # Optional: Add volumes for persistent data\n    # volumes:\n    #   - ./data:/app/data\n```\n\n### Dockerfile Example\n\nMulti-stage Dockerfile for Node.js application:\n\n```dockerfile\n# Stage 1: Build\nFROM node:20-alpine AS builder\n\nWORKDIR /app\n\n# Enable pnpm (if using pnpm)\nRUN corepack enable pnpm\n\n# Copy dependency files\nCOPY package.json pnpm-lock.yaml ./\n\n# Install dependencies\nRUN pnpm install --frozen-lockfile\n\n# Copy source code\nCOPY . .\n\n# Build application\nRUN pnpm run build\n\n# Stage 2: Production\nFROM nginx:alpine AS runner\n\n# Remove default nginx static files\nRUN rm -rf /usr/share/nginx/html/*\n\n# Copy built application from builder stage\nCOPY --from=builder /app/dist /usr/share/nginx/html\n\n# Copy nginx configuration if needed\n# COPY nginx.conf /etc/nginx/conf.d/default.conf\n\nEXPOSE 80\n\nCMD [\"nginx\", \"-g\", \"daemon off;\"]\n```\n\n### GitHub Actions Workflow\n\nCreate `.github/workflows/deploy.yml`:\n\n```yaml\nname: CI/CD Pipeline\n\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    branches:\n      - main\n\nenv:\n  DOCKER_IMAGE: your-dockerhub-username/your-app\n\njobs:\n  build-and-deploy:\n    runs-on: self-hosted\n    \n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n\n      - name: Set up Docker Buildx\n        uses: docker/setup-buildx-action@v3\n\n      - name: Log in to Docker Hub\n        uses: docker/login-action@v3\n        with:\n          username: ${{ secrets.DOCKER_USERNAME }}\n          password: ${{ secrets.DOCKER_PASSWORD }}\n\n      - name: Build and push Docker image\n        uses: docker/build-push-action@v5\n        with:\n          context: .\n          push: true\n          tags: |\n            ${{ env.DOCKER_IMAGE }}:latest\n            ${{ env.DOCKER_IMAGE }}:${{ github.sha }}\n          cache-from: type=registry,ref=${{ env.DOCKER_IMAGE }}:buildcache\n          cache-to: type=registry,ref=${{ env.DOCKER_IMAGE }}:buildcache,mode=max\n\n      - name: Deploy with Docker Compose\n        run: |\n          cd ~/your-project\n          docker compose pull\n          docker compose up -d --force-recreate\n          docker system prune -f\n\n      - name: Health check\n        run: |\n          sleep 10\n          curl -f http://localhost || exit 1\n```"
        },
        {
          type: "text",
          content:
            "## GitHub Secrets Configuration\n\nAdd these secrets to your GitHub repository (Settings → Secrets and variables → Actions):\n\n- `DOCKER_USERNAME`: Your Docker Hub username\n- `DOCKER_PASSWORD`: Your Docker Hub password or access token\n\n## Nginx Configuration (Optional)\n\nIf using Nginx, create `nginx.conf`:\n\n```nginx\nserver {\n    listen 80;\n    server_name _;\n    \n    root /usr/share/nginx/html;\n    index index.html;\n    \n    # Enable gzip compression\n    gzip on;\n    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n    \n    location / {\n        try_files $uri $uri/ /index.html;\n    }\n    \n    # Cache static assets\n    location ~* \\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {\n        expires 1y;\n        add_header Cache-Control \"public, immutable\";\n    }\n}\n```\n\n## Maintenance Commands\n\n### Runner Management\n\n```bash\n# Check runner status\nsudo ./svc.sh status\n\n# Stop runner\nsudo ./svc.sh stop\n\n# Start runner\nsudo ./svc.sh start\n\n# Uninstall runner service\nsudo ./svc.sh uninstall\n```\n\n### Docker Cleanup\n\n```bash\n# Remove unused containers, networks, images\ndocker system prune -a -f\n\n# Check disk usage\ndocker system df\n\n# View logs\ndocker compose logs -f\n\n# Restart services\ndocker compose restart\n```\n\n## Troubleshooting\n\n### Common Issues and Solutions\n\n1.  **Runner not starting**\n    ```bash\n    # Check logs\n    journalctl -u actions.runner.* -f\n    ```\n\n2.  **Permission denied errors**\n    ```bash\n    # Ensure user is in docker group\n    groups $USER\n    # Re-login if needed\n    ```\n\n3.  **Port already in use**\n    ```bash\n    # Find process using port\n    sudo lsof -i :80\n    # Stop conflicting service or change port\n    ```\n\n4.  **Docker image pull failures**\n    ```bash\n    # Verify Docker Hub credentials\n    docker login\n    # Check image name and tag\n    ```\n\n## Security Best Practices\n\n1.  **Use secrets for sensitive data** - Never hardcode credentials\n2.  **Limit runner permissions** - Use dedicated user for runner\n3.  **Regular updates** - Keep system and dependencies updated\n4.  **Use HTTPS** - Configure SSL/TLS with Let's Encrypt\n5.  **Firewall configuration** - Only open necessary ports\n6.  **Monitor logs** - Set up log aggregation and monitoring\n\n## Additional Resources\n\n- [GitHub Actions Documentation](https://docs.github.com/en/actions)\n- [Docker Documentation](https://docs.docker.com)\n- [Docker Compose Documentation](https://docs.docker.com/compose)\n- [GitHub Actions Runner Documentation](https://github.com/actions/runner)\n\n## Notes\n\n- This setup is project-agnostic and can be adapted for any application\n- Adjust image names, ports, and environment variables as needed\n- Consider using environment-specific configurations for staging/production\n- The runner automatically starts on system boot via systemd service"
        }
      ],
      excerpt: "A comprehensive guide to setting up a CI/CD pipeline using a GitHub Actions self-hosted runner on a Virtual Private Server (VPS).",
      author: "David Bakare",
      publishedAt: "2025-08-29T14:12:32Z",
      tags: ["GitHub Actions", "CI/CD", "DevOps", "Docker", "Linux"],
      featured: false,
    },
  ],
  lastUpdated: new Date().toISOString(),
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogData.posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getRecentBlogPosts(limit = 2): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.slice(0, limit)
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.id === id) || null
}

export function generateExcerpt(content: BlogContent[], maxLength = 150): string {
  const textContent = content
    .filter((item) => item.type === "text")
    .map((item) => item.content)
    .join(" ")

  if (textContent.length <= maxLength) {
    return textContent
  }

  return textContent.substring(0, maxLength).trim() + "..."
}