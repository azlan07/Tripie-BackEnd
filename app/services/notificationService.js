const notificationRepository = require('../repositories/notificationRepository')

module.exports = {
    async findNotification(id){
        try{
            const notif = await notificationRepository.findByUser(id)
            return {
                data : notif
            }
        }catch(err){
            throw err;
        }
    },
    async createNotification(reqBody){
        return notificationRepository.createNotif(reqBody)
    },
    updateNotification(id, reqBody){
        return notificationRepository.updateNotif(id, reqBody)
    }
}