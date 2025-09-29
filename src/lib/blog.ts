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
    {
      id: "2",
      title: "How to Get $2,300+ in Google Cloud Credits",
      content: [
        {
          type: "image",
          content: "/assets/blog-2/image-1.webp",
          alt: "Google Cloud Console"
        },
        {
          type: "text",
          content:
            "The idea is to apply for the GCP Cloud Startup Program.\n\nThey offer between $2,000 and $300,000 in GCP credits to AI and Web3 startups. I'm not that greedy, so I'm going for the lower tier.\n\nBut there's a catch. When requesting the credits, you can't use a personal email account (@gmail.com). You must use a business email account (@company.com).\n\nAlso, the domain name of the email address you use to register must match the one you used to set up your console and billing account."
        },
        {
          type: "text",
          content:
            "### Steps\n\n**1. Buy a domain name**\nThis is the only cost. Get a domain name and opt for cheap TLDs like .xyz, .co, or .cc. Use Namecheap (avoid GoDaddy).\n\n**2. Create a Zoho Free account**\nOnce you have a domain name (e.g. outlinr.xyz), you'll need email hosting attached to that domain to get something like [bakare@outlinr.xyz](mailto:bakare@outlinr.xyz). Luckily, Zoho provides up to 5 email addresses for free, for life. Another option is Google Workspace, but it isn't cheap.\n\nNote: you'll need to configure a few things-A, TXT, CNAME, and MX records. It's a hassle, but with Gemini specifically, you'll be fine.\n\n**3. Create a Google Cloud Console account**\nThis part is tricky. If you use Zoho Mail, you can't just create one directly-you first need to verify that you own the domain name using Google Cloud Identity verification. This means setting up DNS records on your Namecheap dashboard again.\n\nAfter verification, the rest is easy. As a welcome gift, Google gives you $300 in free credits for 90 days.\n\n(I stopped here and will continue in December when my credits run out.)\n\n**4. Apply for the Cloud Startup Program**\nAccording to Redditors, the process is straightforward. You apply and get a response within 3 to 5 working days. The success rate is about 90%.\n\nYou'll need to upload:\n\n* Your name\n* Your company email\n* Your billing information (from your company console)\n* The URL of your existing site. You'll need to build and deploy a landing page so they know you're serious. The domain name must match your company email as well. Vercel is free, so this should be simple.\n\n**Result:** Receive between $2,000 and $300,000 in credits.\n\nAnd that's it."
        }
      ],
      excerpt: "The idea is to apply for the GCP Cloud Startup Program. They offer between $2,000 and $300,000 in GCP credits to AI and Web3 startups...",
      author: "David Bakare",
      publishedAt: "2025-09-05T16:16:20Z",
      tags: ["Cloud", "Google Cloud", "Startup", "Credits", "Budgeting"],
      featured: false
    },
    {
      id: "3",
      title: "How I Optimized My Workspace to Save Energy Without Losing Productivity",
      content: [
        {
          type: "image",
          content: "/assets/blog-3/image-1.png",
          alt: "macOS Energy Optimization"
        },
        {
          type: "text",
          content:
            "This blog post is about how I set up my workspace to consume as little energy as possible without completely crippling my workflow.\n\n**Operating system:** macOS"
        },
        {
          type: "text",
          content:
            "### The Backstory\nOver the past few months, I've been hunting for a text editor that doesn't murder my battery. I switched from VS Code to Neovim because it's a TUI and far lighter, but the endless configuration nearly broke me.\n\nTo learn, I started the *Advent of Neovim* in December 2024. While others exchanged Christmas gifts, I was busy learning Lua and running `:nvimTutor`. By January, I had:\n\n* LSPs for my main languages\n* Treesitter for syntax highlighting\n* Oil.nvim as a file explorer\n\nIt worked, but navigation was clunky. I spent too much time mashing keys just to move across files. Eventually, I caved and returned to VS Code. With minimal extensions (no Copilot—AI in editors is too power-hungry), life was simpler."
        },
        {
          type: "text",

          content:
            "### The Zed Experiment\nThen came **Zed**: built with Rust, lightweight, beautiful, and marketed as the future. I tried it. At first, it was smooth, but AI features often failed when using my own API key. Strange.\n\nAfter a few days, I noticed unusual battery drain. One session with two Zed windows, Docker (MySQL), and Chrome open drained my Mac from 100% to 10% in under 90 minutes. Normally, the same setup with VS Code lasts 4–6 hours.\n\nChecking Activity Monitor, Zed alone ate over 60% of the battery. Chrome (6 tabs) sat around 2–4%, and Docker just 6%. I suspected Zed was forcing the GPU to run at full tilt.\n\nThat was the final straw. I needed an editor that respected my battery."
        },
        {
          type: "text",
          content:
            "### A New Dawn: Back to Neovim\nSo I'm going back to Neovim—but smarter this time.\n\n**Problems last time:**\n* Everything was new and overwhelming.\n* Too few plugins, making development painful.\n* Misunderstood Neovim's performance model. I thought plugins would eat resources like VS Code extensions, but Neovim is fundamentally just a text buffer. When idle, its CPU usage is negligible.\n\n**Solution:** I skipped the config hell and installed **Astronvim** (astronvim.com). It ships with sensible defaults, LSPs, and Treesitter preconfigured. Yes, it has some extras I may not need, but overall it's lighter and more efficient than GUI editors."
        },
        {
          type: "text",
          content:
            "### Extra Energy-Saving Techniques\nI didn't stop at Neovim. Here's how I optimized the rest of my macOS setup:\n\n**1. Browser**  \nChrome is my daily driver but it's notoriously resource-heavy. My fix is **Safari**—lightweight, energy-efficient, and good enough for docs and ChatGPT. Chrome stays installed for accounts and passwords, but Safari is my main dev browser.\n\n**2. MySQL & Services**  \nRunning databases in Docker felt clever, but spinning up the entire daemon for one service is wasteful. My fix: install MySQL locally with Brew:  \n```bash\nbrew services start mysql\n```\nWay faster than waiting for Docker to boot.\n\n**3. Disable Spotlight Indexing**  \nSpotlight constantly eats CPU while indexing. I selectively disable it using `mdutil`:\n```bash\nsudo mdutil -i off /\n# Turn back on\nsudo mdutil -i on /\n```\nThis prevents background drain.\n\n**4. Low Power Mode (LPM)**  \nUseful, but tricky. LPM slows the CPU, which is fine for light work (docs, reading). But for heavy tasks, it can backfire: slower CPU = longer task = more energy used. My rule: enable LPM for light work, disable it for heavy lifting."
        },
        {
          type: "text",
          content:
            "### Final Thoughts\nThis setup isn't perfect, but it's balanced. Neovim with Astronvim gives me a fast, battery-friendly editor. Safari trims browser overhead. Running MySQL locally avoids Docker's bloat. Spotlight indexing is under control, and LPM is used strategically.\n\nResult: my Mac lasts significantly longer on battery while still letting me get real work done."
        }
      ],
      excerpt: "Here's how I optimized my macOS workspace to save energy without sacrificing productivity: Neovim with Astronvim, Safari over Chrome, local MySQL instead of Docker, controlled Spotlight indexing, and smarter use of Low Power Mode.",
      author: "David Bakare",
      publishedAt: "2025-09-29T15:20:00Z",
      tags: ["macOS", "Productivity", "Energy Saving", "Neovim", "Developer Setup"],
      featured: false
    }
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
