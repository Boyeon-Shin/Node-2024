function findAndSaverUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })

        .then((user) => {
            return Users.findOne({gender: 'm'});
        })

        .then((user) => {
            // 생략
        })

        .catch(err => {
            console.log(err);
        });
}