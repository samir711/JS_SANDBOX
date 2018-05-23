class Github {

  constructor() {
  
    this.client_id = 'ac0fd5651a1960189d94';
    this.client_secret = '826f09a5321dbd4e9d2756a7b690ad4b5fc20ff6';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'

}
 async getUser(user) {
   
   const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort= ${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const profile = await profileResponse.json();

    const repos = await repoResponse.json();

   return {

     profile,
     repos
   }


   
 }
}