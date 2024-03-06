var users = ["Hamza", "Ali", "Faisal"];

var signUp = prompt("Do you want to sign up? (yes/no)");

if (signUp === "yes") {
    let username = prompt('Enter your name:');
    users.push(username);
}

console.log('Usernames:', users);
