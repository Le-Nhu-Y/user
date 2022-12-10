var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["User"] = 2] = "User";
    Role[Role["Public"] = 3] = "Public";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(username, email, role) {
        this.username = username;
        this.email = email;
        this.role = role;
    }
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getRole = function () {
        return this.role;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    return User;
}());
var user = new User("Le Y", "ley@gmail.com", 5);
console.log(user);
