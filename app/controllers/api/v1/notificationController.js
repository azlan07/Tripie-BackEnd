const notificationService = require('../../../services/notificationService')

module.exports = {
    async showNotif(req, res, next){
        try{
            await notificationService.findNotification(req.params.id)
            .then(({data}) => {
                if(data == null || data == undefined || data == ''){
                    return res.status(404).json({
                        status: "FAIL",
                        message: "Belum Ada Notifikasi"
                    }) 
                }else{
                    res.status(200).json({
                        status: "OK",
                        data: data
                    })
                    next()
                }
            })
        }catch(err){
            return res.status(401).json({
                status: "ERROR",
                message: err.message
            })
        }
    },
    async addNotif(req, res){
        try{
            const now = new Date()
            await notificationService.createNotification({user_id: req.body.user_id, message:"Proses pemesanan tiket kamu berhasil, selalu cek jadwal pemberangkatan kamu ya, agar kamu tidak ketinggalan pesawat.", status: "unread", date: now})
        }catch(err){
            res.status(401).json({
                status: "ERROR",
                message: err.message
            })
        }
    },
    async updateNotif(req, res){
        try{
            await notificationService.updateNotification(req.params.id,{
                status: "read"
            })
        }catch(err){
            return res.status(401).json({
                status: "ERROR",
                message: err.message
            })
        }
    }
}