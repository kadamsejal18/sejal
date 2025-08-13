  class UserManager {
            constructor() {
                this.users = [];
                this.init();
            }

            init() {
                const form = document.getElementById('userForm');
                form.addEventListener('submit', (e) => this.handleSubmit(e));
                this.updateDisplay();
            }

            handleSubmit(e) {
                e.preventDefault();
                
                const formData = {
                    id: Date.now(),
                    profile: document.getElementById('profile').value.trim(),
                    name: document.getElementById('name').value.trim(),
                    role: document.getElementById('role').value.trim(),
                    bio: document.getElementById('bio').value.trim(),
                    email: document.getElementById('email').value.trim()
                };

                if (!formData.name || !formData.role || !formData.email) {
                    alert('Please fill in all required fields (marked with *)');
                    return;
                }

                this.addUser(formData);
                this.clearForm();
            }

            addUser(userData) {
                this.users.push(userData);
                this.updateDisplay();
            }

            deleteUser(userId) {
                if (confirm('Are you sure you want to delete this user?')) {
                    this.users = this.users.filter(user => user.id !== userId);
                    this.updateDisplay();
                }
            }

            clearForm() {
                document.getElementById('userForm').reset();
            }

            createUserCard(user) {
                const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
                
                return `
                    <div class="card">
                        <button class="delete-btn" onclick="userManager.deleteUser(${user.id})">&times;</button>
                        <div class="profile">
                            ${user.profile ? 
                                `<img src="${user.profile}" alt="${user.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                 <div class="profile-placeholder" style="display: none;">${initials}</div>` :
                                `<div class="profile-placeholder">${initials}</div>`
                            }
                        </div>
                        <h3>${user.name}</h3>
                        <div class="role">${user.role}</div>
                        ${user.bio ? `<p class="bio">${user.bio}</p>` : ''}
                        <div class="email">${user.email}</div>
                    </div>
                `;
            }

            updateDisplay() {
                const userGrid = document.getElementById('userGrid');
                const emptyState = document.getElementById('emptyState');
                
                if (this.users.length === 0) {
                    userGrid.innerHTML = `
                        <div class="empty-state">
                            <h3>No Users Yet</h3>
                            <p>Add your first user to get started!</p>
                        </div>
                    `;
                } else {
                    userGrid.innerHTML = this.users.map(user => this.createUserCard(user)).join('');
                }
            }
        }

        // Initialize the user manager
        const userManager = new UserManager();