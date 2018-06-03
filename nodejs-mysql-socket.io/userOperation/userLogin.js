

model.exports.userLogin = (req, res, next)=>{
    db.query('SELECT userName FROM userInfoDate WHERE userName='+req.param('userName'),(data, err)=>{
        if(!data){
            res.send('Cannot find user!');
        }else{
            db.query('SELECT userPwd FROM userInfoDate WHERE userPwd='+req.param('userPwd')+'AND'+'userId='+data.userId,(data2, err)=>{
                if (!data2) {
                    res.send('Password mistake!');
                } else {
                    res.send('Login done!Enjoj it.');
                }
            });
        }
    });

};

model.exports.userSginup = (req, res, next)=>{

};

model.exports.userKey = (req, res, next)=>{

};