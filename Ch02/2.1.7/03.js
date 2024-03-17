function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => {
        if(err) {
            return console.error(err);
        }
        user.name = 'Zero';
        user.save((err)=> {
            if(err) {
                return console.error(err);
            }
            Users.findOne({gender: 'm'}, (err, user) => {
                //세번째 콜벡
                // 생략
            })
        })
    })
}