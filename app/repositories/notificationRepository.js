const{notification} = require('../models')

module.exports = {
    findByUser(id){
        return notification.findAll({where: {user_id : id}})
    },
    createNotif(reqArgs){
        return notification.create(reqArgs)
    },
    updateNotif(id, reqArgs){
        return notification.update(reqArgs, {where: {
            user_id: id
        }})
    }
}