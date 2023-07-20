const {User} = require('../DB_connection');

module.exports = async (req, res) => {
    try {
        const {email, password} = req.query;
        if(!email || !password){
            return res.status(400).json({message: 'Missing email or password'});
        }
        const user = await User.findOne({where: {email}});

        if(!user) return res.status(400).json({message: 'User not found'});

        return user.password === password ? res.json({access: true}) : res.status(403).json({message: 'Wrong password'});
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
}