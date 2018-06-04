const express = require('express');
const app = require('http').createServer();
const io = require('socket.io')(app);
const fs = require('fs');
const mysql = require('mysql');


var db = mysql.createPool({
    host: '60.205.208.104',
    user: 'NodeTest',
    password: '5201314',
    database: 'NodeTest'
}); //自定义sql连接池

var webServerMach = express();



webServerMach.get('userLogin',(req, res, next)=>{
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

});

io.on('connection', function (socket) {//socket.io server connect
    socket.emit('stauts', { stauts: 'Connect done!' });
    socket.on('H_Push', function (data) {
        data.emit('S_Return', { S_Return:getDataFormDatabase(Push, data.uDataTime, data.uDataTable, all, uDataId) });
    });
    socket.on('S_Pull', function (data) {//pull all
        data.emit('S_Return', { S_Return: getDataFormDatabase(Pull, data.uDataTime, data.uDataTable, all, uDataId) });
    });
    socket.disconnect();
});

function getUserFromeDatabase(uName, uPassword) {
    let uId;
    db.query('SELECT' + 'uId' + 'FROM USERDATA WHERE uName=' + uName + 'AND uPassword=' + uPassword, (data, err) => {
        if (err) {
            return err;
        } else {
            return data;
        }
    });
}

function getDataFormDatabase(uDataType, uDataTime, uDataTable, uDataHead, uDataId) {
    if (uDataHead === 'all') {
        uDataHead = '*';
    }
    if (dataType === 'Pull') {
        db.query('SELECT' + uDataHead + 'FROM' + uDataTable + 'WHERE dataTime=' + uDataTime + 'AND dataId=' + uDataId, (data, err) => {
            if (err) {
                return err;
            }else{
                return data;
            }
        });
    }
    if (uDataType === 'Push') {
        db.query('INSERT' + '(' + uDataHead.eg.eg.eg + ')')//push any??
    }
    return 'Error,Cannot do this.'
}



io.listen(3666);
webServerMach.listen(8088);


