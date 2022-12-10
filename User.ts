enum Role {
    Admin=1,
    User=2,
    Public=3,
}
class User {
    protected username: string;
    protected email: string;
    protected role:Role;
    constructor(username: string, email: string, role: Role) {
        this.username = username;
        this.email = email;
        this.role = role;
    }
    getUsername():string {
        return this.username;
    }
    setUsername(username:string){
        this.username = username;
    }

    getEmail():string {
        return this.email;
    }
    setEmail(email:string){
            this.email = email;
    }
    getRole():Role {
        return this.role;
    }
    setRole(role:Role):void {
        this.role = role;
    }
}
let user: User=new User("Le Y","ley@gmail.com",1);
    console.log(user);