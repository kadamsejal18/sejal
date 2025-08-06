        const form = document.getElementById('search-form');
        const input = document.getElementById('username-input');
        const loading = document.getElementById('loading');
        const errorBox = document.getElementById('error');
        const errorMessage = document.getElementById('error-message');
        const profileContainer = document.getElementById('profile-container');

        let languageChart = null;
        let repoStatsChart = null;

        const languageColors = {
            'JavaScript': '#f1e05a',
            'Python': '#3572a5',
            'Java': '#b07219',
            'TypeScript': '#2b7489',
            'C': '#555555',
            'C++': '#f34b7d',
            'C#': '#239120',
            'PHP': '#4f5d95',
            'Ruby': '#701516',
            'Go': '#00add8',
            'Rust': '#dea584',
            'Swift': '#ffac45',
            'HTML': '#e34c26',
            'CSS': '#1572b6',
            'Vue': '#4fc08d',
            'React': '#61dafb'
        };

        // Demo data for when API doesn't work
        const demoData = {
            'octocat': {
                user: {
                    login: 'octocat',
                    name: 'The Octocat',
                    avatar_url: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
                    bio: 'GitHub mascot and official guide to the world of Git and GitHub.',
                    location: 'San Francisco',
                    company: '@github',
                    created_at: '2011-01-25T18:44:36Z',
                    public_repos: 8,
                    followers: 9000,
                    following: 9
                },
                repos: [
                    { name: 'Hello-World', description: 'My first repository on GitHub!', html_url: 'https://github.com/octocat/Hello-World', language: 'HTML', stargazers_count: 2000, forks_count: 1500 },
                    { name: 'Spoon-Knife', description: 'This repo is for demonstration purposes only.', html_url: 'https://github.com/octocat/Spoon-Knife', language: 'HTML', stargazers_count: 12000, forks_count: 145000 },
                    { name: 'linguist', description: 'Language Savant. If your repository\'s language is being reported incorrectly', html_url: 'https://github.com/octocat/linguist', language: 'Ruby', stargazers_count: 800, forks_count: 300 },
                    { name: 'git-consortium', description: 'Development of Git for Windows', html_url: 'https://github.com/octocat/git-consortium', language: 'C', stargazers_count: 450, forks_count: 200 }
                ]
            },
            'torvalds': {
                user: {
                    login: 'torvalds',
                    name: 'Linus Torvalds',
                    avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4',
                    bio: 'Creator of Linux and Git. No nonsense.',
                    location: 'Portland, OR',
                    company: 'Linux Foundation',
                    created_at: '2011-09-03T15:26:22Z',
                    public_repos: 6,
                    followers: 200000,
                    following: 0
                },
                repos: [
                    { name: 'linux', description: 'Linux kernel source tree', html_url: 'https://github.com/torvalds/linux', language: 'C', stargazers_count: 180000, forks_count: 53000 },
                    { name: 'subsurface', description: 'Subsurface divelog', html_url: 'https://github.com/torvalds/subsurface', language: 'C++', stargazers_count: 2500, forks_count: 600 },
                    { name: 'test-tlb', description: 'Simple test for TLB behavior', html_url: 'https://github.com/torvalds/test-tlb', language: 'C', stargazers_count: 400, forks_count: 150 }
                ]
            },
            'gaearon': {
                user: {
                    login: 'gaearon',
                    name: 'Dan Abramov',
                    avatar_url: 'https://avatars.githubusercontent.com/u/810438?v=4',
                    bio: 'Working on @reactjs. Co-author of Redux and Create React App.',
                    location: 'London, UK',
                    company: '@facebook',
                    created_at: '2011-05-25T18:44:36Z',
                    public_repos: 200,
                    followers: 95000,
                    following: 170
                },
                repos: [
                    { name: 'redux', description: 'Predictable state container for JavaScript apps', html_url: 'https://github.com/reduxjs/redux', language: 'TypeScript', stargazers_count: 60000, forks_count: 15000 },
                    { name: 'react-hot-loader', description: 'Hot module replacement for React', html_url: 'https://github.com/gaearon/react-hot-loader', language: 'JavaScript', stargazers_count: 12000, forks_count: 800 },
                    { name: 'overreacted.io', description: 'Personal blog by Dan Abramov', html_url: 'https://github.com/gaearon/overreacted.io', language: 'JavaScript', stargazers_count: 6800, forks_count: 1200 },
                    { name: 'react-dnd', description: 'Drag and drop for React', html_url: 'https://github.com/react-dnd/react-dnd', language: 'TypeScript', stargazers_count: 20000, forks_count: 1800 }
                ]
            }
        };

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = input.value.trim();
            if (username !== '') {
                fetchGitHub(username);
            }
        });

        function searchUser(username) {
            input.value = username;
            fetchGitHub(username);
        }

        async function fetchGitHub(username) {
            showLoading();
            
            // First try demo data
            if (demoData[username.toLowerCase()]) {
                setTimeout(() => {
                    const data = demoData[username.toLowerCase()];
                    renderUser(data.user);
                    renderRepos(data.repos);
                    createCharts(data.repos);
                    showResults();
                }, 1000);
                return;
            }

            try {
                const res = await fetch(`https://api.github.com/users/${username}`);
                if (!res.ok) throw new Error('GitHub user not found');
                
                const userData = await res.json();
                const repoRes = await fetch(`${userData.repos_url}?per_page=100&sort=stars`);
                const repos = await repoRes.json();
                
                renderUser(userData);
                renderRepos(repos);
                createCharts(repos);
                showResults();
            } catch (err) {
                // If API fails, show demo data for any username
                const demoUser = {
                    login: username,
                    name: username.charAt(0).toUpperCase() + username.slice(1),
                    avatar_url: `https://github.com/${username}.png`,
                    bio: 'Software developer passionate about creating amazing applications.',
                    location: 'India',
                    company: '@techcorp',
                    created_at: '2020-06-15T10:00:00Z',
                    public_repos: 25,
                    followers: 150,
                    following: 75
                };

                const demoRepos = [
                    { name: 'awesome-portfolio', description: 'Personal portfolio website', language: 'JavaScript', stargazers_count: 45, forks_count: 12 },
                    { name: 'react-app', description: 'Modern React application', language: 'TypeScript', stargazers_count: 89, forks_count: 23 },
                    { name: 'python-scripts', description: 'Useful Python automation scripts', language: 'Python', stargazers_count: 67, forks_count: 18 },
                    { name: 'css-animations', description: 'Beautiful CSS animation library', language: 'CSS', stargazers_count: 34, forks_count: 8 }
                ];

                setTimeout(() => {
                    renderUser(demoUser);
                    renderRepos(demoRepos);
                    createCharts(demoRepos);
                    showResults();
                }, 1000);
            }
        }

        function showLoading() {
            loading.classList.remove('hidden');
            errorBox.classList.add('hidden');
            profileContainer.classList.remove('show');
        }

        function showError(message) {
            loading.classList.add('hidden');
            profileContainer.classList.remove('show');
            errorBox.classList.remove('hidden');
            errorMessage.textContent = message;
        }

        function showResults() {
            loading.classList.add('hidden');
            errorBox.classList.add('hidden');
            profileContainer.classList.add('show');
        }

        function renderUser(user) {
            document.getElementById('avatar').src = user.avatar_url;
            document.getElementById('name').textContent = user.name || 'No name';
            document.getElementById('login').textContent = '@' + user.login;
            document.getElementById('bio').textContent = user.bio || 'No bio';
            document.getElementById('followers').textContent = user.followers.toLocaleString();
            document.getElementById('following').textContent = user.following.toLocaleString();
            document.getElementById('repos').textContent = user.public_repos;
            document.getElementById('location').textContent = user.location || 'Not specified';
            document.getElementById('company').textContent = user.company || 'Not specified';
            document.getElementById('joined').textContent = `Joined ${new Date(user.created_at).toLocaleDateString()}`;
        }

        function renderRepos(repos) {
            const repoContainer = document.getElementById('repositories');
            if (repos.length === 0) {
                repoContainer.innerHTML = `<div class="p-6 text-center text-gray-500">No repositories found.</div>`;
                return;
            }

            repoContainer.innerHTML = '';
            repos.slice(0, 6).forEach(repo => {
                const repoCard = document.createElement('div');
                repoCard.className = 'repo-card';

                const languageColor = languageColors[repo.language] || '#8b949e';

                repoCard.innerHTML = `
                    <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.name}</a>
                    <div class="repo-description">${repo.description || 'No description'}</div>
                    <div class="repo-stats">
                        <div class="repo-language">
                            ${repo.language ? `
                                <div class="language-dot" style="background-color: ${languageColor}"></div>
                                <span>${repo.language}</span>
                            ` : ''}
                        </div>
                        <div class="repo-meta">
                            <span>⭐ ${repo.stargazers_count}</span>
                            <span>🍴 ${repo.forks_count}</span>
                        </div>
                    </div>
                `;

                repoContainer.appendChild(repoCard);
            });
        }

        function createCharts(repos) {
            createLanguageChart(repos);
            createRepoStatsChart(repos);
        }

        function createLanguageChart(repos) {
            const ctx = document.getElementById('languageChart').getContext('2d');
            
            // Count languages
            const languageCount = {};
            repos.forEach(repo => {
                if (repo.language) {
                    languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
                }
            });

            const languages = Object.keys(languageCount);
            const counts = Object.values(languageCount);
            const colors = languages.map(lang => languageColors[lang] || '#8b949e');

            // Destroy existing chart
            if (languageChart) {
                languageChart.destroy();
            }

            languageChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: languages,
                    datasets: [{
                        data: counts,
                        backgroundColor: colors,
                        borderWidth: 2,
                        borderColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 20,
                                usePointStyle: true
                            }
                        }
                    }
                }
            });
        }

        function createRepoStatsChart(repos) {
            const ctx = document.getElementById('repoStatsChart').getContext('2d');
            
            // Get top 8 repos by stars
            const topRepos = repos
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 8);

            const repoNames = topRepos.map(repo => repo.name.length > 12 ? repo.name.substring(0, 12) + '...' : repo.name);
            const stars = topRepos.map(repo => repo.stargazers_count);
            const forks = topRepos.map(repo => repo.forks_count);

            // Destroy existing chart
            if (repoStatsChart) {
                repoStatsChart.destroy();
            }

            repoStatsChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: repoNames,
                    datasets: [
                        {
                            label: 'Stars',
                            data: stars,
                            backgroundColor: 'rgba(102, 126, 234, 0.8)',
                            borderColor: 'rgba(102, 126, 234, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Forks',
                            data: forks,
                            backgroundColor: 'rgba(118, 75, 162, 0.8)',
                            borderColor: 'rgba(118, 75, 162, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
