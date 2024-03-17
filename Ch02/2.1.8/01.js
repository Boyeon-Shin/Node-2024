function finAndSaveUser(Users){
    Users.find({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({gender: 'm'});
        })

        .then((user) => {

        })
        .catch(err => {
            console.log(err);
        })
}